"use client";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { FAQS } from "@/lib/faqs";

const FAQ_TINTS = ["#A8E8BE", "#FADA88", "#A8C8FC", "#F8BCBC", "#A8E8BE", "#FADA88", "#A8C8FC"];

export function FaqSection() {
  const [open, setOpen] = useState<number>(-1);

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
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 60}>
                <div
                  style={{
                    borderBottom: "1px solid rgba(0,0,0,0.08)",
                    boxShadow: isOpen
                      ? `inset 3px 0 0 ${FAQ_TINTS[i]}`
                      : "inset 3px 0 0 transparent",
                    transition: "box-shadow 300ms ease",
                  }}
                >
                  <button
                    id={`faq-btn-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      cursor: "pointer",
                      background: "transparent",
                      border: "none",
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
                      style={{
                        fontSize: 22,
                        fontWeight: 300,
                        color: isOpen ? FAQ_TINTS[i] : "#6B6B6B",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transition:
                          "transform 360ms cubic-bezier(.2,.7,.2,1), color 300ms ease",
                        flexShrink: 0,
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    style={{
                      maxHeight: isOpen ? 300 : 0,
                      overflow: "hidden",
                      transition: "max-height 460ms cubic-bezier(.2,.7,.2,1)",
                    }}
                  >
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
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
