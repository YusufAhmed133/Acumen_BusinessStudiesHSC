"use client";
import { useState } from "react";
import { MarkBug } from "@/components/ui/MarkBug";

const LINKS = [
  { href: "#syllabus",  label: "Syllabus" },
  { href: "#practice",  label: "Practice" },
  { href: "#resources", label: "Resources" },
  { href: "#pricing",   label: "Pricing" },
  { href: "#faq",       label: "FAQ" },
];

const pill: React.CSSProperties = {
  fontWeight: 600,
  fontSize: 14,
  letterSpacing: "-0.01em",
  padding: "10px 18px",
  borderRadius: 999,
  background: "#1F6B40",
  color: "#FFFCF4",
  textDecoration: "none",
  border: "1px solid #1F6B40",
  display: "inline-block",
  cursor: "pointer",
  whiteSpace: "nowrap",
};

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(255,252,244,0.88)",
      backdropFilter: "saturate(160%) blur(14px)",
      WebkitBackdropFilter: "saturate(160%) blur(14px)",
      borderBottom: "1px solid rgba(10,10,10,0.08)",
    }}>
      <div style={{
        maxWidth: 1320,
        margin: "0 auto",
        padding: "14px 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
      }}>
        {/* Wordmark */}
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <MarkBug size={28} />
          <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <span style={{
              fontWeight: 600,
              fontSize: 20,
              letterSpacing: "-0.04em",
              color: "#0A0A0A",
              lineHeight: 1,
            }}>
              acumen<span style={{ color: "#1F6B40" }}>.</span>
            </span>
            <span style={{
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#5C5C5C",
              lineHeight: 1,
            }}>
              HSC Business Studies
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: 28, alignItems: "center" }} className="hidden-mobile" aria-label="Main navigation">
          {LINKS.map(({ href, label }) => (
            <a key={href} href={href} style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#1A1A1A",
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}>
              {label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="#enquire" style={pill} className="hidden-mobile">
            Book a free trial lesson →
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "6px",
              color: "#0A0A0A",
            }}
            className="mobile-only"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
              {open ? (
                <>
                  <path d="M5 5L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <path d="M3 6h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 11h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          style={{
            borderTop: "1px solid rgba(10,10,10,0.08)",
            background: "#FFFCF4",
            padding: "16px 28px 20px",
          }}
          aria-label="Mobile navigation"
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 2 }}>
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)} style={{
                  display: "block",
                  padding: "11px 4px",
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#1A1A1A",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(10,10,10,0.06)",
                }}>
                  {label}
                </a>
              </li>
            ))}
            <li style={{ marginTop: 12 }}>
              <a href="#enquire" onClick={() => setOpen(false)} style={{ ...pill, display: "block", textAlign: "center" }}>
                Book a free trial lesson →
              </a>
            </li>
          </ul>
        </nav>
      )}

      <style>{`
        @media (min-width: 768px) { .mobile-only { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } .mobile-only { display: flex !important; } }
      `}</style>
    </header>
  );
}
