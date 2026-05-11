import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const TOPICS = [
  { key: "operations",  label: "Operations",       num: "01", accent: "#1B6038", tint: "#DFF5E6" },
  { key: "marketing",   label: "Marketing",         num: "02", accent: "#9A6300", tint: "#FFF0C4" },
  { key: "finance",     label: "Finance",           num: "03", accent: "#1E4B99", tint: "#E3EEFF" },
  { key: "human_resources", label: "Human Resources",   num: "04", accent: "#8B2929", tint: "#FFE3E3" },
] as const;

export function Topics() {
  return (
    <section
      id="syllabus"
      style={{
        background: "#ffffff",
        padding: "96px 0 104px",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 28px" }}>
        <Reveal>
          <h2
            style={{
              fontWeight: 700,
              fontSize: "clamp(28px, 3.4vw, 50px)",
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              margin: "0 0 48px",
              color: "#111111",
              maxWidth: 700,
            }}
          >
            The 4 topics in the Business Studies HSC Syllabus
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
          }}
          className="topics-grid"
        >
          {TOPICS.map((t, i) => (
            <Reveal key={t.key} delay={i * 80}>
              <div
                style={{
                  background: t.tint,
                  border: `1px solid ${t.accent}18`,
                  borderRadius: 8,
                  padding: "30px 28px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  boxShadow: "0 4px 18px rgba(0,0,0,0.045)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "0 0 auto",
                    height: 5,
                    background: t.accent,
                  }}
                />
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "clamp(54px, 4.8vw, 78px)",
                    lineHeight: 0.88,
                    letterSpacing: "-0.05em",
                    color: `${t.accent}24`,
                    marginBottom: 12,
                  }}
                >
                  {t.num}
                </div>

                <h3
                  style={{
                    fontWeight: 600,
                    fontSize: 22,
                    letterSpacing: "-0.02em",
                    color: t.accent,
                    margin: "0 0 24px",
                  }}
                >
                  {t.label}
                </h3>

                <Link
                  href="/practice"
                  prefetch={false}
                  style={{
                    display: "inline-block",
                    padding: "10px 18px",
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.72)",
                    color: t.accent,
                    textDecoration: "none",
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    alignSelf: "flex-start",
                    border: `1px solid ${t.accent}22`,
                  }}
                >
                  Practice questions →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div style={{ marginTop: 36, display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <span style={{ fontSize: 15, color: "#3A3A3A" }}>
              Try real exam questions from each topic.
            </span>
            <Link
              href="/practice"
              prefetch={false}
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#111111",
                textDecoration: "none",
                letterSpacing: "-0.01em",
                borderBottom: "1.5px solid #111111",
                paddingBottom: 1,
              }}
            >
              Practice now →
            </Link>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 560px) {
          .topics-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
