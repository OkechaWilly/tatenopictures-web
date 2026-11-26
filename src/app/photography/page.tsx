import PhotographyFeature from "@/components/sections/PhotographyFeature";

export const metadata = {
  title: "Photography",
  description: "Explore photography and still-image work from Tateno Pictures in Kampala, Uganda.",
};

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-[var(--paper)] pt-20">
      <section className="px-5 pb-10 pt-16 sm:px-8 md:pt-24 lg:px-14">
        <div className="mx-auto max-w-[1500px]">
          <h1 className="display-xl">The still <span className="font-semibold text-[var(--accent)]">image.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-[var(--muted)]">People, places, celebrations and details, seen through our lens.</p>
        </div>
      </section>
      <PhotographyFeature />
    </main>
  );
}
