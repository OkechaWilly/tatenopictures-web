import Hero from "@/components/Hero";
import Work from "@/components/sections/Work";
import PhotographyFeature from "@/components/sections/PhotographyFeature";
import Statement from "@/components/sections/Statement";
import StudioApproach from "@/components/sections/StudioApproach";
import AcademyTeaser from "@/components/sections/AcademyTeaser";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="scroll-smooth bg-[var(--paper)]">
      <Hero />
      <Work limit={4} />
      <PhotographyFeature limit={6} />
      <Statement />
      <StudioApproach />
      <AcademyTeaser />
      <Contact />
    </main>
  );
}
