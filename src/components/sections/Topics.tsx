"use client";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const TOPICS = [
  {
    key: "operations",
    label: "Operations",
    num: "01",
    tint: "#A8E8BE",
    accent: "#1B6038",
    ink: "#0D3020",
    detail: [
      "The Section III Operations essay appeared in 2022, 2023 and 2024. It is your highest-probability 20-mark topic.",
      "Performance objectives: examiners want at least two integrated objectives. A single-objective list will not reach Band 5.",
      "Lean vs traditional production: the distinction is the treatment of waste across all inputs, not just stock.",
      "Offshoring vs outsourcing is the most common Section II trap. Students who conflate the two lose marks on 4 to 8 mark questions.",
    ],
  },
  {
    key: "marketing",
    label: "Marketing",
    num: "02",
    tint: "#FADA88",
    accent: "#9A6300",
    ink: "#5C3B00",
    detail: [
      "Section II allocates 8 to 10 marks to marketing most years, often the highest single-topic block on the paper.",
      "Marketing mix: product, price, promotion, place. For services add people, process, and physical evidence.",
      "Price skimming vs penetration appeared as a Section I MCQ in 2023 and 2024. Know the definitions cold.",
      "Ethical marketing and e-marketing are near-guaranteed Section II targets, typically 4 to 6 marks.",
    ],
  },
  {
    key: "finance",
    label: "Finance",
    num: "03",
    tint: "#A8C8FC",
    accent: "#1E4B99",
    ink: "#0B2A5E",
    detail: [
      "Ratio analysis is tested across Sections I, II and III. It is the most reliably examined Finance skill.",
      "GPM, NPM, ROE, current ratio, gearing: know each formula and what a worsening trend signals.",
      "Working capital is straightforward to calculate. Band 6 answers explain when to act and which strategy fits.",
      "Global finance: know how exchange rates affect import and export costs, and what hedging achieves.",
    ],
  },
  {
    key: "hr",
    label: "Human Resources",
    num: "04",
    tint: "#F8BCBC",
    accent: "#8B2929",
    ink: "#501515",
    detail: [
      "Section III was an HR case study in 2024. It is the 20-mark question where most students leave marks on the table.",
      "Full employment cycle: acquisition, development, maintenance, separation. Know specific strategies at each stage.",
      "Employment relations: modern awards, enterprise agreements, individual contracts. Know them side by side.",
      "Effectiveness measures such as benchmarking and KPIs must appear in every extended HR response to reach Band 5 or 6.",
    ],
  },
] as const;

function Card({ t, i }: { t: typeof TOPICS[number]; i: number }) {
  const [open, setOpen] = useState(true);

  return (
    <Reveal delay={i * 80}>
      <div
        style={{
          background: t.tint,
          borderRadius: 20,
          overflow: "hidden",
          transform: open ? "translateY(-4px)" : "none",
          transition: "transform 400ms cubic-bezier(.2,.8,.2,1), box-shadow 400ms cubic-bezier(.2,.8,.2,1)",
          boxShadow: open
            ? "0 20px 48px rgba(0,0,0,0.12)"
            : "0 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        <button
          onClick={() => setOpen((v) => !v)}
          style={{
            width: "100%",
            textAlign: "left",
            cursor: "pointer",
            border: "none",
            background: "transparent",
            padding: "32px 28px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                background: t.accent,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: 18,
                lineHeight: 1,
                transition: "transform 360ms cubic-bezier(.2,.8,.2,1)",
                transform: open ? "rotate(45deg)" : "rotate(0deg)",
                flexShrink: 0,
              }}
            >
              +
            </span>
          </div>

          <div
            style={{
              fontWeight: 700,
              fontSize: "clamp(60px, 5vw, 84px)",
              lineHeight: 0.88,
              letterSpacing: "-0.05em",
              color: t.ink,
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
              color: t.ink,
              margin: "0 0 18px",
            }}
          >
            {t.label}
          </h3>

          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: t.accent,
              letterSpacing: "0.04em",
            }}
          >
            {open ? "Hide ↑" : "Exam breakdown →"}
          </div>
        </button>

        <div
          style={{
            overflow: "hidden",
            maxHeight: open ? 480 : 0,
            transition: "max-height 480ms cubic-bezier(.2,.8,.2,1)",
          }}
        >
          <div style={{ padding: "0 28px 28px" }}>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gap: 10,
              }}
            >
              {t.detail.map((p) => (
                <li
                  key={p}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: t.ink,
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      marginTop: 8,
                      borderRadius: 999,
                      background: t.accent,
                      flexShrink: 0,
                      display: "inline-block",
                    }}
                  />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href="/#practice"
              style={{
                display: "inline-block",
                marginTop: 20,
                padding: "10px 18px",
                borderRadius: 999,
                background: t.accent,
                color: "#ffffff",
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              Practice questions →
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

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
            <Card key={t.key} t={t} i={i} />
          ))}
        </div>

        <Reveal delay={300}>
          <div style={{ marginTop: 36, display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <span style={{ fontSize: 15, color: "#3A3A3A" }}>
              Try real exam questions from each topic.
            </span>
            <a
              href="/#practice"
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
            </a>
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
