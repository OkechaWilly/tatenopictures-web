import Work from "@/components/sections/Work";

export const metadata = {
  title: "Film & Video",
  description: "Selected film, documentary, music video and event work from Tateno Pictures in Kampala, Uganda.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[var(--paper-bright)] pt-20">
      <section className="px-5 pb-10 pt-16 sm:px-8 md:pt-24 lg:px-14">
        <div className="mx-auto max-w-[1500px]">
          <span className="eyebrow mb-5">Tateno Pictures / Portfolio 01</span>
          <h1 className="display-xl max-w-5xl">Film & <span className="font-serif font-normal italic text-[var(--accent)]">video.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-[var(--muted)]">Selected moving-image work, productions and stories shaped with our collaborators.</p>
        </div>
      </section>
      <Work />
    </main>
  );
}
