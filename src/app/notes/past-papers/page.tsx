import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HSC Business Studies Past Papers 2014–2025 | Free | Acumen HSC",
  description:
    "Free HSC Business Studies past papers from 2014 to 2025 with links to NESA. All sections: MCQ, short answer, extended response.",
  alternates: { canonical: "/notes/past-papers" },
  robots: { index: false, follow: false },
};

const NESA_URL =
  "https://www.educationstandards.nsw.edu.au/wps/portal/nesa/11-12/stage-6-learning-areas/stage-6-humanities-and-social-sciences/business-studies/past-hsc-papers";

const papers = [
  {
    year: 2025,
    focus:
      "Heavy weighting on operations and sustainability. Extended response question drew on global supply chain disruption — students who had case-studied Qantas and Toyota post-COVID performed well.",
  },
  {
    year: 2024,
    focus:
      "Finance topic featured strongly in short answers, including ratio analysis and working capital management. The 20-mark question asked students to evaluate how operations strategies contribute to business objectives.",
  },
  {
    year: 2023,
    focus:
      "Marketing and human resources split the extended response section. A notable short-answer question asked students to explain the impact of e-commerce on a business's marketing strategy.",
  },
  {
    year: 2022,
    focus:
      "Post-pandemic themes featured prominently. Questions addressed how COVID-19 disrupted operations and supply chains, and how businesses adapted their human resource strategies during remote work transitions.",
  },
  {
    year: 2021,
    focus:
      "Finance and operations dominated. Students were asked to analyse global factors influencing operations and evaluate financial management strategies for a business facing economic downturn.",
  },
  {
    year: 2020,
    focus:
      "The 2020 HSC was conducted under modified conditions due to COVID-19. Paper focused on core content from all four topics. Marketing and operations case study questions required specific business examples.",
  },
  {
    year: 2019,
    focus:
      "Strong focus on human resource management. The extended response required students to evaluate the effectiveness of HR strategies in achieving workforce objectives. Operations short answers tested supply chain concepts.",
  },
  {
    year: 2018,
    focus:
      "Finance topic featured detailed ratio analysis questions. Students needed to calculate and interpret profitability, liquidity, and efficiency ratios. Marketing extended response centred on global marketing strategy.",
  },
  {
    year: 2017,
    focus:
      "Operations management was the major extended response topic. Questions tested knowledge of quality management, lean production, and the role of technology in transforming operations processes.",
  },
  {
    year: 2016,
    focus:
      "Human resources and marketing were prominent. Questions required students to integrate syllabus concepts with contemporary business examples. First year of the revised syllabus format.",
  },
  {
    year: 2015,
    focus:
      "Finance and operations split across short answer and extended response. Students needed to demonstrate understanding of global influences on both topics. Case study integration was rewarded heavily.",
  },
  {
    year: 2014,
    focus:
      "Strong emphasis on all four topics with a balanced spread of short-answer marks. Extended response focused on operations and the role of technology in transforming business processes.",
  },
];

export default function PastPapersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-sunken">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Past Papers
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-ink-900 sm:text-5xl">
            HSC Business Studies Past Papers (2014–2025)
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">
            Every past paper links to the official NESA repository. Use the focus notes to
            understand what each year tested before you attempt it.
          </p>
        </div>
      </section>

      {/* Papers list */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-ink-900">
          Past Paper List: 2014–2025
        </h2>
        <p className="mt-3 text-sm text-ink-500">
          All papers are hosted by NESA. Click any year to open the official NESA past papers
          page where PDFs are available for free download.
        </p>
        <div className="mt-8 divide-y divide-border">
          {papers.map((p) => (
            <div key={p.year} className="flex flex-col gap-2 py-5 sm:flex-row sm:items-start sm:gap-6">
              <div className="shrink-0">
                <a
                  href={NESA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-bold text-brand-700 hover:bg-brand-100"
                >
                  {p.year} Paper →
                </a>
              </div>
              <p className="text-sm leading-relaxed text-ink-600">{p.focus}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-ink-400">
          All papers are copyright NSW Education Standards Authority (NESA). Links open the
          official NESA past papers page. PDFs are free to download.
        </p>
      </section>

      {/* How to use section */}
      <section className="bg-surface-sunken">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-ink-900">
            How to Use Past Papers Effectively
          </h2>
          <div className="mt-6 space-y-6 text-sm leading-relaxed text-ink-700">
            <p>
              Past papers are the most valuable revision resource you have — but only if you
              use them correctly. Most students use past papers passively: they read a question,
              think &ldquo;I know this,&rdquo; glance at the marking guidelines, and move on. That
              approach teaches you almost nothing. The following method is what we use at Acumen
              with every student, and it is what produces Band 6 results.
            </p>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink-900">
                Step 1: Attempt under exam conditions — always
              </h3>
              <p className="mt-2">
                Set a timer. Put your notes away. Write your response by hand, because that is
                how you will sit the actual exam. The goal of a past paper is not to see what
                the question asked — it is to practise producing a high-quality response under
                pressure. Students who attempt past papers with their notes open are training
                themselves to perform with resources they will not have on exam day.
              </p>
              <p className="mt-2">
                For the full paper, allow yourself the same time as the real exam: 3 hours for
                Section II and Section III combined. If you are doing targeted topic practice,
                allocate time proportional to marks — approximately 1.5 minutes per mark for
                short answers and 25–30 minutes for a 20-mark extended response.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink-900">
                Step 2: Mark against the official marking guidelines
              </h3>
              <p className="mt-2">
                NESA publishes marking guidelines for every past paper alongside the exam.
                After you attempt a response, compare your answer to the highest-band descriptor.
                Ask yourself: what specific knowledge, analysis, or evaluation is present in the
                Band 6 sample that is absent from my response? That gap is your revision priority.
              </p>
              <p className="mt-2">
                Be honest. It is tempting to award yourself marks for responses that are
                &ldquo;close enough.&rdquo; Markers are not generous with partial credit — if
                the business example you used was too vague or you described when asked to
                evaluate, those marks are lost. Accuracy in self-assessment directly predicts
                improvement.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink-900">
                Step 3: Rewrite the paragraph that missed marks — within 24 hours
              </h3>
              <p className="mt-2">
                The most powerful revision habit is immediate rewriting. When you identify a
                paragraph that lost marks, rewrite it correctly within 24 hours of receiving
                feedback. Do not just read the model answer — write your own improved version.
                The act of writing consolidates the correction. Students who rewrite show
                dramatically faster improvement than those who only read feedback.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink-900">
                Step 4: Track which topics and question types you miss
              </h3>
              <p className="mt-2">
                Keep a simple log: topic, question type (explain / analyse / evaluate), marks
                awarded vs marks available. After five to six past papers, patterns will emerge.
                You might find you consistently lose marks on Finance short answers, or that
                your extended responses on Human Resources are weaker than Operations. That
                data tells you where to direct extra preparation time — not your gut feeling.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink-900">
                Step 5: Use older papers for content practice, recent papers for exam simulation
              </h3>
              <p className="mt-2">
                Papers from 2014–2018 are ideal for drilling specific topic knowledge and
                practising the mechanics of different question types. Papers from 2022–2025
                better reflect the current exam style, difficulty, and emphasis — use these
                for full exam simulations in the final four to six weeks before your HSC.
                The 2020 paper, which was modified due to COVID-19, is still useful for content
                practice but should not be your primary source for predicting exam structure.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink-900">
                A word on marking guidelines
              </h3>
              <p className="mt-2">
                NESA marking guidelines are not model answers — they are descriptors of what
                a response at each band level demonstrates. A Band 6 descriptor might say
                &ldquo;demonstrates comprehensive knowledge and understanding with detailed
                analysis and well-supported evaluation.&rdquo; That tells you what to achieve,
                not how to write every sentence. Use the guidelines to audit your own responses,
                but build your essay technique separately through the structure and approach
                covered in our{" "}
                <Link href="/notes/band-6-essay" className="text-brand-600 underline hover:text-brand-700">
                  Band 6 essay guide
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What each section tests */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-ink-900">
          What Each Section of the HSC Paper Tests
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface-raised p-6 shadow-xs">
            <h3 className="font-display text-lg font-semibold text-ink-900">
              Section I — Multiple Choice (20 marks)
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-500">
              20 questions at 1 mark each. Tests breadth of syllabus knowledge. Time pressure
              is low but traps are common — many questions include a plausible wrong answer
              designed to catch students who misread the question. Approach: eliminate the
              clearly wrong options first.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface-raised p-6 shadow-xs">
            <h3 className="font-display text-lg font-semibold text-ink-900">
              Section II — Short Answer (40 marks)
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-500">
              Structured questions across all four topics (Operations, Marketing, Finance, Human
              Resources). Marks range from 2 to 8 per question. Requires precise, syllabus-aligned
              responses with business examples. No essay structure — answer directly and concisely.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface-raised p-6 shadow-xs">
            <h3 className="font-display text-lg font-semibold text-ink-900">
              Section III — Extended Response (40 marks)
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-500">
              Two 20-mark essay questions, each from a different topic. Marked holistically
              using a rubric. This is where Band 6 is won or lost. Full essay structure
              (thesis → body → evaluation → conclusion) is required. Allow 25–30 minutes per
              question.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-800">
        <div className="mx-auto max-w-xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white">
            Want past paper walkthroughs?
          </h2>
          <p className="mt-3 text-brand-100/70">
            We work through past papers in every lesson — marking your responses live against
            the NESA rubric so you know exactly what to fix before exam day.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-800 hover:bg-brand-50"
          >
            Book a free lesson →
          </Link>
        </div>
      </section>
    </>
  );
}
