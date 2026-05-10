import { createHmac, timingSafeEqual } from "crypto";

export const PRACTICE_ACCESS_COOKIE = "acumen_practice_access";

const ACCESS_TTL_MS = 7 * 24 * 60 * 60 * 1000;

function getPracticeAccessSecret(): string | null {
  return (
    process.env.PRACTICE_ACCESS_SECRET ??
    process.env.IP_HASH_DAILY_SALT ??
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    (process.env.NODE_ENV === "production" ? null : "dev-practice-access-secret")
  );
}

function signPracticeAccessPayload(payload: string, secret: string): string {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

export function createPracticeAccessCookie(email: string): { value: string; expires: Date } | null {
  const secret = getPracticeAccessSecret();
  if (!secret) return null;

  const expiresAt = Date.now() + ACCESS_TTL_MS;
  const subject = Buffer.from(email.trim().toLowerCase()).toString("base64url");
  const payload = `${subject}.${expiresAt}`;
  const signature = signPracticeAccessPayload(payload, secret);

  return {
    value: `${payload}.${signature}`,
    expires: new Date(expiresAt),
  };
}

export function verifyPracticeAccessCookie(value: string | undefined): boolean {
  const secret = getPracticeAccessSecret();
  if (!secret || !value) return false;

  const parts = value.split(".");
  if (parts.length !== 3) return false;

  const [subject, expiresAtRaw, signature] = parts;
  const expiresAt = Number(expiresAtRaw);
  if (!subject || !Number.isFinite(expiresAt) || expiresAt < Date.now()) return false;

  const payload = `${subject}.${expiresAtRaw}`;
  const expected = signPracticeAccessPayload(payload, secret);
  const actualBuffer = Buffer.from(signature, "base64url");
  const expectedBuffer = Buffer.from(expected, "base64url");

  return actualBuffer.length === expectedBuffer.length && timingSafeEqual(actualBuffer, expectedBuffer);
}
