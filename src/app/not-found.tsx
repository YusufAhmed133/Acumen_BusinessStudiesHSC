import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Acumen HSC",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div style={{ maxWidth: 560, margin: "0 auto", padding: "120px 28px 96px", textAlign: "center" }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9A9A9A", marginBottom: 20 }}>
        404
      </p>
      <h1 style={{ fontWeight: 700, fontSize: "clamp(28px, 4vw, 40px)", letterSpacing: "-0.03em", color: "#111", margin: "0 0 16px" }}>
        Page not found
      </h1>
      <p style={{ fontSize: 15, color: "#666", lineHeight: 1.7, margin: "0 0 40px" }}>
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        style={{ display: "inline-block", background: "#111", color: "#fff", padding: "12px 24px", borderRadius: 10, fontWeight: 600, fontSize: 14, textDecoration: "none" }}
      >
        Back to homepage
      </Link>
    </div>
  );
}
