import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { QUIZ_BANK } from "@/lib/quiz-bank";
import { PRACTICE_ACCESS_COOKIE, getPracticeAccessEmail } from "@/lib/practice-access";
import { createServiceRoleClient, supabaseConfigured } from "@/lib/supabase/server";

export async function GET() {
  const cookieStore = await cookies();
  const accessCookie = cookieStore.get(PRACTICE_ACCESS_COOKIE)?.value;
  const email = getPracticeAccessEmail(accessCookie);

  if (!email) {
    return NextResponse.json(
      { ok: false, message: "Practice access has expired. Please enter your email again." },
      { status: 401 }
    );
  }

  // CROSS-REVIEW: Claude should verify this
  if (!supabaseConfigured()) {
    return NextResponse.json(
      { ok: false, message: "Practice access is not available right now." },
      { status: 503 }
    );
  }

  try {
    const { data, error } = await createServiceRoleClient()
      .from("whitelist")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (error) {
      console.error("[practice questions] whitelist query error:", error);
      return NextResponse.json(
        { ok: false, message: "Could not verify practice access." },
        { status: 503 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { ok: false, message: "Practice access is no longer active for this email." },
        { status: 403 }
      );
    }
  } catch (error) {
    console.error("[practice questions]", error);
    return NextResponse.json(
      { ok: false, message: "Could not verify practice access." },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true, questions: QUIZ_BANK });
}
