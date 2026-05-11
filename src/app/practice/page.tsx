import { PracticeClient } from "@/app/practice/PracticeClient";
import { QUIZ_BANK } from "@/lib/quiz-bank";
import type { Question, TopicKey } from "@/lib/quiz-types";

type TypeFilter = "all" | "mcq" | "short" | "extended";
type TopicFilter = TopicKey | "all";

const PREVIEW_COUNT = 5;
const TOPIC_FILTERS: TopicFilter[] = ["all", "operations", "marketing", "finance", "human_resources"];
const TYPE_FILTERS: TypeFilter[] = ["all", "mcq", "short", "extended"];

function filterKey(topic: TopicFilter, type: TypeFilter): string {
  return `${topic}:${type}`;
}

function matchesFilter(question: Question, topic: TopicFilter, type: TypeFilter): boolean {
  const topicMatch = topic === "all" || question.topic === topic || (question.topics?.includes(topic) ?? false);
  const typeMatch = type === "all" || question.type === type;
  return topicMatch && typeMatch;
}

function buildFilterCounts(): Record<string, number> {
  return Object.fromEntries(
    TOPIC_FILTERS.flatMap((topic) =>
      TYPE_FILTERS.map((type) => [
        filterKey(topic, type),
        QUIZ_BANK.filter((question) => matchesFilter(question, topic, type)).length,
      ])
    )
  );
}

function buildPreviewQuestions(): Question[] {
  const selected = new Map<string, Question>();

  for (const topic of TOPIC_FILTERS) {
    for (const type of TYPE_FILTERS) {
      const preview = QUIZ_BANK
        .filter((question) => matchesFilter(question, topic, type))
        .slice(0, PREVIEW_COUNT);

      for (const question of preview) {
        selected.set(question.id, question);
      }
    }
  }

  return [...selected.values()];
}

export default function PracticePage() {
  return (
    <PracticeClient
      filterCounts={buildFilterCounts()}
      initialQuestions={buildPreviewQuestions()}
      totalCount={QUIZ_BANK.length}
    />
  );
}
