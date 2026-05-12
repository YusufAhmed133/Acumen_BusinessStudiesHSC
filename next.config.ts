import type { NextConfig } from "next";

const IS_DEV = process.env.NODE_ENV !== "production";
const SCRIPT_SRC = [
  "script-src 'self' 'unsafe-inline'",
  IS_DEV ? "'unsafe-eval'" : "",
  "https://www.googletagmanager.com",
  "https://www.googleadservices.com",
  "https://googleads.g.doubleclick.net",
].filter(Boolean).join(" ");

const SECURITY_HEADERS = [
  { key: "X-Frame-Options",         value: "DENY" },
  { key: "X-Content-Type-Options",   value: "nosniff" },
  { key: "Referrer-Policy",          value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy",       value: "camera=(), microphone=(), geolocation=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      SCRIPT_SRC,
      "frame-src https://bid.g.doubleclick.net https://td.doubleclick.net",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://www.google.com https://www.google.com.au https://www.google-analytics.com https://googleads.g.doubleclick.net https://stats.g.doubleclick.net",
      "font-src 'self'",
      "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://www.google.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://stats.g.doubleclick.net https://www.googletagmanager.com",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      { source: "/(.*)", headers: SECURITY_HEADERS },
    ];
  },
};

export default nextConfig;
