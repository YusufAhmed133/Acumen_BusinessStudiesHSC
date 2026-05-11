export const TOPICS_MAP = {
  operations: { label: "Operations", accent: "#1F6B40", tint: "#CFEAD9" },
  marketing:  { label: "Marketing",  accent: "#8A5200", tint: "#FBE6BD" },
  finance:    { label: "Finance",    accent: "#2A4F94", tint: "#CFDFF4" },
  human_resources: { label: "Human Resources", accent: "#923333", tint: "#F4CFCF" },
} as const;

export type TopicKey = keyof typeof TOPICS_MAP;

export type RichContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; caption?: string; headers?: string[]; rows: string[][] }
  | { type: "note"; text: string };

export type MarkingCriteriaBand = {
  marks: string;
  criteria: string[];
};

type QuestionBase = {
  id: string;
  topic: TopicKey;
  topics?: TopicKey[];
  type: "mcq" | "short" | "extended";
  marks: number;
  src: string;
  stem: string;
  stimulus?: RichContentBlock[];
  sourceRefs?: string[];
};

export type McqQuestion = {
  type: "mcq";
  options: string[];
  optionBlocks?: RichContentBlock[][];
  answer: number | number[];
  explain: string;
} & QuestionBase;

export type ShortQuestion = {
  type: "short" | "extended";
  criteria: string[];
  criteriaBands?: MarkingCriteriaBand[];
  sample: string;
  sampleBlocks?: RichContentBlock[];
} & QuestionBase;

export type Question = McqQuestion | ShortQuestion;
