import type { NextRequest } from "next/server";

function cleanIp(value: string | null): string | null {
  const ip = value?.trim();
  if (!ip || ip.length > 64 || /[\s\r\n]/.test(ip)) return null;
  return ip;
}

export function getClientIp(request: NextRequest): string {
  const direct =
    cleanIp(request.headers.get("x-real-ip")) ??
    cleanIp(request.headers.get("cf-connecting-ip")) ??
    cleanIp(request.headers.get("x-vercel-forwarded-for"));

  if (direct) return direct;

  const forwarded = request.headers.get("x-forwarded-for");
  if (!forwarded) return "unknown";

  const chain = forwarded.split(",").map((part) => cleanIp(part)).filter(Boolean);
  return chain.at(-1) ?? "unknown";
}
