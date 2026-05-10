import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { QUIZ_BANK } from "@/lib/quiz-bank";
import { PRACTICE_ACCESS_COOKIE, verifyPracticeAccessCookie } from "@/lib/practice-access";

export async function GET() {
  const cookieStore = await cookies();
  const accessCookie = cookieStore.get(PRACTICE_ACCESS_COOKIE)?.value;

  if (!verifyPracticeAccessCookie(accessCookie)) {
    return NextResponse.json(
      { ok: false, message: "Practice access has expired. Please enter your email again." },
      { status: 401 }
    );
  }

  return NextResponse.json({ ok: true, questions: QUIZ_BANK });
}
