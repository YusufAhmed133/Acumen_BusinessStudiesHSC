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

  const unit = (ref: React.RefObject<HTMLSpanElement | null>, label: string, initial: string) => (
    <span
      style={{
        fontSize: 28,
        fontWeight: 600,
        fontVariantNumeric: "tabular-nums",
        letterSpacing: "-0.03em",
      }}
    >
      <span ref={ref} suppressHydrationWarning>{initial}</span>
      <span style={{ color: "#C9EFD3", fontWeight: 400, marginLeft: 3, fontSize: 15 }}>
        {label}
      </span>
    </span>
  );

  const ms = Math.max(0, HSC_DATE.getTime() - Date.now());
  const pad = (n: number) => String(n).padStart(2, "0");
  const init = {
    d: pad(Math.floor(ms / 86400000)),
    h: pad(Math.floor((ms % 86400000) / 3600000)),
    m: pad(Math.floor((ms % 3600000) / 60000)),
    s: pad(Math.floor((ms % 60000) / 1000)),
  };

  return (
    <div
      role="timer"
      aria-live="off"
      aria-label="HSC 2026 countdown"
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
      {unit(daysRef, "d", init.d)}
      {unit(hrsRef,  "h", init.h)}
      {unit(minsRef, "m", init.m)}
      {unit(secsRef, "s", init.s)}
    </div>
  );
}
