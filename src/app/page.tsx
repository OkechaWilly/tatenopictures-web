// src/app/page.tsx
import Hero from "@/components/Hero";
import ScrollSection from "@/components/ScrollSection";
import Narrative from "@/components/sections/Narrative";
import Events from "@/components/sections/Events";
import Stills from "@/components/sections/Stills"; // ← FIXED THE TYPO: "sections" not "sectionns"
import Branded from "@/components/sections/Branded";
import Academy from "@/components/sections/Academy";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="scroll-smooth">
      {/* Hero Section with Tateno Pictures branding */}
      <ScrollSection id="hero">
        <Hero />
      </ScrollSection>

      {/* Narrative Section - Films/Documentaries/Music Videos */}
      <ScrollSection id="narrative">
        <Narrative />
      </ScrollSection>

      {/* Events Section - Live Events/Weddings */}
      <ScrollSection id="events">
        <Events />
      </ScrollSection>

      {/* Stills Section - Photography */}
      <ScrollSection id="stills">
        <Stills />
      </ScrollSection>

      {/* Branded Section - Graphics/Motion/Commercials */}
      <ScrollSection id="branded">
        <Branded />
      </ScrollSection>

      {/* Academy Section - Training Programs */}
      <ScrollSection id="academy">
        <Academy />
      </ScrollSection>

      {/* Contact Section - Team & Business Inquiries */}
      <ScrollSection id="contact">
        <Contact />
      </ScrollSection>
    </main>
  );
}