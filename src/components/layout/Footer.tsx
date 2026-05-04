import { MarkBug } from "@/components/ui/MarkBug";

export function Footer() {
  return (
    <footer style={{ background: "#0A0A0A", padding: "56px 0 32px", color: "#FFFCF4" }}>
      <div style={{
        maxWidth: 1320,
        margin: "0 auto",
        padding: "0 28px",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: 32,
        flexWrap: "wrap",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <MarkBug size={48} />
          <div>
            <span style={{
              fontWeight: 600,
              fontSize: 26,
              letterSpacing: "-0.04em",
              color: "#FFFCF4",
              lineHeight: 1,
              display: "block",
            }}>
              acumen<span style={{ color: "#1F6B40" }}>.</span>
            </span>
            <span style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#FBE6BD",
              marginTop: 6,
              display: "block",
            }}>
              HSC Business Studies · Sydney · NSW
            </span>
          </div>
        </div>

        <div style={{
          fontSize: 13,
          fontWeight: 500,
          color: "#CFEAD9",
          display: "flex",
          gap: 28,
          flexWrap: "wrap",
          alignItems: "center",
        }}>
          {[
            { href: "#syllabus", label: "Syllabus" },
            { href: "#practice", label: "Practice" },
            { href: "#pricing", label: "Pricing" },
            { href: "#enquire", label: "Enquire" },
          ].map(({ href, label }) => (
            <a key={href} href={href} style={{ color: "inherit", textDecoration: "none" }}>
              {label}
            </a>
          ))}
        </div>
      </div>

      <div style={{
        maxWidth: 1320,
        margin: "48px auto 0",
        padding: "24px 28px 0",
        borderTop: "1px solid rgba(255,252,244,0.08)",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.06em",
        color: "#7A7A7A",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
      }}>
        <span>© Acumen HSC · Independent of NESA · Sydney, NSW</span>
        <span style={{ display: "flex", gap: 20 }}>
          <a href="/privacy" style={{ color: "inherit", textDecoration: "none" }}>Privacy</a>
          <a href="/terms" style={{ color: "inherit", textDecoration: "none" }}>Terms</a>
          <a href="mailto:hello@acumenhsc.com.au" style={{ color: "inherit", textDecoration: "none" }}>hello@acumenhsc.com.au</a>
        </span>
      </div>
    </footer>
  );
}
