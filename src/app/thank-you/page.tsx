import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enquiry received | Acumen HSC",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 28px",
        background: "#ffffff",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 999,
          background: "#C9EFD3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
          <path
            d="M5 11l4.5 4.5 7.5-8"
            stroke="#1B6038"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h1
        style={{
          fontWeight: 700,
          fontSize: "clamp(28px, 5vw, 44px)",
          lineHeight: 1.05,
          letterSpacing: "-0.04em",
          color: "#111111",
          margin: "0 0 16px",
        }}
      >
        Enquiry received.
      </h1>
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.6,
          color: "#3A3A3A",
          maxWidth: 420,
          margin: "0 0 36px",
        }}
      >
        A senior tutor will reply within one business day with available trial
        slots. Keep an eye on your inbox.
      </p>

      <Link
        href="/"
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: "#0A2E1A",
          background: "#C9EFD3",
          padding: "11px 24px",
          borderRadius: 999,
          textDecoration: "none",
          letterSpacing: "-0.01em",
        }}
      >
        Back to home
      </Link>
    </main>
  );
}
