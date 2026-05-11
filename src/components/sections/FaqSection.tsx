import { Reveal } from "@/components/ui/Reveal";
import { FAQS } from "@/lib/faqs";

const FAQ_TINTS = ["#A8E8BE", "#FADA88", "#A8C8FC", "#F8BCBC", "#A8E8BE", "#FADA88", "#A8C8FC"];

function getFaqTint(index: number): string {
  return FAQ_TINTS[index % FAQ_TINTS.length] ?? "#A8E8BE";
}

export function FaqSection() {
  return (
    <section
      id="faq"
      style={{
        background:
          "linear-gradient(160deg, rgba(168,232,190,0.10) 0%, rgba(168,200,252,0.08) 40%, rgba(248,188,188,0.07) 100%)",
        padding: "96px 0 104px",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 28px" }}>
        <Reveal>
          <h2
            style={{
              fontWeight: 700,
              fontSize: "clamp(32px, 3.8vw, 56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              margin: "0 0 40px",
              color: "#111111",
            }}
          >
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
          {FAQS.map((f, i) => (
            <Reveal key={i} delay={i * 60}>
              <details
                className="faq-item"
                style={{
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: `inset 3px 0 0 ${getFaqTint(i)}`,
                }}
              >
                <summary
                  style={{
                    cursor: "pointer",
                    padding: "22px 0 22px 16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#111111",
                    gap: 16,
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: 18, letterSpacing: "-0.02em" }}>
                    {f.q}
                  </span>
                  <span
                    className="faq-plus"
                    style={{
                      fontSize: 22,
                      fontWeight: 300,
                      color: "#6B6B6B",
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </summary>
                <div
                  style={{
                    padding: "0 0 22px 16px",
                    fontSize: 15.5,
                    lineHeight: 1.65,
                    color: "#111111",
                    maxWidth: 680,
                  }}
                >
                  {f.a}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .faq-item > summary::-webkit-details-marker { display: none; }
        .faq-item > summary::marker { content: ""; }
        .faq-item .faq-plus {
          transition: transform 240ms ease, color 240ms ease;
        }
        .faq-item[open] .faq-plus {
          color: #1F6B40 !important;
          transform: rotate(45deg);
        }
      `}</style>
    </section>
  );
}
