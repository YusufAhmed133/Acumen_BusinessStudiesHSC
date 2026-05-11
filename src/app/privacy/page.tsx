import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Acumen HSC collects, uses, and protects your personal information in accordance with Australian privacy law.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy | Acumen HSC",
    description: "How Acumen HSC collects, uses, and protects your personal information in accordance with Australian privacy law.",
    url: "https://acumenhsc.com.au/privacy",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Acumen HSC",
    description: "How Acumen HSC collects, uses, and protects your personal information in accordance with Australian privacy law.",
  },
};

const S = {
  page:    { maxWidth: 720, margin: "0 auto", padding: "72px 28px 96px" } as React.CSSProperties,
  h1:      { fontWeight: 700, fontSize: "clamp(28px,4vw,40px)", letterSpacing: "-0.03em", color: "#111", margin: "0 0 8px" } as React.CSSProperties,
  date:    { fontSize: 12, color: "#9a9a9a", fontWeight: 500, letterSpacing: "0.04em", marginBottom: 48, display: "block" } as React.CSSProperties,
  h2:      { fontWeight: 700, fontSize: 16, color: "#111", margin: "40px 0 10px", letterSpacing: "-0.01em" } as React.CSSProperties,
  p:       { fontSize: 14.5, lineHeight: 1.75, color: "#444", margin: "0 0 12px" } as React.CSSProperties,
  divider: { border: "none", borderTop: "1px solid #f0f0f0", margin: "40px 0 0" } as React.CSSProperties,
};

export default function PrivacyPage() {
  return (
    <div style={S.page}>
      <h1 style={S.h1}>Privacy Policy</h1>
      <span style={S.date}>Last updated: May 2026</span>

      <p style={S.p}>
        Acumen HSC (&ldquo;Acumen&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting your personal information
        in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
        This policy explains what we collect, why we collect it, and how it is handled.
      </p>

      <h2 style={S.h2}>1. What We Collect</h2>
      <p style={S.p}>
        When you submit an enquiry form on this website, we collect your name, email address, phone number, year group,
        and any message you choose to include. We may also collect standard technical information necessary to operate
        and secure this website.
      </p>

      <h2 style={S.h2}>2. Why We Collect It</h2>
      <p style={S.p}>
        We use your information solely to respond to your enquiry, provide and administer tutoring services, send invoices
        and relevant service communications, and comply with our legal obligations. We do not use your data for any purpose
        unrelated to Acumen HSC.
      </p>

      <h2 style={S.h2}>3. Who We Share It With</h2>
      <p style={S.p}>
        We do not sell, rent, or trade your personal information to third parties. We use reputable third-party service
        providers to operate this website, including hosting, database storage, and email delivery. These providers
        process data only as necessary to deliver their services and are bound by appropriate data processing obligations.
      </p>

      <h2 style={S.h2}>4. Data Retention</h2>
      <p style={S.p}>
        Enquiry records are retained for as long as the business relationship is active and for a reasonable period afterwards
        for administrative and legal purposes. You may request deletion of your data at any time.
      </p>

      <h2 style={S.h2}>5. Your Rights</h2>
      <p style={S.p}>
        Under the Australian Privacy Principles, you have the right to access the personal information we hold about you,
        request corrections to inaccurate information, and request that we delete your information. To exercise any of these
        rights, contact us using the details below and we will respond within a reasonable timeframe.
      </p>

      <h2 style={S.h2}>6. Security</h2>
      <p style={S.p}>
        We take reasonable steps to protect your personal information from misuse, interference, loss, and unauthorised
        access. All data is transmitted over HTTPS and access to our systems is restricted to authorised personnel only.
      </p>

      <h2 style={S.h2}>7. Cookies</h2>
      <p style={S.p}>
        This website may use Google Ads conversion measurement to understand
        enquiry attribution. This tool may set cookies or use similar browser signals. We do not
        sell personal information or use these tools to collect tutoring form messages.
      </p>

      <hr style={S.divider} />
      <p style={{ ...S.p, marginTop: 32, color: "#9a9a9a", fontSize: 13 }}>
        Privacy enquiries: call{" "}
        <a href="tel:0470665141" style={{ color: "#9a9a9a" }}>0470 665 141</a>.
      </p>
    </div>
  );
}
