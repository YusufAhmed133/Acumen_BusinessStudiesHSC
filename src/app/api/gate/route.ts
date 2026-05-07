import { NextRequest, NextResponse } from "next/server";
import { supabaseConfigured, createServiceRoleClient } from "@/lib/supabase/server";
import { checkRateLimit } from "@/lib/ratelimit";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (await checkRateLimit("gate:" + ip, 20, "60 s")) {
    return NextResponse.json({ ok: false, message: "Too many requests" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email =
    typeof (body as Record<string, unknown>).email === "string"
      ? ((body as Record<string, unknown>).email as string).toLowerCase().trim()
      : null;

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  if (process.env.PRACTICE_DEV_OPEN === "true") {
    console.warn("[gate] PRACTICE_DEV_OPEN=true — whitelist bypassed");
    return NextResponse.json({ ok: true });
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
        message: "Your email isn't on the access list. Ask your tutor to add you.",
      });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[gate]", err);
    return NextResponse.json({ ok: false, message: "Could not check access list." }, { status: 503 });
  }
}
