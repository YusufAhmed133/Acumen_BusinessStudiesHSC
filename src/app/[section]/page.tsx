import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "@/app/page";
import { ScrollToSection } from "@/components/ui/ScrollToSection";
import { getSectionRoute, SECTION_ROUTES, type SectionId } from "@/lib/section-routes";

const SITE_URL = "https://acumenhsc.com.au";

type SectionPageProps = {
  params: Promise<{ section: string }>;
};

export const dynamicParams = false;

export function generateStaticParams(): { section: SectionId }[] {
  return SECTION_ROUTES.map((route) => ({ section: route.sectionId }));
}

export async function generateMetadata({ params }: SectionPageProps): Promise<Metadata> {
  const { section } = await params;
  const route = getSectionRoute(section);
  if (!route) return {};

  return {
    title: {
      absolute: route.title,
    },
    description: route.description,
    alternates: {
      canonical: route.href,
    },
    openGraph: {
      title: route.title,
      description: route.description,
      url: `${SITE_URL}${route.href}`,
    },
  };
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { section } = await params;
  const route = getSectionRoute(section);

  if (!route) notFound();

  return (
    <>
      <HomePage />
      <ScrollToSection id={route.sectionId} />
    </>
  );
}
