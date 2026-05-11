import Link from "next/link";
import { MarkBug } from "@/components/ui/MarkBug";

const LINKS: { href: string; label: string; sectionId?: string }[] = [
  { href: "/",          label: "Syllabus",  sectionId: "syllabus" },
  { href: "/practice",  label: "Practice" },
  { href: "/",          label: "Pricing",   sectionId: "pricing" },
  { href: "/",          label: "Reviews",   sectionId: "reviews" },
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
  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(255,255,255,0.94)",
      backdropFilter: "saturate(160%) blur(16px)",
      WebkitBackdropFilter: "saturate(160%) blur(16px)",
      borderBottom: "1px solid rgba(0,0,0,0.07)",
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
        <Link href="/" prefetch={false} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
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
          {LINKS.map(({ href, label, sectionId }) => {
            const targetHref = sectionId ? `${href}#${sectionId}` : href;
            return (
              <Link key={label} href={targetHref} prefetch={false} style={{
                fontSize: 14,
                fontWeight: 500,
                color: "#1A1A1A",
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}>
                {label}
              </Link>
            );
          })}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link href="/#enquire" prefetch={false} style={pill} className="hidden-mobile">
            Book a free trial lesson →
          </Link>

          <details className="mobile-only" style={{ position: "relative" }}>
            <summary
              aria-label="Open menu"
              style={{
                listStyle: "none",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "6px",
                color: "#0A0A0A",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                <path d="M3 6h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 11h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </summary>
            <nav
              style={{
                position: "absolute",
                right: 0,
                top: "calc(100% + 14px)",
                width: "min(320px, calc(100vw - 56px))",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: 12,
                background: "#ffffff",
                padding: "12px 16px 16px",
                boxShadow: "0 18px 44px rgba(0,0,0,0.14)",
              }}
              aria-label="Mobile navigation"
            >
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 2 }}>
                {LINKS.map(({ href, label, sectionId }) => {
                  const targetHref = sectionId ? `${href}#${sectionId}` : href;
                  return (
                    <li key={label}>
                      <Link href={targetHref} prefetch={false} style={{
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
                    </li>
                  );
                })}
                <li style={{ marginTop: 12 }}>
                  <Link href="/#enquire" prefetch={false} style={{ ...pill, display: "block", textAlign: "center" }}>
                    Book a free trial lesson →
                  </Link>
                </li>
              </ul>
            </nav>
          </details>
        </div>
      </div>

      <style>{`
        .mobile-only > summary::-webkit-details-marker { display: none; }
        .mobile-only > summary::marker { content: ""; }
        @media (min-width: 1024px) { .mobile-only { display: none !important; } }
        @media (max-width: 1023px) { .hidden-mobile { display: none !important; } .mobile-only { display: block !important; } }
      `}</style>
    </header>
  );
}
