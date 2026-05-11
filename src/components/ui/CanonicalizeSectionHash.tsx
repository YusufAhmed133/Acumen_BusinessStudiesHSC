"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SECTION_ROUTE_MAP, type SectionId } from "@/lib/section-routes";

function sectionFromHash(hash: string): SectionId | undefined {
  const parts = hash
    .split("#")
    .map((part) => part.trim().replace(/^\/+/, ""))
    .filter(Boolean);

  for (let index = parts.length - 1; index >= 0; index -= 1) {
    const section = parts[index] as SectionId;
    if (section in SECTION_ROUTE_MAP) return section;
  }

  return undefined;
}

export function CanonicalizeSectionHash() {
  const router = useRouter();

  useEffect(() => {
    if (window.location.pathname !== "/") return;

    const section = sectionFromHash(window.location.hash);
    if (!section) return;

    router.replace(SECTION_ROUTE_MAP[section].href, { scroll: false });
  }, [router]);

  return null;
}
