import { PRICING_FAQ_ANSWER } from "@/lib/pricing";

export type FaqItem = {
  q: string;
  a: string;
};

export const FAQS: FaqItem[] = [
  {
    q: "Is the trial really free?",
    a: "One full 1-hour lesson at no cost, no credit card required, and if it is not the right fit there is no obligation and we will not follow up.",
  },
  {
    q: "What's included in the price?",
    a: PRICING_FAQ_ANSWER,
  },
  {
    q: "Who teaches the lessons?",
    a: "All tutors are Band 6 graduates who have sat the HSC Business Studies exam and scored in the top band, so they know exactly what markers look for and how to close the gap between where a student is and where they need to be.",
  },
  {
    q: "What if my child has a question outside of class?",
    a: "We run a 24-hour question line by message where students can send through any concept, essay paragraph, or past paper question and receive a proper written response.",
  },
  {
    q: "Can a group of school friends join together?",
    a: "If two to four students from the same school want to learn together, we can arrange a dedicated session at a time that suits the group, so get in touch and we will sort out the details.",
  },
  {
    q: "What happens if my child misses a lesson?",
    a: "Cancellations with at least 24 hours notice are fully refunded or credited toward the next session, while cancellations inside 24 hours are charged in full, and every student who misses receives the full notes and worked solutions so they do not fall behind.",
  },
  {
    q: "Do your prices include GST?",
    // CROSS-REVIEW: Claude should verify this
    a: "Yes, all prices shown on this site are inclusive of GST.",
  },
];
