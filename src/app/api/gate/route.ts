import { NextRequest, NextResponse } from "next/server";

function supabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
  return url.startsWith("https://") && key.length > 20 && !key.startsWith("your_");
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = typeof (body as Record<string, unknown>).email === "string"
    ? ((body as Record<string, unknown>).email as string).toLowerCase().trim()
    : null;

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  // Explicit dev bypass — only when PRACTICE_DEV_OPEN=true in .env.local
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
    const { createServiceRoleClient } = await import("@/lib/supabase/server");
    const supabase = createServiceRoleClient();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data } = await (supabase as any)
      .from("whitelist")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (!data) {
      return NextResponse.json({ ok: false, message: "Your email isn't on the access list. Ask your tutor to add you." });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[gate]", err);
    return NextResponse.json({ ok: false, message: "Could not check access list." }, { status: 503 });
  }
}
