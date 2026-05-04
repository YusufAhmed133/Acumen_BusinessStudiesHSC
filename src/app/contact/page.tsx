import type { Metadata } from "next";
import { LeadForm } from "@/components/sections/LeadForm";
import { MapPin, Clock, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to an Acumen tutor within 4 hours. Book your free strategy call today.",
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@acumenhsc.com.au",
    href: "mailto:hello@acumenhsc.com.au",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sydney CBD, Parramatta & Online",
    href: null,
  },
  {
    icon: Clock,
    label: "Reply time",
    value: "Within 4 business hours",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-surface-sunken">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Form side */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                Get in touch
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold text-ink-900 sm:text-5xl">
                Talk to a tutor in 4 hours.
              </h1>
              <p className="mt-4 text-base text-ink-500">
                Fill in the form and we&apos;ll reach out to discuss your needs,
                book your free trial, and match you to the right group.
              </p>
              <LeadForm
                source="contact_form"
                className="mt-8"
              />
            </div>

            {/* Contact details */}
            <div className="lg:pt-16">
              <div className="rounded-xl border border-border bg-surface-raised p-6 shadow-sm">
                <h2 className="font-display text-lg font-semibold text-ink-900">
                  Contact details
                </h2>
                <ul className="mt-5 space-y-4">
                  {contactDetails.map((d) => (
                    <li key={d.label} className="flex items-start gap-3">
                      <d.icon
                        size={18}
                        className="mt-0.5 shrink-0 text-brand-600"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-xs font-medium text-ink-500">{d.label}</p>
                        {d.href ? (
                          <a
                            href={d.href}
                            className="text-sm text-ink-700 hover:text-brand-800 transition-colors"
                          >
                            {d.value}
                          </a>
                        ) : (
                          <p className="text-sm text-ink-700">{d.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-xl border border-brand-100 bg-brand-50 p-5">
                <p className="text-sm font-semibold text-ink-900">
                  Already know you want in?
                </p>
                <p className="mt-1 text-sm text-ink-500">
                  Skip the form — email us directly and mention &quot;first lesson free&quot;
                  and we&apos;ll get you booked same day.
                </p>
                <a
                  href="mailto:hello@acumenhsc.com.au?subject=First lesson free"
                  className="mt-3 inline-block text-sm font-medium text-brand-800 hover:underline"
                >
                  hello@acumenhsc.com.au →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
