import { EnquiryForm } from "@/components/sections/EnquiryForm";

export function Hero() {
  return (
    <section
      id="top"
      className="hero-section"
      style={{
        background: "radial-gradient(ellipse at 0% 60%, rgba(201,239,211,0.18) 0%, transparent 52%), radial-gradient(ellipse at 90% 10%, rgba(251,230,189,0.13) 0%, transparent 48%), #ffffff",
        overflowX: "hidden",
        overflowY: "hidden",
        position: "relative",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "80px 28px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 0.9fr",
          gap: 56,
          alignItems: "start",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-grid"
      >
        <div>
          <h1
            className="hero-h1"
            style={{
              fontWeight: 700,
              fontSize: "clamp(40px, 5.4vw, 78px)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              margin: "0 0 24px",
              color: "#111111",
              maxWidth: 560,
            }}
          >
            HSC Business Studies Tutoring in Sydney
            <span style={{ display: "block", fontSize: "0.72em", marginTop: "0.28em" }}>
              <span style={{ color: "#C4973E" }}>Taught by </span>
              <span style={{ color: "#C06060" }}>Band </span><span style={{ color: "#5B8FD4" }}>6 </span>
              <span style={{ color: "#4DAA78" }}>Graduates</span>
            </span>
          </h1>

          {/* mobile-only CTA — form lives at #book below FAQ */}
          <div className="hero-mobile-cta-block" style={{ display: "none" }}>
            <a
              href="#book-form"
              style={{
                display: "inline-block",
                padding: "15px 28px",
                borderRadius: 999,
                background: "#C9EFD3",
                color: "#0A2E1A",
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: "-0.01em",
                textDecoration: "none",
              }}
            >
              Book a free trial lesson →
            </a>
          </div>
        </div>

        <div className="hero-form-col" id="enquire">
          <EnquiryForm />
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 56px 20px 52px !important;
            gap: 0 !important;
          }
          .hero-form-col { display: none !important; }
          .hero-mobile-cta-block { display: block !important; }
          .hero-h1 { font-size: clamp(36px, 9.5vw, 52px) !important; line-height: 1.02 !important; }
        }
      `}</style>
    </section>
  );
}
