// src/app/page.tsx
import Hero from "@/components/Hero";
import Work from "@/components/sections/Work";
import Statement from "@/components/sections/Statement";
import PhotographyFeature from "@/components/sections/PhotographyFeature";
import AcademyTeaser from "@/components/sections/AcademyTeaser";
import ClientStrip from "@/components/sections/ClientStrip";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="scroll-smooth bg-[#060608]">
      
      {/* Cinematic Intro Slideshow */}
      <Hero />

      {/* Unified Filterable Selected Works Portfolio Grid */}
      <Work />

      {/* Brand & Manifesto Statement */}
      <Statement />

      {/* CSS Column Masonry Photography Showcase */}
      <PhotographyFeature />

      {/* Client Brand Infinit Marquee */}
      <ClientStrip />

      {/* Academy & Mentorship Program Teaser */}
      <AcademyTeaser />

      {/* Business Contacts & Quote Modal Trigger */}
      <Contact />

    </main>
  );
}