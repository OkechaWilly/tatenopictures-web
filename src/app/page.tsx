// src/app/page.tsx
import Hero from "@/components/Hero";
import HeroGrid from "@/components/HeroGrid";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Top hero section */}
      <Hero />

      {/* Grid showcase section */}
      <section className="flex-1">
        <HeroGrid />
      </section>
    </main>
  );
}
