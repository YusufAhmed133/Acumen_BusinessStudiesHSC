"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export function StickyMobileCTA() {
  const [pastHero, setPastHero] = useState(false);
  const [atBook, setAtBook] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const book = document.getElementById("book");

    const heroObs = new IntersectionObserver(
      ([e]) => setPastHero(!e.isIntersecting),
      { threshold: 0.15 }
    );
    const bookObs = new IntersectionObserver(
      ([e]) => setAtBook(e.isIntersecting),
      { threshold: 0.1 }
    );

    if (hero) heroObs.observe(hero);
    if (book) bookObs.observe(book);

    return () => {
      heroObs.disconnect();
      bookObs.disconnect();
    };
  }, []);

  const show = pastHero && !atBook;

  return (
    <div
      className="sticky-mobile-cta"
      aria-hidden={!show}
      style={{
        display: "none",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        padding: "10px 16px calc(10px + env(safe-area-inset-bottom))",
        background: "linear-gradient(to top, rgba(255,255,255,0.97) 60%, rgba(255,255,255,0))",
        transform: show ? "translateY(0)" : "translateY(110%)",
        transition: "transform 300ms cubic-bezier(.2,.7,.2,1)",
        pointerEvents: show ? "auto" : "none",
      }}
    >
      <Link
        href="#book-form"
        tabIndex={show ? 0 : -1}
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
