export const TOPICS_MAP = {
  operations: { label: "Operations", accent: "#1F6B40", tint: "#CFEAD9" },
  marketing:  { label: "Marketing",  accent: "#A66E12", tint: "#FBE6BD" },
  finance:    { label: "Finance",    accent: "#2A4F94", tint: "#CFDFF4" },
  human_resources: { label: "Human Resources", accent: "#923333", tint: "#F4CFCF" },
} as const;

export type TopicKey = keyof typeof TOPICS_MAP;

export type McqQuestion = {
  id: string; topic: TopicKey; type: "mcq"; marks: number; src: string;
  stem: string; options: string[]; answer: number; explain: string;
};

export type ShortQuestion = {
  id: string; topic: TopicKey; type: "short" | "extended"; marks: number; src: string;
  stem: string; criteria: string[]; sample: string;
};

export type Question = McqQuestion | ShortQuestion;
