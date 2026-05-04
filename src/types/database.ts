export type YearGroup = "Year 11" | "Year 12";
export type LeadSource =
  | "hero_form"
  | "contact_form"
  | "resource_gate"
  | "footer_form"
  | "other";
export type LeadStatus = "new" | "contacted" | "converted" | "disqualified";
export type HscTopic = "operations" | "marketing" | "finance" | "human_resources";
export type ResourceKind =
  | "notes"
  | "past_paper"
  | "case_study"
  | "syllabus_summary"
  | "practice_question";
export type StudentStatus = "active" | "paused" | "churned";

export interface Lead {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  email: string;
  phone: string;
  year_group: YearGroup;
  source: LeadSource;
  message: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  referrer: string | null;
  user_agent: string | null;
  ip_hash: string | null;
  status: LeadStatus;
  notes: string | null;
  contacted_at: string | null;
  converted_student_id: string | null;
}

export interface Student {
  id: string;
  created_at: string;
  updated_at: string;
  email: string;
  full_name: string;
  phone: string | null;
  year_group: YearGroup;
  status: StudentStatus;
  lessons_remaining: number;
  package_started_at: string | null;
  package_expires_at: string | null;
  origin_lead_id: string | null;
  admin_notes: string | null;
}

export interface Resource {
  id: string;
  created_at: string;
  updated_at: string;
  topic: HscTopic;
  kind: ResourceKind;
  title: string;
  slug: string;
  description: string | null;
  storage_path: string;
  file_size_bytes: number | null;
  page_count: number | null;
  is_published: boolean;
  is_preview: boolean;
  sort_order: number;
}

type LeadInsert = Omit<Lead, "id" | "created_at" | "updated_at">;
type StudentInsert = Omit<Student, "created_at" | "updated_at">;
type ResourceInsert = Omit<Resource, "id" | "created_at" | "updated_at">;

export interface Database {
  public: {
    Tables: {
      leads: {
        Row: Lead;
        Insert: LeadInsert;
        Update: Partial<Lead>;
        Relationships: [];
      };
      students: {
        Row: Student;
        Insert: StudentInsert;
        Update: Partial<Student>;
        Relationships: [];
      };
      resources: {
        Row: Resource;
        Insert: ResourceInsert;
        Update: Partial<Resource>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
  };
}
