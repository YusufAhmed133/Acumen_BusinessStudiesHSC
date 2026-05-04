"use client";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryForm } from "@/components/sections/EnquiryForm";

const HSC_DATE = new Date("2026-10-29T09:25:00+11:00");

function useCountdown(target: Date) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
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
    <section id="top" style={{ background: "#FFFCF4", overflowX: "hidden" }}>
      <div style={{
        maxWidth: 1320,
        margin: "0 auto",
        padding: "80px 28px",
        display: "grid",
        gridTemplateColumns: "1.05fr 1fr",
        gap: 48,
        alignItems: "start",
      }}
        className="hero-grid"
      >
        <Reveal>
          <div>
            {/* Location badge */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "7px 13px",
              background: "#F4F0E8",
              border: "1px solid rgba(10,10,10,0.1)",
              borderRadius: 999,
              fontSize: 12.5,
              fontWeight: 500,
              color: "#1A1A1A",
              letterSpacing: "-0.005em",
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: 999,
                background: "#1F6B40",
                boxShadow: "0 0 0 4px rgba(31,107,64,0.2)",
                display: "inline-block",
              }} />
              HSC Business Studies · Sydney, NSW
            </div>

            {/* Headline */}
            <h1 style={{
              fontWeight: 600,
              fontSize: "clamp(42px, 5.8vw, 88px)",
              lineHeight: 0.98,
              letterSpacing: "-0.045em",
              margin: "22px 0 0",
              color: "#0A0A0A",
            }}>
              The HSC Business<br />
              tutoring built by<br />
              <span style={{
                background: "linear-gradient(120deg, #1F6B40 0%, #2A4F94 50%, #923333 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                99.95+ graduates.
              </span>
            </h1>

            <p style={{
              margin: "22px 0 0",
              maxWidth: 520,
              fontSize: 17.5,
              lineHeight: 1.55,
              color: "#1A1A1A",
            }}>
              Weekly small-group classes for Year 11 and Year 12. A marked essay every week, a 24-hour question line, and the full past-paper bank. First lesson on us.
            </p>

            {/* Countdown pill */}
            <div style={{
              marginTop: 32,
              display: "inline-flex",
              alignItems: "center",
              gap: 18,
              padding: "14px 22px",
              borderRadius: 999,
              background: "#0A0A0A",
              color: "#FFFCF4",
              boxShadow: "0 18px 50px rgba(0,0,0,0.16)",
            }}>
              <span style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#FBE6BD",
              }}>
                HSC 2026
              </span>
              <span style={{ width: 1, height: 18, background: "rgba(255,252,244,0.25)", display: "inline-block" }} />
              {[
                { n: c.days, l: "d" },
                { n: c.hrs,  l: "h" },
                { n: c.mins, l: "m" },
                { n: c.secs, l: "s" },
              ].map(({ n, l }) => (
                <span key={l} style={{
                  fontSize: 18,
                  fontWeight: 600,
                  fontVariantNumeric: "tabular-nums",
                  letterSpacing: "-0.02em",
                }}>
                  {String(n).padStart(2, "0")}
                  <span style={{ color: "#FBE6BD", fontWeight: 400, marginLeft: 2 }}>{l}</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div id="enquire">
            <EnquiryForm />
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; padding: 60px 20px !important; }
        }
      `}</style>
    </section>
  );
}
