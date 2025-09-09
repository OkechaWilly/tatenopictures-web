// src/app/page.tsx
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import HeroGrid from "@/components/HeroGrid";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Top hero section */}
      <Hero />

      {/* Featured work section */}
      <FeaturedWork />

      {/* Grid showcase section */}
      <section className="flex-1">
        <HeroGrid />
      </section>
    </main>
  );
}