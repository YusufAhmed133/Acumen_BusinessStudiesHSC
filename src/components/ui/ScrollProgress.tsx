"use client";
import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    // CSS Scroll-Driven Animations handle it natively in Chrome 115+ / Edge 115+
    if (CSS.supports("animation-timeline", "scroll()")) return;

    // rAF fallback for Safari / Firefox
    let rafId: number;
    let max = document.documentElement.scrollHeight - window.innerHeight;
    const onResize = () => { max = document.documentElement.scrollHeight - window.innerHeight; };
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={barRef}
      aria-hidden
      className="scroll-progress-bar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: "linear-gradient(90deg, #1F6B40, #2A4F94)",
        transformOrigin: "left center",
        transform: "scaleX(0)",
        zIndex: 9999,
        willChange: "transform",
        pointerEvents: "none",
      }}
    />
  );
}
