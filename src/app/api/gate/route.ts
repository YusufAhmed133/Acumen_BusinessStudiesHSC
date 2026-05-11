import { NextRequest, NextResponse } from "next/server";
import { supabaseConfigured, createServiceRoleClient } from "@/lib/supabase/server";
import { checkRateLimit } from "@/lib/ratelimit";
import { accessEmailSchema } from "@/lib/schemas";
import { createPracticeAccessCookie, PRACTICE_ACCESS_COOKIE } from "@/lib/practice-access";
import { getClientIp } from "@/lib/request-ip";

function practiceAccessResponse(email: string): NextResponse {
  const cookie = createPracticeAccessCookie(email);
  if (!cookie) {
    return NextResponse.json(
      { ok: false, message: "Practice access is not configured. Contact your tutor." },
      { status: 503 }
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(PRACTICE_ACCESS_COOKIE, cookie.value, {
    expires: cookie.expires,
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return response;
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (await checkRateLimit("gate:" + ip, 20, "60 s")) {
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
  if (await checkRateLimit("gate-email:" + email, 5, "600 s")) {
    return NextResponse.json({ ok: false, message: "Too many attempts. Try again later." }, { status: 429 });
  }

  if (process.env.PRACTICE_DEV_OPEN === "true" && process.env.NODE_ENV !== "production") {
    console.warn("[gate] PRACTICE_DEV_OPEN=true, whitelist bypassed");
    return practiceAccessResponse(email);
  }

  if (!supabaseConfigured()) {
    return NextResponse.json(
      { ok: false, message: "Access not available right now. Contact your tutor." },
      { status: 503 }
    );
  }

  try {
    const { data } = await createServiceRoleClient()
      .from("whitelist")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (!data) {
      return NextResponse.json({
        ok: false,
        message: "Access is locked for now. Use the email your tutor added, or book a free trial so we can unlock it for you.",
      });
    }
    return practiceAccessResponse(email);
  } catch (err) {
    console.error("[gate]", err);
    return NextResponse.json({ ok: false, message: "Could not check access list." }, { status: 503 });
  }
}
