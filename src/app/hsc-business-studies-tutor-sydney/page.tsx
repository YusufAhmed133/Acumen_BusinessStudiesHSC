import type { Metadata } from "next";
import { LeadForm } from "@/components/sections/LeadForm";

export const metadata: Metadata = {
  title: "HSC Business Studies Tutor Sydney | Band 6 | Acumen HSC",
  description:
    "Expert HSC Business Studies tutoring in Sydney. Small groups of 6, Band 6-trained tutors, essay marking with 48-hour turnaround. First lesson free.",
  alternates: { canonical: "/hsc-business-studies-tutor-sydney" },
};

const FEATURES = [
  {
    heading: "Small groups, real feedback",
    body: "Every class is capped at 6 students. You get actual essay marking — every paragraph gets criterion-by-criterion comments.",
  },
  {
    heading: "Band 6 tutors only",
    body: "Every tutor holds a Band 6 result in HSC Business Studies. They teach exactly what markers reward.",
  },
  {
    heading: "24-hour question line",
    body: "Send any concept, essay paragraph, or past paper question. A tutor replies within 24 hours, every day.",
  },
  {
    heading: "Year 11 and Year 12",
    body: "We cover the full Preliminary and HSC course. Start in Year 11 to build a foundation — or join in Year 12 to close the gap.",
  },
  {
    heading: "Syllabus-mapped lessons",
    body: "Every lesson traces to a NESA dot point. We teach what is assessed, not what is interesting.",
  },
  {
    heading: "First lesson free",
    body: "No credit card, no commitment. Come to one full lesson and decide if it is the right fit.",
  },
];

const SUBJECTS = [
  { topic: "Operations", slug: "operations", desc: "Supply chain, quality management, global strategies." },
  { topic: "Marketing", slug: "marketing", desc: "The marketing mix, consumer behaviour, global marketing." },
  { topic: "Finance", slug: "finance", desc: "Financial ratios, cash flow, working capital." },
  { topic: "Human Resources", slug: "human-resources", desc: "Employment contracts, motivation theories, workplace change." },
];

export default function SydneyLandingPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#0D0D0D", padding: "88px 0 80px" }}>
        <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 28px", textAlign: "center" }}>
          <p style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#A8E8BE",
            marginBottom: 20,
          }}>
            Sydney CBD · Parramatta · Online
          </p>
          <h1 style={{
            fontWeight: 800,
            fontSize: "clamp(36px, 5vw, 64px)",
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: "#FFFCF4",
            margin: "0 0 24px",
          }}>
            HSC Business Studies Tutor Sydney
          </h1>
          <p style={{
            fontSize: "clamp(16px, 2vw, 19px)",
            lineHeight: 1.65,
            color: "rgba(255,252,244,0.72)",
            maxWidth: 600,
            margin: "0 auto 40px",
          }}>
            Small-group tutoring with Band 6 tutors. Essay marking, a 24-hour question line,
            and a free first lesson — no lock-in.
          </p>
          <a
            href="#enquire"
            style={{
              display: "inline-block",
              background: "#C9EFD3",
              color: "#0A2E1A",
              fontWeight: 700,
              fontSize: 15,
              padding: "14px 28px",
              borderRadius: 10,
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Book free trial lesson →
          </a>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: "#ffffff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}>
          <h2 style={{
            fontWeight: 700,
            fontSize: "clamp(28px, 3.5vw, 44px)",
            letterSpacing: "-0.03em",
            color: "#111",
            marginBottom: 48,
          }}>
            What makes Acumen different
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 28,
          }}>
            {FEATURES.map(({ heading, body }) => (
              <div
                key={heading}
                style={{
                  background: "#F9F9F7",
                  borderRadius: 16,
                  padding: "28px 28px 32px",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <h3 style={{ fontWeight: 700, fontSize: 15, color: "#111", marginBottom: 10, letterSpacing: "-0.01em" }}>
                  {heading}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "#555", margin: 0 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section style={{ background: "#F9F9F7", padding: "80px 0", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}>
          <h2 style={{
            fontWeight: 700,
            fontSize: "clamp(24px, 3vw, 40px)",
            letterSpacing: "-0.03em",
            color: "#111",
            marginBottom: 12,
          }}>
            All four HSC Business Studies topics
          </h2>
          <p style={{ fontSize: 15, color: "#666", marginBottom: 40, lineHeight: 1.6 }}>
            We cover the complete NSW NESA Business Studies syllabus for Years 11 and 12.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}>
            {SUBJECTS.map(({ topic, slug, desc }) => (
              <a
                key={slug}
                href={`/courses/${slug}`}
                style={{
                  display: "block",
                  background: "#fff",
                  borderRadius: 14,
                  padding: "24px 24px 28px",
                  border: "1.5px solid rgba(0,0,0,0.08)",
                  textDecoration: "none",
                }}
              >
                <h3 style={{ fontWeight: 700, fontSize: 16, color: "#111", margin: "0 0 8px", letterSpacing: "-0.01em" }}>
                  {topic}
                </h3>
                <p style={{ fontSize: 13, color: "#666", margin: 0, lineHeight: 1.6 }}>{desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Form */}
      <section id="enquire" style={{ background: "#ffffff", padding: "80px 0 96px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", padding: "0 28px" }}>
          <h2 style={{
            fontWeight: 700,
            fontSize: "clamp(24px, 3vw, 38px)",
            letterSpacing: "-0.03em",
            color: "#111",
            marginBottom: 12,
          }}>
            Book a free trial lesson
          </h2>
          <p style={{ fontSize: 15, color: "#666", marginBottom: 32, lineHeight: 1.6 }}>
            Fill in the form and we&apos;ll reach out within 4 business hours to confirm your free session.
          </p>
          <LeadForm source="sydney_landing" />
        </div>
      </section>
    </>
  );
}
