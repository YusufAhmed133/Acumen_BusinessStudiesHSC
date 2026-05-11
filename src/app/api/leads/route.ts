import { after, NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";
import { leadSchema } from "@/lib/schemas";
import { supabaseConfigured, createServiceRoleClient } from "@/lib/supabase/server";
import { checkRateLimit } from "@/lib/ratelimit";
import { getClientIp } from "@/lib/request-ip";
import type { YearGroup, LeadSource } from "@/types/database";

function hashIp(ip: string): string | null {
  const salt = process.env.IP_HASH_DAILY_SALT;
  if (!salt && process.env.NODE_ENV === "production") {
    console.error("[leads] IP_HASH_DAILY_SALT not set");
    return null;
  }
  return createHash("sha256").update(ip + (salt ?? "dev-salt")).digest("hex").slice(0, 16);
}

function escapeSheetFormula(value: string): string {
  return /^[=+\-@]/.test(value.trimStart()) ? `'${value}` : value;
}

function escapeOptionalSheetFormula(value: string | undefined): string | undefined {
  return value ? escapeSheetFormula(value) : value;
}

async function tryInsertSupabase(data: {
  name: string;
  email: string;
  phone: string;
  year_group: YearGroup;
  source: LeadSource;
  message?: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  referrer: string | null;
  user_agent: string | null;
  ip_hash: string | null;
}): Promise<string | null> {
  try {
    const { data: row, error } = await createServiceRoleClient()
      .from("leads")
      .insert({ ...data, status: "new" })
      .select("id")
      .single();
    if (error) {
      console.error("[leads] Supabase insert error:", error.message);
      return null;
    }
    return row.id;
  } catch (err) {
    console.error("[leads] Supabase unavailable:", err);
    return null;
  }
}

async function sendEmail(data: {
  name: string;
  email: string;
  phone: string;
  year_group: string;
  message?: string;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.FOUNDER_EMAIL;
  if (!apiKey || !to) return false;

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM_EMAIL ?? "hello@acumenhsc.com.au";

    const text = [
      `Name:    ${data.name}`,
      `Email:   ${data.email}`,
      `Phone:   ${data.phone}`,
      `Year:    ${data.year_group}`,
      data.message ? `Details: ${data.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const { error } = await resend.emails.send({
      from,
      to,
      subject: `New enquiry: ${data.name} (${data.year_group})`,
      text,
    });

    if (error) {
      console.error("[leads] Resend error:", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[leads] Resend unavailable:", err);
    return false;
  }
}

async function notifyWebhook(data: {
  name: string;
  email: string;
  phone: string;
  year_group: string;
  message?: string;
  submitted_at: string;
  id: string | null;
  source: string;
}): Promise<void> {
  const url = process.env.NOTIFY_WEBHOOK_URL;
  if (!url) return;
  const payload: Record<string, unknown> = { type: "new_lead", ...data };
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(2500),
    });
  } catch (err) {
    console.error("[leads] webhook failed:", err);
  }
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (await checkRateLimit("leads:" + ip, 5, "60 s")) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

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

  const { name, email, phone, year_group, source, message, website } = parsed.data;

  if (website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const payload = {
    name,
    email: email.toLowerCase(),
    phone,
    year_group,
    source,
    message: message ?? null,
    utm_source: request.nextUrl.searchParams.get("utm_source"),
    utm_medium: request.nextUrl.searchParams.get("utm_medium"),
    utm_campaign: request.nextUrl.searchParams.get("utm_campaign"),
    referrer: request.headers.get("referer"),
    user_agent: request.headers.get("user-agent"),
    ip_hash: hashIp(ip),
  };

  const [leadId, emailSent] = await Promise.all([
    supabaseConfigured() ? tryInsertSupabase(payload) : Promise.resolve(null),
    sendEmail({ name, email: payload.email, phone, year_group, message }),
  ]);

  after(() => notifyWebhook({
    name: escapeSheetFormula(name),
    email: escapeSheetFormula(payload.email),
    phone: escapeSheetFormula(phone),
    year_group,
    message: escapeOptionalSheetFormula(message),
    submitted_at: new Date().toISOString(),
    id: leadId,
    source: payload.source,
  }));

  const ok = emailSent && leadId !== null;
  if (!ok) {
    return NextResponse.json(
      { error: "We couldn't save your details or send the email. Please email hello@acumenhsc.com.au" },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
