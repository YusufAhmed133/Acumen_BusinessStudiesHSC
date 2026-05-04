"use client";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const FAQS = [
  { q: "How big are the groups?", a: "Capped at 6. Most groups run 3–5 students." },
  { q: "How are lessons delivered?", a: "Live, real-time sessions. Same lesson plan, same tutor, same price whether you join from a study room or from home." },
  { q: "What happens if my child misses a lesson?", a: "They receive the full session recording, all notes, and worked solutions within 24 hours. No charge for the missed lesson." },
  { q: "Who are the tutors?", a: "Recent Band 6 Business Studies graduates from selective and top comprehensive schools, plus university students with distinction averages in the discipline." },
  { q: "Is the trial lesson really free?", a: "Yes. One full 1.5-hour session. No card on file." },
  { q: "How does invoicing work?", a: "A tax invoice is issued at the start of each school term. Payment by direct deposit or credit card." },
  { q: "When does the 2026 HSC Business Studies exam run?", a: "The HSC Business Studies exam is scheduled for Thursday 29 October 2026." },
];

export function FaqSection() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" style={{ background: "#F4CFCF", padding: "100px 0 110px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 28px" }}>
        <Reveal>
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#923333", marginBottom: 18 }}>
              FAQ
            </div>
            <h2 style={{
              fontWeight: 600, fontSize: "clamp(34px, 4.2vw, 62px)",
              lineHeight: 1.02, letterSpacing: "-0.04em",
              margin: 0, color: "#0A0A0A",
            }}>
              What parents ask.
            </h2>
          </div>
        </Reveal>

        <div style={{ marginTop: 40, borderTop: "1px solid rgba(10,10,10,0.12)" }}>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 60}>
                <div style={{ borderBottom: "1px solid rgba(10,10,10,0.12)" }}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      cursor: "pointer",
                      background: "transparent",
                      border: "none",
                      padding: "22px 4px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      color: "#0A0A0A",
                    }}
                  >
                    <span style={{ fontWeight: 600, fontSize: 19, letterSpacing: "-0.02em" }}>
                      {f.q}
                    </span>
                    <span style={{
                      fontSize: 22, fontWeight: 300,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 360ms cubic-bezier(.2,.7,.2,1)",
                      flexShrink: 0,
                      marginLeft: 16,
                    }}>
                      +
                    </span>
                  </button>
                  <div style={{
                    maxHeight: isOpen ? 260 : 0,
                    overflow: "hidden",
                    transition: "max-height 460ms cubic-bezier(.2,.7,.2,1)",
                  }}>
                    <div style={{ padding: "0 4px 22px", fontSize: 15.5, lineHeight: 1.65, color: "#1A1A1A", maxWidth: 680 }}>
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
