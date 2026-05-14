"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export function StickyMobileCTA() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([e]) => setPastHero(!e.isIntersecting),
      { threshold: 0.15 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className="sticky-mobile-cta"
      aria-hidden={!pastHero}
      style={{
        display: "none",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        padding: "10px 16px calc(10px + env(safe-area-inset-bottom))",
        background: "linear-gradient(to top, rgba(255,255,255,0.97) 60%, rgba(255,255,255,0))",
        transform: pastHero ? "translateY(0)" : "translateY(110%)",
        transition: "transform 300ms cubic-bezier(.2,.7,.2,1)",
        pointerEvents: pastHero ? "auto" : "none",
      }}
    >
      <Link
        href="#enquire"
        tabIndex={pastHero ? 0 : -1}
        style={{
          display: "block",
          textAlign: "center",
          padding: "17px 20px",
          borderRadius: 999,
          background: "#0A0A0A",
          color: "#FFFCF4",
          textDecoration: "none",
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          boxShadow: "0 6px 28px rgba(0,0,0,0.22)",
        }}
      >
        Book a free trial lesson →
      </Link>
    </div>
  );
}
