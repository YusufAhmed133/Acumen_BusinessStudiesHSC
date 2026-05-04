import type { Metadata } from "next";
import { LeadForm } from "@/components/sections/LeadForm";

export const metadata: Metadata = {
  title: "About",
  description:
    "Acumen tutors are actual HSC Business Studies markers. Learn about our team, methodology, and why we get results.",
};

const differentiators = [
  {
    title: "We mark the exams",
    desc: "Every Acumen tutor has marked HSC Business Studies for NESA or holds a top result in the subject. We teach you exactly what markers look for — because we are markers.",
  },
  {
    title: "Small groups, real feedback",
    desc: "Maximum 6 students per group. That means your essays actually get marked, not just glanced at. Your questions get answered in the session, not queued for next week.",
  },
  {
    title: "Syllabus-mapped, exam-focused",
    desc: "Every lesson traces directly to a NESA syllabus dot point. We don't teach what's interesting — we teach what's assessed. No filler, no tangents.",
  },
  {
    title: "Parents can see progress",
    desc: "Monthly progress reports against the syllabus map. You'll always know where your child sits on each outcome, not just whether they 'seemed engaged'.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-sunken">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            About Acumen
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-ink-900 sm:text-5xl">
            We&apos;re markers, not just tutors.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">
            Acumen was founded by HSC Business Studies markers who were frustrated watching
            students lose marks on concepts they clearly understood — because they hadn&apos;t
            been taught the language markers use. We built the tutoring service we wish had
            existed when we were studying.
          </p>
        </div>
      </section>

      {/* What makes us different */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-ink-900">
          What makes Acumen different
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="rounded-xl border border-border bg-surface-raised p-6 shadow-xs"
            >
              <h3 className="font-display text-lg font-semibold text-ink-900">
                {d.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-surface-sunken">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-ink-900">
            Our teaching methodology
          </h2>
          <div className="mt-6 space-y-5 text-sm leading-relaxed text-ink-700">
            <p>
              <strong className="font-semibold text-ink-900">Teach the criterion, not the content.</strong>{" "}
              HSC Business Studies is marked against a rubric. Every lesson, we show students
              exactly what a 6/6 response looks like vs a 4/6 response — and specifically what
              word choices, structure, and business terminology make the difference.
            </p>
            <p>
              <strong className="font-semibold text-ink-900">Practice under exam conditions.</strong>{" "}
              Students don&apos;t just read notes — they write responses in every lesson.
              We use a timer, restrict reference materials, and mark live using the same
              rubric NESA markers use.
            </p>
            <p>
              <strong className="font-semibold text-ink-900">Case study flexibility.</strong>{" "}
              We train students to apply any business as a case study, not memorise one.
              The HSC will always surprise you with the business — the frameworks don&apos;t change.
            </p>
            <p>
              <strong className="font-semibold text-ink-900">Data-driven iteration.</strong>{" "}
              We track which syllabus dot points each student gets right and wrong, and
              adjust each lesson accordingly. No two groups run exactly the same program.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-800">
        <div className="mx-auto max-w-xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white">
            See the difference yourself
          </h2>
          <p className="mt-3 text-brand-100/70">
            First lesson free. No commitment.
          </p>
          <LeadForm source="footer_form" className="mx-auto mt-8 max-w-md text-left" />
        </div>
      </section>
    </>
  );
}
