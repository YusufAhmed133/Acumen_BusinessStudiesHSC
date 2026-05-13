import { EnquiryForm } from "@/components/sections/EnquiryForm";

const HERO_GRADIENT_TEXT = "Taught by Band 6 Graduates";
const HERO_GRADIENT = "linear-gradient(135deg, #9FDDB4 0%, #F2CF73 31%, #EDA9AD 64%, #A9C8F3 100%)";

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
              fontSize: "clamp(34px, 4.6vw, 68px)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              margin: "0 0 24px",
              color: "#111111",
              maxWidth: 520,
            }}
          >
            HSC Business Studies Tutoring in Sydney
            <span style={{
              display: "block",
              fontSize: "0.72em",
              background: HERO_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginTop: "0.1em",
            }}>
              {HERO_GRADIENT_TEXT}
            </span>
          </h1>

          <p
            style={{
              margin: "0 0 36px",
              maxWidth: 380,
              fontSize: 18,
              lineHeight: 1.58,
              color: "#3D3D3D",
              fontWeight: 400,
            }}
          >
            Taught by Band 6 graduates who know the HSC Business Studies exam. Available online and in Sydney for Year 11 and Year 12.
          </p>

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
