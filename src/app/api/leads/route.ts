import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";
import { leadSchema } from "@/lib/schemas";

function hashIp(ip: string): string {
  const salt = process.env.IP_HASH_DAILY_SALT ?? "dev-salt";
  return createHash("sha256").update(ip + salt).digest("hex").slice(0, 16);
}

function supabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
  return url.startsWith("https://") && key.length > 20 && !key.startsWith("your_");
}

async function tryInsertSupabase(data: {
  name: string; email: string; phone: string; year_group: string;
  source: string; message?: string; utm_source: string | null;
  utm_medium: string | null; utm_campaign: string | null;
  referrer: string | null; user_agent: string | null; ip_hash: string;
}): Promise<string | null> {
  try {
    const { createServiceRoleClient } = await import("@/lib/supabase/server");
    const supabase = createServiceRoleClient();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data: row, error } = await (supabase as any)
      .from("leads")
      .insert({ ...data, status: "new" })
      .select("id")
      .single();
    if (error) {
      console.error("[leads] Supabase insert error:", (error as { message: string }).message);
      return null;
    }
    return (row as { id: string }).id;
  } catch (err) {
    console.error("[leads] Supabase unavailable:", err);
    return null;
  }
}

async function sendEmail(data: {
  name: string; email: string; phone: string;
  year_group: string; message?: string;
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
    ].filter(Boolean).join("\n");

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
  name: string; email: string; phone: string; year_group: string;
  message?: string; submitted_at: string; id: string | null; source: string;
}): Promise<void> {
  const url = process.env.NOTIFY_WEBHOOK_URL;
  if (!url) return;
  const secret = process.env.NOTIFY_WEBHOOK_SECRET;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "new_lead",
        ...data,
        ...(secret ? { webhook_secret: secret } : {}),
      }),
    });
  } catch (err) {
    console.error("[leads] webhook failed:", err);
  }
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

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
    name, email: email.toLowerCase(), phone, year_group,
    source: source ?? "hero_form",
    message: message ?? undefined,
    utm_source: request.nextUrl.searchParams.get("utm_source"),
    utm_medium: request.nextUrl.searchParams.get("utm_medium"),
    utm_campaign: request.nextUrl.searchParams.get("utm_campaign"),
    referrer: request.headers.get("referer"),
    user_agent: request.headers.get("user-agent"),
    ip_hash: hashIp(ip),
  };

  // Always log so leads appear in Vercel function logs even without any service
  console.log("[lead]", JSON.stringify({ name, email: payload.email, phone, year_group, message }));

  // Insert to Supabase if configured
  let leadId: string | null = null;
  if (supabaseConfigured()) {
    leadId = await tryInsertSupabase(payload);
  }

  // Send email notification (the minimum viable integration)
  const emailSent = await sendEmail({ name, email: payload.email, phone, year_group, message });

  // Fire-and-forget webhook → Google Sheets (two-way sync needs the Supabase id)
  void notifyWebhook({ name, email: payload.email, phone, year_group, message, submitted_at: new Date().toISOString(), id: leadId, source: payload.source });

  // Succeed if email was sent OR Supabase stored it OR we're in dev
  const ok = emailSent || leadId !== null || process.env.NODE_ENV === "development";
  if (!ok) {
    return NextResponse.json(
      { error: "We couldn't save your details. Please email hello@acumenhsc.com.au" },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true, lead_id: leadId }, { status: 200 });
}
