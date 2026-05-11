import { NextRequest, NextResponse } from "next/server";
import { supabaseConfigured, createServiceRoleClient } from "@/lib/supabase/server";
import { checkRateLimit } from "@/lib/ratelimit";
import { accessEmailSchema } from "@/lib/schemas";
import { getClientIp } from "@/lib/request-ip";

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (await checkRateLimit("resource-gate:" + ip, 10, "60 s")) {
    return NextResponse.json({ ok: false, message: "Too many requests" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = accessEmailSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const { email } = parsed.data;

  // CROSS-REVIEW: Claude should verify this
  if (await checkRateLimit("resource-gate-email:" + email, 5, "600 s")) {
    return NextResponse.json({ ok: false, message: "Too many attempts. Try again later." }, { status: 429 });
  }

  if (!supabaseConfigured()) {
    return NextResponse.json(
      { ok: false, message: "Resources not available right now. Contact your tutor." },
      { status: 503 }
    );
  }

  try {
    const { data } = await createServiceRoleClient()
      .from("resource_whitelist")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (!data) {
      return NextResponse.json({
        ok: false,
        message: "Resource downloads are for enrolled students. Use the email your tutor added after enrolment.",
      });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[resource-gate]", err);
    return NextResponse.json({ ok: false, message: "Could not check access. Try again." }, { status: 503 });
  }
}
