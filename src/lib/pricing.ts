export const SMALL_GROUP_MAX_STUDENTS = 4;
export const TERM_SESSION_COUNT = 10;
export const SMALL_GROUP_TERM_DISCOUNT_AUD = 40;
export const PRIVATE_TERM_DISCOUNT_AUD = 50;

export type PricingPlan = {
  id: "small-group" | "private";
  tag: string;
  tagBg: string;
  tagColor: string;
  sessionPriceAud: number;
  termPriceAud: number;
  sessionPrice: string;
  termPrice: string;
  termSave: string;
  sessionUnit: string;
  termSummary: string;
  schemaSessionName: string;
  schemaTermName: string;
  schemaSessionDescription: string;
  schemaTermDescription: string;
  termDiscountAud: number;
};

const formatAud = (amount: number) => `$${amount.toLocaleString("en-AU")}`;

function createPricingPlan(
  plan: Omit<PricingPlan, "termPriceAud" | "sessionPrice" | "termPrice" | "termSave" | "termSummary">
): PricingPlan {
  const termPriceAud = plan.sessionPriceAud * TERM_SESSION_COUNT - plan.termDiscountAud;

  return {
    ...plan,
    termPriceAud,
    sessionPrice: formatAud(plan.sessionPriceAud),
    termPrice: formatAud(termPriceAud),
    termSave: formatAud(plan.termDiscountAud),
    termSummary: `${TERM_SESSION_COUNT} weekly sessions upfront, ${formatAud(plan.termDiscountAud)} off.`,
  };
}

export const SMALL_GROUP_PLAN = createPricingPlan({
  id: "small-group",
  tag: `Small Group, Max ${SMALL_GROUP_MAX_STUDENTS} Students`,
  tagBg: "#F0FAF3",
  tagColor: "#1B6038",
  sessionPriceAud: 80,
  sessionUnit: "per weekly session",
  schemaSessionName: "HSC Business Studies Small Group Weekly Session Sydney",
  schemaTermName: "HSC Business Studies Small Group Term Enrolment Sydney",
  schemaSessionDescription:
    `Weekly small-group Business Studies session (max ${SMALL_GROUP_MAX_STUDENTS} students) in Sydney, marked against NESA criteria. Year 11 and 12.`,
  schemaTermDescription:
    `${TERM_SESSION_COUNT} weekly small-group Business Studies sessions with ${formatAud(SMALL_GROUP_TERM_DISCOUNT_AUD)} off, including weekly essay marking, Band 6 notes, past-paper bank, and 24-hour question line.`,
  termDiscountAud: SMALL_GROUP_TERM_DISCOUNT_AUD,
});

export const PRIVATE_PLAN = createPricingPlan({
  id: "private",
  tag: "Private 1:1",
  tagBg: "#F9F9F7",
  tagColor: "#3A3A3A",
  sessionPriceAud: 100,
  sessionUnit: "per weekly session",
  schemaSessionName: "HSC Business Studies Private 1:1 Weekly Session Sydney",
  schemaTermName: "HSC Business Studies Private 1:1 Term Enrolment Sydney",
  schemaSessionDescription:
    "Weekly private one-on-one Business Studies session in Sydney. Year 11 and 12.",
  schemaTermDescription:
    `${TERM_SESSION_COUNT} weekly private one-on-one Business Studies sessions with ${formatAud(PRIVATE_TERM_DISCOUNT_AUD)} off, including weekly essay marking, Band 6 notes, past-paper bank, and 24-hour question line.`,
  termDiscountAud: PRIVATE_TERM_DISCOUNT_AUD,
});

export const PRICING_PLANS = [SMALL_GROUP_PLAN, PRIVATE_PLAN] as const;

export const PRICING_FAQ_ANSWER =
  `Small group sessions (max ${SMALL_GROUP_MAX_STUDENTS} students) are ${SMALL_GROUP_PLAN.sessionPrice} per weekly session, or ${SMALL_GROUP_PLAN.termPrice} upfront for ${TERM_SESSION_COUNT} weekly sessions (${SMALL_GROUP_PLAN.termSave} off the full weekly total). Private 1:1 is ${PRIVATE_PLAN.sessionPrice} per weekly session, or ${PRIVATE_PLAN.termPrice} upfront for ${TERM_SESSION_COUNT} weekly sessions (${PRIVATE_PLAN.termSave} off the full weekly total). Both options include Band 6 topic notes, every HSC past paper from 2010 indexed by syllabus dot point, the 24-hour question line, and a full mock exam with a personalised report.`;
