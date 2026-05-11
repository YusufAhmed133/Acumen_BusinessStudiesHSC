import Link from "next/link";
import { MarkBug } from "@/components/ui/MarkBug";
import { SECTION_ROUTE_MAP } from "@/lib/section-routes";

export function Footer() {
  return (
    <footer style={{ background: "#0A0A0A", padding: "56px 0 32px", color: "#FFFCF4" }}>
      <div style={{
        maxWidth: 1320,
        margin: "0 auto",
        padding: "0 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 32,
        flexWrap: "wrap",
      }}>
        <Link href="/" prefetch={false} style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}>
          <MarkBug size={44} />
          <div>
            <span style={{
              fontWeight: 700,
              fontSize: 24,
              letterSpacing: "-0.04em",
              color: "#ffffff",
              lineHeight: 1,
              display: "block",
            }}>
              acumen
            </span>
            <span style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#888888",
              marginTop: 6,
              display: "block",
            }}>
              HSC Business Studies, Sydney NSW
            </span>
          </div>
        </Link>

        <div style={{
          fontSize: 13,
          fontWeight: 500,
          color: "#9A9A9A",
          display: "flex",
          gap: 28,
          flexWrap: "wrap",
          alignItems: "center",
        }}>
          {[
            SECTION_ROUTE_MAP.syllabus,
            { href: "/practice", label: "Practice" },
            SECTION_ROUTE_MAP.pricing,
            SECTION_ROUTE_MAP.reviews,
            SECTION_ROUTE_MAP.resources,
            SECTION_ROUTE_MAP.faq,
          ].map(({ href, label }) => (
            <Link key={href + label} href={href} prefetch={false} style={{ color: "inherit", textDecoration: "none" }}>
              {label}
            </Link>
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
        <span>© Acumen HSC, Sydney NSW</span>
        <span style={{ display: "flex", gap: 20 }}>
          <Link href="/privacy" prefetch={false} style={{ color: "inherit", textDecoration: "none" }}>Privacy</Link>
          <Link href="/terms" prefetch={false} style={{ color: "inherit", textDecoration: "none" }}>Terms</Link>
          <a href="tel:0470665141" style={{ color: "inherit", textDecoration: "none" }}>0470 665 141</a>
        </span>
      </div>
    </footer>
  );
}
