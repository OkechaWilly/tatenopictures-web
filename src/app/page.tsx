import Hero from "@/components/Hero";
import Work from "@/components/sections/Work";
import PhotographyFeature from "@/components/sections/PhotographyFeature";
import Statement from "@/components/sections/Statement";
import AcademyTeaser from "@/components/sections/AcademyTeaser";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="scroll-smooth bg-[#060608]">
      <Hero />
      <Work limit={4} />
      <PhotographyFeature limit={6} />
      <Statement />
      <AcademyTeaser />
      <Contact />
    </main>
  );
}
