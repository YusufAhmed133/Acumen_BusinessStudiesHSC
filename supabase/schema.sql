-- =========================================================================
-- Acumen HSC Tutoring — Supabase schema
-- Run this on a fresh Supabase project. Idempotent.
-- =========================================================================

-- Extensions
create extension if not exists "pgcrypto";
create extension if not exists "citext";

-- ─── Enums ────────────────────────────────────────────────────────────────
do $$ begin
  create type year_group as enum ('Year 11', 'Year 12');
exception when duplicate_object then null; end $$;

do $$ begin
  create type lead_source as enum ('hero_form', 'contact_form', 'resource_gate', 'footer_form', 'other');
exception when duplicate_object then null; end $$;

do $$ begin
  create type lead_status as enum ('new', 'contacted', 'converted', 'disqualified');
exception when duplicate_object then null; end $$;

do $$ begin
  create type hsc_topic as enum ('operations', 'marketing', 'finance', 'human_resources');
exception when duplicate_object then null; end $$;

do $$ begin
  create type resource_kind as enum ('notes', 'past_paper', 'case_study', 'syllabus_summary', 'practice_question');
exception when duplicate_object then null; end $$;

do $$ begin
  create type student_status as enum ('active', 'paused', 'churned');
exception when duplicate_object then null; end $$;

-- ─── LEADS ────────────────────────────────────────────────────────────────
create table if not exists public.leads (
  id                    uuid primary key default gen_random_uuid(),
  created_at            timestamptz not null default now(),
  updated_at            timestamptz not null default now(),
  name                  text not null check (char_length(name) between 1 and 120),
  email                 citext not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  phone                 text not null check (char_length(phone) between 6 and 20),
  year_group            year_group not null,
  source                lead_source not null default 'hero_form',
  message               text check (message is null or char_length(message) <= 2000),
  utm_source            text,
  utm_medium            text,
  utm_campaign          text,
  referrer              text,
  user_agent            text,
  ip_hash               text,
  status                lead_status not null default 'new',
  notes                 text,
  contacted_at          timestamptz,
  converted_student_id  uuid
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx     on public.leads (status) where status = 'new';
create index if not exists leads_email_idx      on public.leads (email);

-- ─── STUDENTS ─────────────────────────────────────────────────────────────
create table if not exists public.students (
  id                  uuid primary key references auth.users(id) on delete cascade,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now(),
  email               citext not null unique,
  full_name           text not null,
  phone               text,
  year_group          year_group not null,
  status              student_status not null default 'active',
  lessons_remaining   int not null default 0 check (lessons_remaining >= 0),
  package_started_at  timestamptz,
  package_expires_at  timestamptz,
  origin_lead_id      uuid references public.leads(id) on delete set null,
  admin_notes         text
);

create index if not exists students_status_idx on public.students (status);
create index if not exists students_email_idx  on public.students (email);

-- ─── RESOURCES ────────────────────────────────────────────────────────────
create table if not exists public.resources (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),
  topic           hsc_topic not null,
  kind            resource_kind not null default 'notes',
  title           text not null check (char_length(title) between 1 and 200),
  slug            text not null unique check (slug ~ '^[a-z0-9-]+$'),
  description     text,
  storage_path    text not null,
  file_size_bytes bigint,
  page_count      int,
  is_published    boolean not null default false,
  is_preview      boolean not null default false,
  sort_order      int not null default 0
);

create index if not exists resources_topic_idx     on public.resources (topic, sort_order) where is_published;
create index if not exists resources_published_idx on public.resources (is_published);

-- ─── updated_at trigger ───────────────────────────────────────────────────
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;

drop trigger if exists leads_updated_at    on public.leads;
drop trigger if exists students_updated_at on public.students;
drop trigger if exists resources_updated_at on public.resources;

create trigger leads_updated_at     before update on public.leads     for each row execute function public.set_updated_at();
create trigger students_updated_at  before update on public.students  for each row execute function public.set_updated_at();
create trigger resources_updated_at before update on public.resources for each row execute function public.set_updated_at();

-- ─── Helper: is current session an active student? ────────────────────────
create or replace function public.is_active_student()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.students
    where id = auth.uid() and status = 'active'
  );
$$;

-- ─── RLS ──────────────────────────────────────────────────────────────────
alter table public.leads     enable row level security;
alter table public.students  enable row level security;
alter table public.resources enable row level security;

-- Leads: no client access. All writes go through the service-role API route.
revoke all on public.leads from anon, authenticated;

-- Students: own row read only
drop policy if exists students_self_read on public.students;
create policy students_self_read
  on public.students for select
  to authenticated
  using (id = auth.uid());

-- Resources: preview rows visible to all; full access for active students
drop policy if exists resources_preview_read   on public.resources;
drop policy if exists resources_student_read   on public.resources;

create policy resources_preview_read
  on public.resources for select
  to anon, authenticated
  using (is_published and is_preview);

create policy resources_student_read
  on public.resources for select
  to authenticated
  using (is_published and public.is_active_student());

-- ─── Storage buckets ──────────────────────────────────────────────────────
-- Run in Supabase dashboard or via storage API if SQL editor doesn't support it
insert into storage.buckets (id, name, public)
  values ('resources', 'resources', false), ('resource-previews', 'resource-previews', false)
  on conflict (id) do nothing;

-- Deny all direct client reads — all downloads go through signed URLs
drop policy if exists storage_resources_no_client_read on storage.objects;
create policy storage_resources_no_client_read
  on storage.objects for select
  to anon, authenticated
  using (false);

-- ─── PRACTICE WHITELIST ───────────────────────────────────────────────────
-- Founder adds emails here via Supabase dashboard to grant practice bank access.
-- API route /api/gate checks this table with service-role key (no client access).
create table if not exists public.whitelist (
  id         uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email      citext not null unique check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  note       text
);

alter table public.whitelist enable row level security;
revoke all on public.whitelist from anon, authenticated;

-- ─── RESOURCE WHITELIST ───────────────────────────────────────────────────
-- Separate from quiz bank whitelist. Founder adds emails here after enrolment.
-- API route /api/resource-gate checks this table with service-role key.
create table if not exists public.resource_whitelist (
  id         uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  granted_by text,
  email      citext not null unique check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  note       text
);

alter table public.resource_whitelist enable row level security;
revoke all on public.resource_whitelist from anon, authenticated;
