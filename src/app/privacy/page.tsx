import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold text-ink-900">Privacy Policy</h1>
      <p className="mt-3 text-sm text-ink-500">Last updated: May 2026</p>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-700">
        <p>
          Acumen HSC Tutoring (&ldquo;Acumen&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects personal
          information you provide when you submit an enquiry form or contact us. This
          includes your name, email address, phone number, and year group.
        </p>
        <p>
          We use this information to respond to your enquiry, provide tutoring services,
          and send relevant communications. We do not sell your data to third parties.
        </p>
        <p>
          Data is stored in Supabase (Australia region) and processed by Resend for
          transactional emails. For enquiries about your data, email{" "}
          <a href="mailto:hello@acumenhsc.com.au" className="text-brand-800 hover:underline">
            hello@acumenhsc.com.au
          </a>
          .
        </p>
      </div>
    </div>
  );
}
