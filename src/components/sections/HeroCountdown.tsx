"use client";
import { useEffect, useRef } from "react";

const HSC_DATE = new Date("2026-10-29T09:25:00+11:00");

export function HeroCountdown() {
  const daysRef = useRef<HTMLSpanElement>(null);
  const hrsRef  = useRef<HTMLSpanElement>(null);
  const minsRef = useRef<HTMLSpanElement>(null);
  const secsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const pad = (n: number) => String(n).padStart(2, "0");
    const tick = () => {
      const ms = Math.max(0, HSC_DATE.getTime() - Date.now());
      if (daysRef.current) daysRef.current.textContent = pad(Math.floor(ms / 86400000));
      if (hrsRef.current)  hrsRef.current.textContent  = pad(Math.floor((ms % 86400000) / 3600000));
      if (minsRef.current) minsRef.current.textContent = pad(Math.floor((ms % 3600000) / 60000));
      if (secsRef.current) secsRef.current.textContent = pad(Math.floor((ms % 60000) / 1000));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const unit = (ref: React.RefObject<HTMLSpanElement | null>, label: string) => (
    <span
      style={{
        fontSize: 24,
        fontWeight: 600,
        fontVariantNumeric: "tabular-nums",
        letterSpacing: "-0.03em",
        display: "inline-flex",
        alignItems: "baseline",
      }}
    >
      <span ref={ref} style={{ display: "inline-block", minWidth: label === "d" ? "3ch" : "2ch", textAlign: "right" }}>
        --
      </span>
      <span style={{ color: "#C9EFD3", fontWeight: 500, marginLeft: 2, fontSize: 13 }}>
        {label}
      </span>
    </span>
  );

  return (
    <div
      className="hero-countdown"
      role="timer"
      aria-live="off"
      aria-label="HSC 2026 countdown"
      style={{
        display: "inline-flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 9,
        padding: "10px 14px",
        borderRadius: 10,
        background: "#111111",
        color: "#ffffff",
      }}
    >
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#C9EFD3",
        }}
      >
        HSC 2026
      </span>
      <span
        style={{
          width: 1,
          height: 18,
          background: "rgba(255,255,255,0.2)",
          display: "inline-block",
        }}
        className="countdown-divider"
      />
      {unit(daysRef, "d")}
      {unit(hrsRef,  "h")}
      {unit(minsRef, "m")}
      {unit(secsRef, "s")}
      <style>{`
        @media (max-width: 520px) {
          .hero-countdown {
            gap: 8px !important;
            padding: 10px 12px !important;
          }
          .countdown-divider {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
