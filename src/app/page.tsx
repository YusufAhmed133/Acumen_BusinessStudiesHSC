import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Topics } from "@/components/sections/Topics";
import { Practice } from "@/components/sections/Practice";
import { Pricing } from "@/components/sections/Pricing";
import { Reviews } from "@/components/sections/Reviews";
import { ResourcesTeaser } from "@/components/sections/ResourcesTeaser";
import { FaqSection } from "@/components/sections/FaqSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Topics />
      <Practice />
      <Pricing />
      <Reviews />
      <ResourcesTeaser />
      <FaqSection />
    </>
  );
}
