"use client";

import { useEffect } from "react";
import Link from "next/link";

const PENDING_SCROLL_KEY = "acumen:pending-scroll";

export function ScrollLink({
  sectionId,
  children,
  style,
  className,
  onNavigate,
}: {
  sectionId: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onNavigate?: () => void;
}) {
  useEffect(() => {
    if (window.location.pathname !== "/") return;
    if (sessionStorage.getItem(PENDING_SCROLL_KEY) !== sectionId) return;

    sessionStorage.removeItem(PENDING_SCROLL_KEY);
    window.requestAnimationFrame(() => {
      const el = document.getElementById(sectionId);
      if (!el) return;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    });
  }, [sectionId]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (window.location.pathname !== "/") {
      sessionStorage.setItem(PENDING_SCROLL_KEY, sectionId);
      window.location.assign("/");
      onNavigate?.();
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    }
    onNavigate?.();
  };

  return (
    <Link href="/" onClick={handleClick} style={style} className={className}>
      {children}
    </Link>
  );
}
