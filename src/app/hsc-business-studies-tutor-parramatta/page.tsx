import type { Metadata } from "next";
import { LeadForm } from "@/components/sections/LeadForm";

export const metadata: Metadata = {
  title: "HSC Business Studies Tutor Parramatta | Band 6 | Acumen HSC",
  description:
    "HSC Business Studies tutoring in Parramatta and Western Sydney. Small groups, Band 6 tutors, essay marking. First lesson free.",
  alternates: { canonical: "/hsc-business-studies-tutor-parramatta" },
};

const FEATURES = [
  {
    heading: "Parramatta and Western Sydney",
    body: "Lessons run in-person in Parramatta and online. No need to travel to the North Shore — we come to you.",
  },
  {
    heading: "Small groups, real feedback",
    body: "Every class is capped at 6 students. Essays get marked with criterion-by-criterion comments, not just a band number.",
  },
  {
    heading: "Band 6 tutors only",
    body: "Every tutor holds a Band 6 result in HSC Business Studies. They teach from direct exam experience.",
  },
  {
    heading: "24-hour question line",
    body: "Send any question, essay paragraph, or past paper response. A tutor replies within 24 hours, any day of the week.",
  },
  {
    heading: "Year 11 and Year 12",
    body: "We cover the full Preliminary and HSC course — Operations, Marketing, Finance, and Human Resources.",
  },
  {
    heading: "First lesson free",
    body: "No credit card. No commitment. Come to one full lesson and decide.",
  },
];

export default function ParramattaLandingPage() {
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
            Parramatta · Western Sydney · Online
          </p>
          <h1 style={{
            fontWeight: 800,
            fontSize: "clamp(36px, 5vw, 64px)",
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: "#FFFCF4",
            margin: "0 0 24px",
          }}>
            HSC Business Studies Tutor Parramatta
          </h1>
          <p style={{
            fontSize: "clamp(16px, 2vw, 19px)",
            lineHeight: 1.65,
            color: "rgba(255,252,244,0.72)",
            maxWidth: 600,
            margin: "0 auto 40px",
          }}>
            Band 6 Business Studies tutoring for Year 11 and 12 students in Parramatta
            and Western Sydney. Small groups, weekly essay marking, free first lesson.
          </p>
          <a
            href="/#enquire"
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
            Tutoring for Parramatta students
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

      {/* Local context */}
      <section style={{ background: "#F9F9F7", padding: "64px 0", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 28px" }}>
          <h2 style={{
            fontWeight: 700,
            fontSize: "clamp(22px, 2.8vw, 36px)",
            letterSpacing: "-0.03em",
            color: "#111",
            marginBottom: 16,
          }}>
            Western Sydney students get the same result
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "#555", marginBottom: 16 }}>
            Most Band 6 Business Studies tutoring is concentrated on the North Shore. Acumen runs
            in-person sessions in Parramatta and fully online — so students from Parramatta, Blacktown,
            Penrith, and the Hills District get the same preparation as anyone else.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "#555", margin: 0 }}>
            The HSC markers are the same across every school in NSW. The marking criteria are the same.
            The tutoring should be too.
          </p>
        </div>
      </section>

      {/* CTA / Form */}
      <section style={{ background: "#ffffff", padding: "80px 0 96px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
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
            Fill in the form and we&apos;ll confirm your Parramatta or online session within 4 business hours.
          </p>
          <LeadForm source="parramatta_landing" />
        </div>
      </section>
    </>
  );
}
