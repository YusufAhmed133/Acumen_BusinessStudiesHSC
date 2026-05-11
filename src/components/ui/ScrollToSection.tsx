"use client";

import { useEffect } from "react";

export function ScrollToSection({ id }: { id: string }) {
  useEffect(() => {
    const scroll = () => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    };

    const frameId = window.requestAnimationFrame(scroll);
    const timeoutId = window.setTimeout(scroll, 120);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
    };
  }, [id]);

  return null;
}
