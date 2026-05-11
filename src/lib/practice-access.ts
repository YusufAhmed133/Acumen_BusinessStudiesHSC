import { createHmac, timingSafeEqual } from "crypto";

export const PRACTICE_ACCESS_COOKIE = "acumen_practice_access";

const ACCESS_TTL_MS = 7 * 24 * 60 * 60 * 1000;

function getPracticeAccessSecret(): string | null {
  if (process.env.PRACTICE_ACCESS_SECRET) return process.env.PRACTICE_ACCESS_SECRET;
  // CROSS-REVIEW: Claude should verify this
  if (process.env.NODE_ENV === "production") return null;

  return process.env.IP_HASH_DAILY_SALT ?? process.env.SUPABASE_SERVICE_ROLE_KEY ?? "dev-practice-access-secret";
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

function verifyPracticeAccessParts(value: string | undefined): { subject: string } | null {
  const secret = getPracticeAccessSecret();
  if (!secret || !value) return null;

  const parts = value.split(".");
  if (parts.length !== 3) return null;

  const [subject, expiresAtRaw, signature] = parts;
  const expiresAt = Number(expiresAtRaw);
  if (!subject || !Number.isFinite(expiresAt) || expiresAt < Date.now()) return null;

  const payload = `${subject}.${expiresAtRaw}`;
  const expected = signPracticeAccessPayload(payload, secret);
  const actualBuffer = Buffer.from(signature, "base64url");
  const expectedBuffer = Buffer.from(expected, "base64url");

  if (actualBuffer.length !== expectedBuffer.length || !timingSafeEqual(actualBuffer, expectedBuffer)) {
    return null;
  }

  return { subject };
}

export function verifyPracticeAccessCookie(value: string | undefined): boolean {
  return verifyPracticeAccessParts(value) !== null;
}

export function getPracticeAccessEmail(value: string | undefined): string | null {
  const verified = verifyPracticeAccessParts(value);
  if (!verified) return null;

  try {
    return Buffer.from(verified.subject, "base64url").toString("utf8");
  } catch {
    return null;
  }
}
