"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className={cn("divide-y divide-border", className)}>
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium text-ink-900 transition-colors hover:text-brand-800"
          >
            <span>{item.q}</span>
            <ChevronDown
              size={16}
              className={cn(
                "shrink-0 text-ink-500 transition-transform duration-200",
                open === i && "rotate-180"
              )}
            />
          </button>
          {open === i && (
            <div className="pb-4 text-sm leading-relaxed text-ink-500">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
