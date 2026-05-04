import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold text-ink-900">Terms of Service</h1>
      <p className="mt-3 text-sm text-ink-500">Last updated: May 2026</p>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-700">
        <p>
          By booking and attending lessons with Acumen HSC Tutoring, you agree to pay
          the applicable lesson fee ($110 per 1.5-hour lesson at current rates).
        </p>
        <p>
          Lessons may be rescheduled with 24 hours notice. Missed lessons without
          notice are non-refundable. Recordings are provided for personal use only and
          may not be shared or distributed.
        </p>
        <p>
          Acumen reserves the right to modify pricing with 4 weeks&apos; written notice.
          For questions, contact{" "}
          <a href="mailto:hello@acumenhsc.com.au" className="text-brand-800 hover:underline">
            hello@acumenhsc.com.au
          </a>
          .
        </p>
      </div>
    </div>
  );
}
