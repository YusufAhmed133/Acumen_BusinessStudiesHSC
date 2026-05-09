export { TOPICS_MAP } from "./quiz-types";
export type { TopicKey, McqQuestion, ShortQuestion, Question } from "./quiz-types";

export const QUIZ_TOTAL = 141;

import type { McqQuestion, ShortQuestion } from "./quiz-types";

export const QUIZ_TEASER: (McqQuestion | ShortQuestion)[] = [
  { id: "22m1", topic: "marketing", type: "mcq", marks: 1, src: "2022 HSC , Section I , Q1",
    stem: "What is an economic factor that could influence customer choice?",
    options: ["Perception", "Recession", "Regulation", "Subculture"],
    answer: 1, explain: "A recession is an economic factor reducing disposable income. Perception is psychological; regulation is legal; subculture is sociocultural." },

  { id: "22m2", topic: "hr", type: "mcq", marks: 1, src: "2022 HSC , Section I , Q2",
    stem: "Which of the following is a type of voluntary separation in the workplace?",
    options: ["Dismissal", "Layoff", "Resignation", "Retrenchment"],
    answer: 2, explain: "Resignation is the only voluntary separation — the employee chooses to leave. The other three are employer-initiated." },

  { id: "22m7", topic: "operations", type: "mcq", marks: 1, src: "2022 HSC , Section I , Q7",
    stem: "A large clothing manufacturer in NSW wants to reduce input costs. Which strategy would achieve this objective?",
    options: ["Increasing product variety", "Increasing employee training", "Implementing global sourcing", "Implementing sustainable packaging"],
    answer: 2, explain: "Global sourcing accesses lower-cost inputs from international suppliers, directly reducing input costs. Training and variety increase costs; sustainable packaging may raise them." },

  { id: "22m14", topic: "finance", type: "mcq", marks: 1, src: "2022 HSC , Section I , Q14",
    stem: "A private investment company accepts money from clients. The owner illegally uses this money for their own personal use. Which government body would take legal action against the owner of this company?",
    options: ["Australian Taxation Office", "Australian Securities Exchange", "Australian Prudential Regulation Authority", "Australian Securities and Investments Commission"],
    answer: 3, explain: "ASIC regulates investment companies and enforces laws against financial fraud such as misappropriation of client funds. APRA regulates banks/insurance; ASX operates the stock exchange." },

  { id: "22s21a", topic: "operations", type: "short", marks: 2, src: "2022 HSC , Section II , Q21(a)",
    stem: "Michael would like to open a new burger restaurant. Outline a performance objective relevant to this business.",
    criteria: ["Sketches in general terms a performance objective relevant to the business", "Identifies an objective for this business"],
    sample: "Dependability would be a key performance objective for this business as customers expect consistency. They want their burgers to be served in the same timeframe, be the same size, temperature and taste each time they purchase one." },
];
