import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export async function checkRateLimit(
  identifier: string,
  requests: number,
  window: `${number} s`,
): Promise<boolean> {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return false;
  }
  const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(requests, window),
    analytics: false,
  });
  const { success } = await ratelimit.limit(identifier);
  return !success;
}
