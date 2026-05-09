import { NextRequest, NextResponse } from "next/server";
import { supabaseConfigured, createServiceRoleClient } from "@/lib/supabase/server";
import { checkRateLimit } from "@/lib/ratelimit";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (await checkRateLimit("resource-gate:" + ip, 10, "60 s")) {
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
        message: "Your email isn't on the resource access list. Ask your tutor to add you after enrolment.",
      });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[resource-gate]", err);
    return NextResponse.json({ ok: false, message: "Could not check access. Try again." }, { status: 503 });
  }
}
