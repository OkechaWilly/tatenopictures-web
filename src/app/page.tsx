import Hero from "@/components/Hero";
import HeroGrid from "@/components/HeroGrid";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <HeroGrid />
      {/* Future sections: Academy detail, About, Contact CTA */}
    </main>
  );
}
