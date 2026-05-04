import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";
import { leadSchema } from "@/lib/schemas";
import { createServiceRoleClient } from "@/lib/supabase/server";
import type { LeadSource } from "@/types/database";

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  // Skip in development if no secret key is set
  if (!process.env.TURNSTILE_SECRET_KEY) {
    console.warn("[leads] TURNSTILE_SECRET_KEY not set — skipping verification in dev");
    return true;
  }
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
          remoteip: ip,
        }),
      }
    );
    const data = (await res.json()) as { success: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

function hashIp(ip: string): string {
  const salt = process.env.IP_HASH_DAILY_SALT ?? "dev-salt";
  return createHash("sha256").update(ip + salt).digest("hex").slice(0, 16);
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { name, email, phone, year_group, source, message, website, turnstile_token } =
    parsed.data;

  // Honeypot check
  if (website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  // Turnstile verification (only if token provided)
  if (turnstile_token) {
    const turnstileOk = await verifyTurnstile(turnstile_token, ip);
    if (!turnstileOk) {
      return NextResponse.json({ error: "Security check failed" }, { status: 403 });
    }
  }

  // Rate limit — simple time-based check via Supabase (skip if Upstash not configured)
  // TODO: add Upstash sliding window when UPSTASH_REDIS_REST_URL is set

  const supabase = createServiceRoleClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: lead, error } = await (supabase as any)
    .from("leads")
    .insert({
      name,
      email: email.toLowerCase(),
      phone,
      year_group,
      source: (source ?? "hero_form") as LeadSource,
      message: message ?? null,
      utm_source: request.nextUrl.searchParams.get("utm_source"),
      utm_medium: request.nextUrl.searchParams.get("utm_medium"),
      utm_campaign: request.nextUrl.searchParams.get("utm_campaign"),
      referrer: request.headers.get("referer"),
      user_agent: request.headers.get("user-agent"),
      ip_hash: hashIp(ip),
      status: "new",
    })
    .select("id")
    .single();

  if (error) {
    console.error("[leads] Supabase insert error:", (error as { message: string }).message);
    return NextResponse.json(
      { error: "We couldn't save your details. Try again or email hello@acumenhsc.com.au" },
      { status: 503 }
    );
  }

  // Fire-and-forget: admin notification email
  notifyAdmin({ name, email, phone, year_group }).catch(() => {});

  const leadId = (lead as { id: string }).id;
  return NextResponse.json({ ok: true, lead_id: leadId }, { status: 200 });
}

async function notifyAdmin(data: {
  name: string;
  email: string;
  phone: string;
  year_group: string;
}) {
  if (!process.env.RESEND_API_KEY || !process.env.FOUNDER_EMAIL) return;

  const { Resend } = await import("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "hello@acumenhsc.com.au",
    to: process.env.FOUNDER_EMAIL,
    subject: `New lead: ${data.name} (${data.year_group})`,
    text: `New enquiry from ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nYear: ${data.year_group}`,
  });
}
