"use client";
import { useEffect, useRef, useState } from "react";
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
  const bgLetterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bgLetterRef.current;
    if (!el) return;
    let rafId: number;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.transform = `translate3d(-50%, calc(-50% + ${-window.scrollY * 0.35}px), 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="top"
      style={{
        background: [
          "radial-gradient(ellipse at 75% 20%, rgba(207,234,217,0.28) 0%, transparent 45%)",
          "radial-gradient(ellipse at 15% 80%, rgba(207,223,244,0.22) 0%, transparent 45%)",
          "radial-gradient(ellipse at 50% 55%, rgba(251,230,189,0.18) 0%, transparent 55%)",
          "#F8F7F4",
        ].join(", "),
        overflowX: "hidden",
        overflowY: "hidden",
        position: "relative",
      }}
    >
      {/* Decorative A — centred, slow parallax */}
      <div
        ref={bgLetterRef}
        aria-hidden
        style={{
          position: "absolute",
          left: "54%",
          top: "50%",
          transform: "translate3d(-50%, -50%, 0)",
          fontSize: "clamp(520px, 58vw, 980px)",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.06em",
          color: "rgba(10,10,10,0.055)",
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 0,
          willChange: "transform",
        }}
      >
        A
      </div>

      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "80px 28px",
          display: "grid",
          gridTemplateColumns: "1.05fr 1fr",
          gap: 48,
          alignItems: "start",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-grid"
      >
        <Reveal>
          <div>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "7px 13px",
              background: "rgba(255,255,255,0.8)",
              border: "1px solid rgba(10,10,10,0.09)",
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

            {/* Three-line headline, each line a different topic accent */}
            <h1 style={{
              fontWeight: 600,
              fontSize: "clamp(42px, 5.8vw, 88px)",
              lineHeight: 0.98,
              letterSpacing: "-0.045em",
              margin: "22px 0 0",
            }}>
              <span style={{ color: "#1F6B40", display: "block" }}>Sydney&apos;s HSC</span>
              <span style={{ color: "#A66E12", display: "block" }}>Business Studies</span>
              <span style={{ color: "#2A4F94", display: "block" }}>specialist.</span>
            </h1>

            <p style={{
              margin: "22px 0 0",
              maxWidth: 520,
              fontSize: 17.5,
              lineHeight: 1.55,
              color: "#3A3A3A",
            }}>
              Run by a 99.95+ ATAR graduate. Weekly small-group classes for Year 11 and Year 12. Live marking, a 24-hour question line, and every HSC paper from 2010 to 2024, indexed by dot point. First lesson free.
            </p>

            <div style={{
              marginTop: 32,
              display: "inline-flex",
              alignItems: "center",
              gap: 18,
              padding: "14px 22px",
              borderRadius: 999,
              background: "#1A1A1A",
              color: "#FFFCF4",
              boxShadow: "0 14px 40px rgba(0,0,0,0.12)",
            }}>
              <span style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#CFEAD9",
              }}>
                HSC 2026
              </span>
              <span style={{ width: 1, height: 18, background: "rgba(255,252,244,0.2)", display: "inline-block" }} />
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
                  <span style={{ color: "#CFEAD9", fontWeight: 400, marginLeft: 2 }}>{l}</span>
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
