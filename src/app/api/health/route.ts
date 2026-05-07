import { NextResponse } from "next/server";
import { createServiceRoleClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const { error } = await createServiceRoleClient().from("leads").select("id").limit(1);
    return NextResponse.json({ ok: true, db: error ? "degraded" : "up" });
  } catch {
    return NextResponse.json({ ok: false, db: "down" }, { status: 503 });
  }
}
