import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { LeadForm } from "@/components/sections/LeadForm";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "HSC Business Studies tutoring at $110 per 1-hour lesson. No lock-in, first lesson free.",
};

const included = [
  "1-hour weekly lesson in a group of ≤6 students",
  "Full lesson recording sent within 24 hours",
  "Weekly topic summary notes (yours to keep)",
  "24/7 question line — answer within 4 business hours",
  "Monthly mock exam with marker-style feedback",
  "Essay marking with criterion-by-criterion comments",
  "48-hour turnaround on submitted work",
  "Access to complete resource library for your year",
];

const comparison = [
  {
    feature: "Price per lesson",
    acumen: "$110 / 1 hr",
    them: "$90–$150 / 1hr",
  },
  { feature: "Marker-trained tutors", acumen: true, them: false },
  { feature: "Group size", acumen: "≤6 students", them: "8–20 students" },
  { feature: "Lesson recordings", acumen: true, them: false },
  { feature: "Essay marking included", acumen: true, them: "$50 extra" },
  { feature: "Lock-in contract", acumen: false, them: true },
  { feature: "First lesson free", acumen: true, them: false },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-sunken">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Transparent pricing
          </p>
          <h1 className="mt-3 font-display text-5xl font-bold text-ink-900 sm:text-6xl">
            $110 per lesson.
            <br />
            That&apos;s it.
          </h1>
          <p className="mt-5 text-lg text-ink-500">
            1-hour lessons. No packages, no lock-in, no upsells.
            First lesson is free — no card required.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-ink-900">
          What&apos;s included at $110
        </h2>
        <ul className="mt-6 space-y-3">
          {included.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check
                size={18}
                className="mt-0.5 shrink-0 text-success"
                aria-hidden="true"
              />
              <span className="text-sm text-ink-700">{item}</span>
            </li>
          ))}
        </ul>

        {/* Price card */}
        <div className="mt-10 rounded-xl border-2 border-brand-800 bg-surface-raised p-6 shadow-md">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-5xl font-bold text-brand-800">$110</span>
            <span className="text-sm text-ink-500">per 1-hour lesson</span>
          </div>
          <p className="mt-2 text-sm text-ink-500">
            No minimum commitment. Book as many or as few lessons as you need.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="/contact"
              className="rounded-md bg-accent-500 px-5 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-accent-600 hover:-translate-y-px"
            >
              Book free trial lesson →
            </a>
          </div>
          <p className="mt-3 text-xs text-ink-300">
            First lesson free. No credit card required.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-surface-sunken">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-ink-900">
            How we compare
          </h2>
          <p className="mt-2 text-sm text-ink-500">
            Acumen vs. the big tutoring chains.
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-sunken">
                  <th className="px-4 py-3 text-left font-medium text-ink-700">
                    Feature
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-brand-800">
                    Acumen
                  </th>
                  <th className="px-4 py-3 text-center font-medium text-ink-500">
                    Other chains
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparison.map((row) => (
                  <tr key={row.feature} className="bg-surface-raised">
                    <td className="px-4 py-3 text-ink-700">{row.feature}</td>
                    <td className="px-4 py-3 text-center font-medium text-brand-800">
                      {typeof row.acumen === "boolean" ? (
                        row.acumen ? (
                          <Check
                            size={16}
                            className="mx-auto text-success"
                            aria-label="Yes"
                          />
                        ) : (
                          <X
                            size={16}
                            className="mx-auto text-error"
                            aria-label="No"
                          />
                        )
                      ) : (
                        row.acumen
                      )}
                    </td>
                    <td className="px-4 py-3 text-center text-ink-500">
                      {typeof row.them === "boolean" ? (
                        row.them ? (
                          <Check
                            size={16}
                            className="mx-auto text-success"
                            aria-label="Yes"
                          />
                        ) : (
                          <X
                            size={16}
                            className="mx-auto text-error"
                            aria-label="No"
                          />
                        )
                      ) : (
                        row.them
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-800">
        <div className="mx-auto max-w-xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white">
            Start with a free lesson
          </h2>
          <p className="mt-3 text-brand-100/70">
            No card required. We&apos;ll match you to the right group.
          </p>
          <LeadForm source="footer_form" className="mx-auto mt-8 max-w-md text-left" />
        </div>
      </section>
    </>
  );
}
