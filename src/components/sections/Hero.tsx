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
              <span style={{ color: "#C8920A" }}>Taught by </span>
              <span style={{ color: "#D4606A" }}>Band 6 </span>
              <span style={{ color: "#3D9E72" }}>Graduates</span>
            </span>
          </h1>

        </div>

        <div id="enquire">
          <EnquiryForm />
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 64px 20px 72px !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
