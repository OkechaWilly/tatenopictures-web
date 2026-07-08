import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Statement from "@/components/Statement";
import PhotographyFeature from "@/components/PhotographyFeature";
import AcademyTeaser from "@/components/sections/AcademyTeaser";
import ClientStrip from "@/components/sections/ClientStrip";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Work />
      <Statement />
      <PhotographyFeature />
      <AcademyTeaser />
      <ClientStrip />
      <Contact />
    </div>
  );
}