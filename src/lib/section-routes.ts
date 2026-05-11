export type SectionRoute = {
  href: `/${string}`;
  label: string;
  sectionId: "syllabus" | "pricing" | "reviews" | "resources" | "faq" | "enquire";
  title: string;
  description: string;
};

export const SECTION_ROUTES = [
  {
    href: "/syllabus",
    label: "Syllabus",
    sectionId: "syllabus",
    title: "HSC Business Studies Syllabus | Acumen HSC",
    description: "Explore the HSC Business Studies syllabus topics covered by Acumen HSC tutoring.",
  },
  {
    href: "/pricing",
    label: "Pricing",
    sectionId: "pricing",
    title: "HSC Business Studies Tutoring Pricing | Acumen HSC",
    description: "View Acumen HSC small-group and private tutoring prices for HSC Business Studies.",
  },
  {
    href: "/reviews",
    label: "Reviews",
    sectionId: "reviews",
    title: "Student Reviews | Acumen HSC",
    description: "Read student reviews for Acumen HSC Business Studies tutoring.",
  },
  {
    href: "/resources",
    label: "Resources",
    sectionId: "resources",
    title: "HSC Business Studies Resources | Acumen HSC",
    description: "See Acumen HSC Business Studies study notes, practice resources, and past-paper support.",
  },
  {
    href: "/faq",
    label: "FAQ",
    sectionId: "faq",
    title: "FAQ | Acumen HSC",
    description: "Find answers about Acumen HSC Business Studies tutoring, lessons, pricing, and inclusions.",
  },
  {
    href: "/enquire",
    label: "Enquire",
    sectionId: "enquire",
    title: "Enquire | Acumen HSC",
    description: "Book a free trial lesson for Acumen HSC Business Studies tutoring.",
  },
] as const satisfies readonly SectionRoute[];

export type SectionId = (typeof SECTION_ROUTES)[number]["sectionId"];

export const SECTION_ROUTE_MAP: Record<SectionId, SectionRoute> = {
  syllabus: SECTION_ROUTES[0],
  pricing: SECTION_ROUTES[1],
  reviews: SECTION_ROUTES[2],
  resources: SECTION_ROUTES[3],
  faq: SECTION_ROUTES[4],
  enquire: SECTION_ROUTES[5],
};

export function getSectionRoute(section: string): SectionRoute | undefined {
  return SECTION_ROUTES.find((route) => route.sectionId === section);
}
