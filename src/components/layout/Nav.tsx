"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MarkBug } from "@/components/ui/MarkBug";
import { ScrollLink } from "@/components/ui/ScrollLink";

const LINKS: { href: string; label: string; sectionId?: string }[] = [
  { href: "/",          label: "Syllabus",  sectionId: "syllabus" },
  { href: "/practice",  label: "Practice" },
  { href: "/",          label: "Tutors",    sectionId: "tutors" },
  { href: "/",          label: "Pricing",   sectionId: "pricing" },
  { href: "/",          label: "Resources", sectionId: "resources" },
  { href: "/",          label: "FAQ",       sectionId: "faq" },
];

const pill: React.CSSProperties = {
  fontWeight: 600,
  fontSize: 14,
  letterSpacing: "-0.01em",
  padding: "10px 18px",
  borderRadius: 10,
  background: "#C9EFD3",
  color: "#0A2E1A",
  textDecoration: "none",
  border: "1px solid #C9EFD3",
  display: "inline-block",
  cursor: "pointer",
  whiteSpace: "nowrap",
};

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname !== "/") return;
    e.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    setOpen(false);
  };

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: scrolled ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.9)",
      backdropFilter: "saturate(160%) blur(16px)",
      WebkitBackdropFilter: "saturate(160%) blur(16px)",
      borderBottom: "1px solid rgba(0,0,0,0.07)",
      transition: "background 300ms ease, box-shadow 300ms ease",
      boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.06)" : "none",
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
        <Link href="/" onClick={handleLogoClick} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <MarkBug size={30} />
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: "-0.03em",
              color: "#111111",
              lineHeight: 1,
            }}>
              acumen
            </span>
            <span style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#747474",
              lineHeight: 1,
            }}>
              HSC Business Studies
            </span>
          </div>
        </Link>

        <nav style={{ display: "flex", gap: 28, alignItems: "center" }} className="hidden-mobile" aria-label="Main navigation">
          {LINKS.map(({ href, label, sectionId }) =>
            sectionId ? (
              <ScrollLink key={label} sectionId={sectionId} style={{
                fontSize: 14,
                fontWeight: 500,
                color: "#1A1A1A",
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}>
                {label}
              </ScrollLink>
            ) : (
              <Link key={href} href={href} style={{
                fontSize: 14,
                fontWeight: 500,
                color: "#1A1A1A",
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}>
                {label}
              </Link>
            )
          )}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <ScrollLink sectionId="enquire" style={pill} className="hidden-mobile">
            Book a free trial lesson →
          </ScrollLink>

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
            borderTop: "1px solid rgba(0,0,0,0.07)",
            background: "#ffffff",
            padding: "16px 28px 20px",
          }}
          aria-label="Mobile navigation"
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 2 }}>
            {LINKS.map(({ href, label, sectionId }) => (
              <li key={label}>
                {sectionId ? (
                  <ScrollLink sectionId={sectionId} onNavigate={() => setOpen(false)} style={{
                    display: "block",
                    padding: "11px 4px",
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#1A1A1A",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(10,10,10,0.06)",
                  }}>
                    {label}
                  </ScrollLink>
                ) : (
                  <Link href={href} onClick={() => setOpen(false)} style={{
                    display: "block",
                    padding: "11px 4px",
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#1A1A1A",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(10,10,10,0.06)",
                  }}>
                    {label}
                  </Link>
                )}
              </li>
            ))}
            <li style={{ marginTop: 12 }}>
              <ScrollLink sectionId="enquire" onNavigate={() => setOpen(false)} style={{ ...pill, display: "block", textAlign: "center" }}>
                Book a free trial lesson →
              </ScrollLink>
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
