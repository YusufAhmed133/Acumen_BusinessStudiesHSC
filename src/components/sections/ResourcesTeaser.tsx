import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const PACKS = [
  {
    topic: "Operations",
    title: "Comprehensive HSC Operations Preparation Pack 2026",
    coverBg: "#DFF5E6",
    coverAccent: "#1B6038",
    coverShade: "#C9EFD3",
    pageEdge: "#F7FBF6",
    pageLines: ["#A8DDB9", "#8DCEA4", "#B9E6C7", "#A8DDB9", "#8DCEA4"],
  },
  {
    topic: "Marketing",
    title: "Comprehensive HSC Marketing Preparation Pack 2026",
    coverBg: "#FFF0C4",
    coverAccent: "#9A6300",
    coverShade: "#FDE9B0",
    pageEdge: "#FFFBEF",
    pageLines: ["#E8CF8A", "#D8BA65", "#F0DA9E", "#E8CF8A", "#D8BA65"],
  },
  {
    topic: "Finance",
    title: "Comprehensive HSC Finance Preparation Pack 2026",
    coverBg: "#E3EEFF",
    coverAccent: "#1E4B99",
    coverShade: "#CFDFF4",
    pageEdge: "#F5F9FF",
    pageLines: ["#AFC9EF", "#95B5E4", "#C0D6F4", "#AFC9EF", "#95B5E4"],
  },
  {
    topic: "Human Resources",
    title: "Comprehensive HSC Human Resources Preparation Pack 2026",
    coverBg: "#FFE3E3",
    coverAccent: "#8B2929",
    coverShade: "#FADADA",
    pageEdge: "#FFF6F6",
    pageLines: ["#E9B4B4", "#D99D9D", "#F0C4C4", "#E9B4B4", "#D99D9D"],
  },
];

type Pack = (typeof PACKS)[number];

function PackCover({ pack }: { pack: Pack }) {
  return (
    <div
      style={{
        aspectRatio: "3 / 4",
        background: "#F5F3ED",
        position: "relative",
        overflow: "hidden",
        borderRadius: "6px 6px 0 0",
        padding: "11px 14px 18px 9px",
        boxSizing: "border-box",
      }}
      aria-hidden
    >
      <div
        style={{
          position: "absolute",
          left: 18,
          right: 4,
          bottom: 7,
          height: 18,
          background: pack.pageEdge,
          border: "1px solid rgba(0,0,0,0.07)",
          borderTop: "none",
          boxShadow: "inset 0 3px 0 rgba(0,0,0,0.035), inset 0 7px 0 rgba(0,0,0,0.025), inset 0 11px 0 rgba(0,0,0,0.018)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 16,
          right: 5,
          bottom: 16,
          width: 13,
          background: pack.pageEdge,
          border: "1px solid rgba(0,0,0,0.07)",
          borderLeft: "none",
          boxShadow: "inset 4px 0 0 rgba(0,0,0,0.035), inset 8px 0 0 rgba(0,0,0,0.025)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: "10px 14px 18px 8px",
          background: `linear-gradient(145deg, ${pack.coverBg} 0%, #FFFCF4 135%)`,
          borderRadius: 7,
          border: `1px solid ${pack.coverAccent}18`,
          boxShadow: `0 16px 26px ${pack.coverAccent}12, inset -18px -24px 42px rgba(255,255,255,0.45)`,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: 10,
            background: pack.coverShade,
            borderRight: `1px solid ${pack.coverAccent}18`,
          }}
        />
        <div style={{ padding: "20px 20px 0 24px", position: "relative" }}>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: `${pack.coverAccent}88`, marginBottom: 10 }}>
            acumen hsc
          </div>
          <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: "-0.03em", color: pack.coverAccent, lineHeight: 1.08, marginBottom: 6 }}>
            {pack.topic}
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, color: `${pack.coverAccent}88`, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            2026 Prep Pack
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 28,
            right: 22,
            bottom: 28,
            height: 52,
            borderTop: `1px solid ${pack.coverAccent}18`,
          }}
        >
          {pack.pageLines.map((c, i) => (
            <div
              key={i}
              style={{
                height: 3,
                borderRadius: 2,
                background: c,
                opacity: 0.58,
                marginTop: i === 0 ? 12 : 7,
                width: i % 2 === 0 ? "100%" : "78%",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const LockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
    <rect x="3" y="7" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export function ResourcesTeaser() {
  return (
    <section
      id="resources"
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
            HSC Business Studies Study Notes &amp; Past Papers
          </h2>
        </Reveal>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}
          className="packs-grid"
        >
          {PACKS.map((pack, i) => (
            <Reveal key={pack.topic} delay={i * 70}>
              <div
                style={{
                  background: "#F9F9F7",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                <PackCover pack={pack} />
                <div style={{ padding: "16px 16px 18px" }}>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: "#111111", lineHeight: 1.35, letterSpacing: "-0.01em", marginBottom: 14 }}>
                    {pack.title}
                  </div>
                  <button
                    disabled
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      width: "100%",
                      padding: "9px 14px",
                      borderRadius: 6,
                      background: "#F0F0EE",
                      color: "#9A9A9A",
                      border: "1px solid rgba(0,0,0,0.1)",
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: "not-allowed",
                      letterSpacing: "-0.01em",
                      justifyContent: "center",
                    }}
                  >
                      <LockIcon />
                    Enrolled students only
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={340}>
          <div style={{ marginTop: 32 }}>
            <Link
              href="/#enquire"
              prefetch={false}
              style={{
                display: "inline-block",
                padding: "13px 24px",
                borderRadius: 8,
                background: "#C9EFD3",
                color: "#0A2E1A",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              Book a trial to discuss resources →
            </Link>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .packs-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .packs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
