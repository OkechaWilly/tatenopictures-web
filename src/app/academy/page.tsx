import Link from 'next/link';
import Image from 'next/image';

const learningAreas = [
  ['01', 'Graphic design', 'Visual communication, creative tools and turning ideas into clear designs.'],
  ['02', 'Camera work', 'Camera operation, framing, composition and visual storytelling.'],
  ['03', 'Photography', 'Observing light, capturing moments and making thoughtful images.'],
  ['04', 'Video editing', 'Organising footage, shaping a story and preparing work for delivery.'],
];

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-[var(--paper)] pb-20 pt-28 text-[var(--ink)]">
      <section className="px-5 py-16 sm:px-8 md:py-24 lg:px-14">
        <div className="mx-auto grid max-w-[1500px] items-end gap-12 lg:grid-cols-[1fr_.8fr]">
          <div>
            <span className="eyebrow mb-6">Community programme · Since 2023</span>
            <h1 className="display-xl max-w-4xl">The next generation of <span className="font-semibold text-[var(--accent)]">makers.</span></h1>
          </div>
          <p className="max-w-xl pb-2 text-base leading-8 text-[var(--muted)] md:text-lg">
            A practical creative learning programme where young people explore design, photography and film — and discover how those skills are used in the real world.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-[1500px]">
          <div className="relative aspect-[1.7] overflow-hidden bg-[#D5D1C7] md:aspect-[2.25]">
            <Image src="/images/directing-still.jpg" alt="Learning and collaboration during a production" fill priority sizes="100vw" className="object-cover" />
          </div>
          <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[.14em] text-[var(--muted)]"><span>Learn · Practise · Experience</span><span>Tateno Pictures Academy</span></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1500px] gap-10 px-5 py-20 sm:px-8 md:grid-cols-[.7fr_1.3fr] md:py-28 lg:px-14">
        <div><span className="eyebrow mb-4">01 / Why we do it</span><h2 className="display-md max-w-md">Creative skills should be within reach.</h2></div>
        <div className="max-w-3xl space-y-5 text-sm leading-8 text-[var(--muted)] md:text-base">
          <p>Since 2023, Tateno Pictures has worked with young people in the surrounding community, introducing them to practical skills in graphic design, camera work, photography and video editing.</p>
          <p>Learning goes beyond demonstrations. We encourage hands-on practice and, when opportunities arise, take learners into real production environments — including wedding assignments, music videos for local artists and other creative jobs.</p>
          <p>These experiences help young people see how a production comes together: preparation, teamwork, creative problem-solving and the responsibility of working on a real assignment.</p>
        </div>
      </section>

      <section className="bg-[#E9E6DE] px-5 py-20 sm:px-8 md:py-24 lg:px-14">
        <div className="mx-auto max-w-[1500px]">

          <h2 className="display-lg mb-12">A foundation in creative practice.</h2>
          <div className="grid border-l border-t border-[var(--line)] sm:grid-cols-2">
            {learningAreas.map(([number,title,description]) => (
              <article key={number} className="border-b border-r border-[var(--line)] p-7 md:p-10">
                <h3 className="mt-8 text-2xl font-semibold tracking-[-.05em]">{title}</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-[var(--muted)]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1500px] gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28 lg:px-14">
        <div><span className="eyebrow mb-4">03 / Beyond the classroom</span><h2 className="display-md">Experience is part of the learning.</h2></div>
        <div className="space-y-7">
          {[
            ['Learn the foundations','Build an understanding of tools, techniques and creative thinking.'],
            ['Practise by doing','Develop confidence through exercises, guided tasks and practical projects.'],
            ['Step into real productions','Where appropriate, observe and assist on live assignments with the studio.'],
          ].map(([title,description],index) => <article key={title} className="border-t border-[var(--line)] pt-5"><h3 className="mt-3 text-xl font-semibold tracking-[-.04em]">{title}</h3><p className="mt-2 text-sm leading-7 text-[var(--muted)]">{description}</p></article>)}
        </div>
      </section>

      <section className="mx-5 bg-[var(--ink)] px-7 py-14 text-white sm:mx-8 md:px-14 md:py-20 lg:mx-14">
        <div className="mx-auto flex max-w-[1300px] flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl"><span className="eyebrow mb-4 text-[#D98A6C]">Get involved</span><h2 className="text-4xl font-medium leading-[.98] tracking-[-.06em] md:text-6xl">Curious about learning with us?</h2><p className="mt-5 max-w-xl text-sm leading-7 text-white/65">Parents, guardians, young creatives and community partners can contact us to learn about current activities and opportunities.</p></div>
          <Link href="/#contact" className="btn-outline w-fit border-white/30 text-white hover:border-white hover:bg-white hover:text-[var(--ink)]">Contact the studio</Link>
        </div>
      </section>
    </main>
  );
}
