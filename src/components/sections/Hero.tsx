"use client";
import { useEffect, useState } from "react";
import { EnquiryForm } from "@/components/sections/EnquiryForm";

const HSC_DATE = new Date("2026-10-29T09:25:00+11:00");

function useCountdown(target: Date) {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  if (!mounted) return { days: 0, hrs: 0, mins: 0, secs: 0 };
  const ms = Math.max(0, target.getTime() - now);
  return {
    days: Math.floor(ms / 86400000),
    hrs: Math.floor((ms % 86400000) / 3600000),
    mins: Math.floor((ms % 3600000) / 60000),
    secs: Math.floor((ms % 60000) / 1000),
  };
}

export function Hero() {
  const c = useCountdown(HSC_DATE);


  return (
    <section
      id="top"
      style={{
        background: "radial-gradient(ellipse at 0% 60%, rgba(201,239,211,0.18) 0%, transparent 52%), radial-gradient(ellipse at 90% 10%, rgba(251,230,189,0.13) 0%, transparent 48%), #ffffff",
        overflowX: "hidden",
        overflowY: "hidden",
        position: "relative",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {/* Giant background A — pastel gradient, angled behind the form, slow parallax */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "38%",
          top: "50%",
          transform: "translateY(-50%) rotateZ(-5deg)",
          fontSize: "clamp(280px, 32vw, 480px)",
          fontWeight: 800,
          lineHeight: 0.85,
          letterSpacing: "-0.06em",
          background: "linear-gradient(135deg, #72D69B 0%, #F2C94C 30%, #F08C8C 62%, #7EB5F8 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          opacity: 0.88,
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 0,
          fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
        }}
      >
        A
      </div>

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
        {/* Left — headline + descriptor */}
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
            Sydney&apos;s No.1 Business Studies HSC Specialist
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
            Taught by Band 6 graduates from top institutions such as UNSW, USYD, UTS and Macquarie.
          </p>

          {/* HSC countdown */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 16,
              padding: "14px 20px",
              borderRadius: 14,
              background: "#111111",
              color: "#ffffff",
            }}
          >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#C9EFD3",
                }}
              >
                HSC 2026
              </span>
              <span
                style={{
                  width: 1,
                  height: 20,
                  background: "rgba(255,255,255,0.2)",
                  display: "inline-block",
                }}
              />
              {[
                { n: c.days, l: "d" },
                { n: c.hrs, l: "h" },
                { n: c.mins, l: "m" },
                { n: c.secs, l: "s" },
              ].map(({ n, l }) => (
                <span
                  key={l}
                  style={{
                    fontSize: 28,
                    fontWeight: 600,
                    fontVariantNumeric: "tabular-nums",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {String(n).padStart(2, "0")}
                  <span
                    style={{
                      color: "#C9EFD3",
                      fontWeight: 400,
                      marginLeft: 3,
                      fontSize: 15,
                    }}
                  >
                    {l}
                  </span>
                </span>
              ))}
          </div>
        </div>

        {/* Right — form */}
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
