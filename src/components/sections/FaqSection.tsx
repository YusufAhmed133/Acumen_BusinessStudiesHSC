"use client";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const FAQ_TINTS = ["#A8E8BE", "#FADA88", "#A8C8FC", "#F8BCBC", "#A8E8BE", "#FADA88", "#A8C8FC"];

const FAQS = [
  {
    q: "Is the trial really free?",
    a: "Yes — one full session at no cost, no card required. If we're not the right fit, there's no obligation and you won't hear from us again. We'd rather you come back because the lesson was genuinely useful.",
  },
  {
    q: "What's included in the price?",
    a: "The $950 term rate covers every lesson for the school term (approximately 10 sessions), access to all HSC past papers from 2010 to 2025 annotated by syllabus dot point, weekly essay feedback, and the full online question bank. The $110 casual rate is a single session. Nothing is added on top.",
  },
  {
    q: "Who teaches the lessons?",
    a: "Band 6 graduates from UNSW, USYD, UTS, and Macquarie. Every tutor has sat the HSC Business Studies exam and scored in the top band — they know exactly what markers are looking for, and how to close the gap between a student's current mark and where they need to be.",
  },
  {
    q: "What if my child has a question outside of class?",
    a: "We run a 24-hour question line via message. Students can send through any concept, essay paragraph, or past paper question and receive a proper written response — not just a pointer to the textbook.",
  },
  {
    q: "Can a group of school friends join together?",
    a: "Yes. If you have two to four students from the same school who want to learn together, we can arrange a dedicated session at a time that suits the group. Get in touch and we'll work out the details.",
  },
  {
    q: "What happens if my child misses a lesson?",
    a: "Cancellations with more than 24 hours' notice are fully refunded or credited to the next session. Cancellations within 24 hours — for any reason — are charged in full. Every student who misses receives the full notes and worked solutions so they stay on track.",
  },
  {
    q: "Do your prices include GST?",
    a: "Yes. All prices shown on this site are inclusive of GST.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number>(0);

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
                    onClick={() => setOpen(isOpen ? -1 : i)}
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
