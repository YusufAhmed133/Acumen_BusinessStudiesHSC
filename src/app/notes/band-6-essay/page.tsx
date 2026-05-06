import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Write a Band 6 HSC Business Studies Essay | Acumen HSC",
  description:
    "Step-by-step guide to writing a Band 6 HSC Business Studies essay. Structure, marking criteria, integration tips, worked examples.",
  alternates: { canonical: "/notes/band-6-essay" },
  openGraph: {
    title: "How to Write a Band 6 HSC Business Studies Essay | Acumen HSC",
    description: "Step-by-step guide to writing a Band 6 HSC Business Studies essay. Structure, marking criteria, integration tips, worked examples.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Band6EssayPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-sunken">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Free Guide
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-ink-900 sm:text-5xl">
            How to Write a Band 6 HSC Business Studies Essay
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">
            Most students know the content. Band 6 is about knowing how to write it. This guide
            breaks down exactly what markers reward — and what costs marks.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="space-y-12 text-sm leading-relaxed text-ink-700">

          {/* Section 1 */}
          <section>
            <h2 className="font-display text-2xl font-bold text-ink-900">
              1. What Markers Are Actually Looking For
            </h2>
            <p className="mt-4">
              NESA markers use a criterion-referenced rubric. For a 20-mark extended response,
              you are assessed on three dimensions:
            </p>
            <ul className="mt-3 list-disc space-y-3 pl-6">
              <li>
                <strong className="font-semibold text-ink-900">Knowledge and understanding</strong> —
                do you demonstrate accurate, detailed knowledge of the relevant syllabus content?
                Band 6 responses show comprehensive knowledge with precise business terminology,
                not vague generalisations. &ldquo;Qantas used lean production techniques to reduce
                operational waste and lower its cost per available seat kilometre&rdquo; is knowledge.
                &ldquo;The business improved its operations&rdquo; is not.
              </li>
              <li>
                <strong className="font-semibold text-ink-900">Analysis</strong> — do you break
                concepts apart and explain how they work? Analysis means showing cause-and-effect
                relationships. &ldquo;Because JIT requires zero buffer stock, a single supplier
                disruption — as experienced during COVID-19 — can immediately halt the production
                line, exposing the business to significant revenue loss.&rdquo; That is analysis.
                Stating facts without explaining their significance is description, not analysis.
              </li>
              <li>
                <strong className="font-semibold text-ink-900">Evaluation</strong> — do you make
                and justify judgements? Evaluation appears in questions with verbs like
                &ldquo;evaluate,&rdquo; &ldquo;assess,&rdquo; and &ldquo;to what extent.&rdquo;
                It requires you to weigh competing considerations and arrive at a supported
                conclusion. A marker awarding 20/20 sees a student who can say &ldquo;the
                effectiveness of this strategy depends on X and Y, and overall the evidence
                suggests…&rdquo; — not just one who lists advantages and disadvantages.
              </li>
            </ul>
            <p className="mt-4">
              Every sentence you write in an extended response should satisfy at least one of
              these criteria. If a sentence neither adds knowledge, demonstrates analysis, nor
              contributes to an evaluation, cut it.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-display text-2xl font-bold text-ink-900">
              2. The Band 6 Essay Structure
            </h2>
            <p className="mt-4">
              Structure is not a creativity constraint — it is a marking tool. A clearly
              structured response is easier for markers to score highly because they can
              quickly locate evidence of each criterion.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
              Introduction: Thesis First
            </h3>
            <p className="mt-3">
              Your introduction must contain a thesis — a direct answer to the question — in
              the first two sentences. Do not begin with &ldquo;Throughout this essay, I will
              discuss…&rdquo; Begin with your position. For a question asking you to evaluate
              the effectiveness of operations strategies in achieving business objectives:
            </p>
            <blockquote className="mt-3 border-l-4 border-brand-300 pl-4 italic text-ink-600">
              &ldquo;Operations strategies — including lean production, just-in-time inventory,
              and supply chain integration — are highly effective in reducing costs and improving
              quality, though their success depends on the business&apos;s ability to manage
              supplier relationships and adapt to external disruptions such as geopolitical
              instability.&rdquo;
            </blockquote>
            <p className="mt-3">
              That one sentence signals to the marker: this student has a view, knows the
              relevant concepts, and understands the nuance. It earns marks before the body
              paragraphs begin. Your introduction should be 3–5 sentences: thesis, brief
              signposting of your main arguments, and a definition of key terms if relevant.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
              Body Paragraphs: TEEL Structure
            </h3>
            <p className="mt-3">
              Each body paragraph should follow the TEEL framework:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong className="font-semibold text-ink-900">Topic sentence</strong> — one
                sentence naming the concept or strategy you are discussing and linking it to
                the question.
              </li>
              <li>
                <strong className="font-semibold text-ink-900">Evidence/Explanation</strong> —
                two to three sentences of content knowledge. Include precise terminology,
                figures where available, and specific details.
              </li>
              <li>
                <strong className="font-semibold text-ink-900">Example</strong> — a real business
                case study that illustrates the concept. This is where most marks are lost: vague
                case studies (&ldquo;a business in the retail sector&rdquo;) score lower than
                specific ones (&ldquo;Qantas&apos; fleet renewal program reduced fuel burn by 15%
                per seat, directly lowering its cost base&rdquo;).
              </li>
              <li>
                <strong className="font-semibold text-ink-900">Link</strong> — a sentence that
                connects this paragraph back to the question and your thesis. This is where
                analysis and evaluation live. &ldquo;This demonstrates that operations efficiency
                strategies contribute to profitability only where management sustains discipline
                over the long term.&rdquo;
              </li>
            </ul>
            <p className="mt-3">
              A 20-mark extended response typically requires 3–4 body paragraphs covering
              different aspects of the question. Allocate roughly one paragraph per major
              concept or sub-theme.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
              Evaluation Paragraph
            </h3>
            <p className="mt-3">
              For &ldquo;evaluate&rdquo; or &ldquo;assess&rdquo; questions, include a dedicated
              evaluation paragraph before your conclusion. This is where you weigh strengths
              against limitations, consider competing factors, or argue which strategy is more
              effective under specific conditions. Band 5 essays present both sides; Band 6
              essays render a verdict and defend it.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
              Conclusion: Restate and Reinforce
            </h3>
            <p className="mt-3">
              Your conclusion should restate your thesis with added nuance from the body of
              the essay — not simply copy it. Identify the overarching insight: what do all
              your arguments, taken together, tell us? A strong conclusion is two to three
              sentences. Do not introduce new evidence. Do not trail off with &ldquo;in
              conclusion, there are many factors to consider.&rdquo;
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-display text-2xl font-bold text-ink-900">
              3. Integrating Case Studies: Using Qantas Effectively
            </h2>
            <p className="mt-4">
              Qantas is the most versatile HSC Business Studies case study because it is a
              publicly listed company with disclosed financials, significant media coverage,
              and relevance across all four topics: Operations, Marketing, Finance, and Human
              Resources.
            </p>
            <p className="mt-4">
              The mistake most students make is using Qantas as a label rather than an example.
              Compare:
            </p>
            <div className="mt-3 space-y-3">
              <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-red-600">
                  Band 3–4 usage
                </p>
                <p className="mt-1 italic">
                  &ldquo;Qantas uses operations strategies to remain competitive. This has helped
                  the company achieve its objectives.&rdquo;
                </p>
              </div>
              <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
                  Band 6 usage
                </p>
                <p className="mt-1 italic">
                  &ldquo;Qantas&apos; Project Sunrise initiative — the acquisition of Airbus A350
                  aircraft for non-stop Sydney–London routes — exemplifies how capital investment
                  in technology serves both operations efficiency and strategic differentiation.
                  The A350&apos;s 25% lower fuel burn per seat directly reduces Qantas&apos;s
                  highest variable cost while unlocking a premium long-haul market no competitor
                  can currently serve non-stop from Australia.&rdquo;
                </p>
              </div>
            </div>
            <p className="mt-4">
              The second version earns marks because it shows specific knowledge, explains the
              mechanism (fuel burn → cost reduction), and connects the strategy to competitive
              advantage.
            </p>
            <p className="mt-4">
              You do not need to memorise dozens of statistics. You need three or four{" "}
              <strong className="font-semibold text-ink-900">specific, credible details</strong>{" "}
              per case study — a named program, a percentage figure, a strategic decision with
              a clear rationale. For secondary examples, other useful HSC case studies include
              Apple (technology, global supply chain), Toyota (TQM, JIT, lean), and Woolworths
              (retail operations, inventory management, local sourcing).
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-display text-2xl font-bold text-ink-900">
              4. Common Mistakes That Cost Bands
            </h2>
            <ul className="mt-4 list-disc space-y-4 pl-6">
              <li>
                <strong className="font-semibold text-ink-900">No thesis in the introduction.</strong>{" "}
                This is the single most common Band 4 mistake. Without a thesis, there is
                no evaluation — the essay becomes a content dump. Markers cannot award
                high-band marks for an essay without a clear position.
              </li>
              <li>
                <strong className="font-semibold text-ink-900">Listing instead of analysing.</strong>{" "}
                Writing &ldquo;the advantages of JIT are: lower costs, less waste, faster
                production&rdquo; is a list. You get content marks but zero analysis marks.
                Instead, explain why each advantage arises and under what conditions it applies.
              </li>
              <li>
                <strong className="font-semibold text-ink-900">Ignoring the syllabus verb.</strong>{" "}
                &ldquo;Evaluate,&rdquo; &ldquo;assess,&rdquo; &ldquo;analyse,&rdquo; and
                &ldquo;explain&rdquo; all require different responses. &ldquo;Evaluate&rdquo;
                demands a judgement. &ldquo;Explain&rdquo; requires a mechanism. Students
                who describe when asked to evaluate are capped at Band 4.
              </li>
              <li>
                <strong className="font-semibold text-ink-900">Vague or generic case studies.</strong>{" "}
                &ldquo;A large business in the manufacturing sector&rdquo; signals to a marker
                that the student cannot name a real example. Use named businesses with specific
                details every time.
              </li>
              <li>
                <strong className="font-semibold text-ink-900">Overlong introductions.</strong>{" "}
                Spending 200 words on background context before stating your thesis wastes time
                and frustrates markers. Your thesis should appear within the first three sentences.
              </li>
              <li>
                <strong className="font-semibold text-ink-900">No conclusion or a weak one.</strong>{" "}
                A conclusion that simply says &ldquo;in conclusion, operations is important for
                businesses&rdquo; adds nothing. A good conclusion synthesises your arguments and
                reinforces your thesis with the benefit of the evidence you have presented.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-display text-2xl font-bold text-ink-900">
              5. Extended Response vs Short Answer
            </h2>
            <p className="mt-4">
              The HSC Business Studies exam contains both short-answer questions (4–8 marks)
              and extended responses (20 marks). The approach differs significantly.
            </p>
            <p className="mt-4">
              Short-answer questions (4–8 marks) are time-limited. You are being assessed on
              targeted knowledge and analysis — not essay structure. Aim for one point per
              mark, clearly expressed. A 6-mark question asking you to &ldquo;explain two
              factors influencing operations&rdquo; requires two well-developed paragraphs, each
              with a named factor, a clear explanation of how it influences operations, and an
              example. No thesis, no conclusion — just direct, precise content.
            </p>
            <p className="mt-4">
              Extended responses (20 marks) require full essay structure as described above.
              Allow 25–30 minutes in the exam. The marker reads dozens of responses — clarity,
              structure, and precision of language are what distinguish Band 6 answers from the
              crowd.
            </p>
            <p className="mt-4">
              In both formats, the same principles apply: use precise terminology, name specific
              businesses, explain mechanisms, and answer the question that was asked — not the
              question you prepared for.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-display text-2xl font-bold text-ink-900">
              6. Practice Strategy
            </h2>
            <p className="mt-4">
              Reading about essay structure does not build essay skill. Writing essays under
              exam conditions does. The following practice sequence is what separates students
              who peak at Band 5 from those who achieve Band 6:
            </p>
            <ol className="mt-3 list-decimal space-y-3 pl-6">
              <li>
                <strong className="font-semibold text-ink-900">
                  Write one timed essay per week from Week 7, Term 3.
                </strong>{" "}
                Use past paper questions (2014–2025). Set a 25-minute timer. Write by hand —
                typing slows you down in the actual exam if you are used to a keyboard.
              </li>
              <li>
                <strong className="font-semibold text-ink-900">
                  Get every response marked against the rubric.
                </strong>{" "}
                Self-marking is unreliable — you cannot see your own blind spots. Have a teacher,
                tutor, or peer mark your response and identify exactly which criterion was missed.
              </li>
              <li>
                <strong className="font-semibold text-ink-900">
                  Rewrite your weakest paragraph within 24 hours.
                </strong>{" "}
                The moment you receive feedback, rewrite the specific paragraph that lost marks.
                This embeds the correction rather than letting it fade.
              </li>
              <li>
                <strong className="font-semibold text-ink-900">
                  Build a case study reference sheet.
                </strong>{" "}
                One page per major case study: three to five specific facts you can deploy
                across any topic question. Review it weekly, not the night before the exam.
              </li>
              <li>
                <strong className="font-semibold text-ink-900">
                  Practice short answers separately.
                </strong>{" "}
                Short-answer technique is different from extended response. Practice timed
                4-mark and 6-mark responses specifically — these add up to more marks than
                most students realise.
              </li>
            </ol>
          </section>

          {/* CTA */}
          <section className="rounded-xl border border-brand-200 bg-brand-50 p-8">
            <h2 className="font-display text-xl font-bold text-ink-900">
              Get live essay marking from a Band 6 graduate
            </h2>
            <p className="mt-2 text-sm text-ink-500">
              Reading about essay technique gets you part of the way. Live feedback on your
              actual writing — marked against the NESA rubric — is what closes the gap.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-block rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Book a lesson →
            </Link>
          </section>

        </div>
      </article>
    </>
  );
}
