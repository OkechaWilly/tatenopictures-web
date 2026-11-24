'use client';

import Link from 'next/link';

const learningAreas = [
  {
    number: '01',
    title: 'Graphic Design',
    description:
      'Build visual communication skills, explore creative tools and learn how to turn ideas into clear, engaging designs.',
  },
  {
    number: '02',
    title: 'Camera Work',
    description:
      'Understand camera operation, framing, composition and the practical decisions that shape a strong visual story.',
  },
  {
    number: '03',
    title: 'Photography',
    description:
      'Learn to observe light, capture meaningful moments and make thoughtful images in both guided and real-world settings.',
  },
  {
    number: '04',
    title: 'Video Editing',
    description:
      'Develop editing skills, organise footage, shape a story and understand the process of taking a project towards delivery.',
  },
];

const experienceSteps = [
  {
    number: '01',
    title: 'Learn the foundations',
    description:
      'Young creatives are introduced to the tools, principles and creative thinking behind each discipline.',
  },
  {
    number: '02',
    title: 'Practise by doing',
    description:
      'Skills are developed through practical exercises, guided assignments and opportunities to work with real equipment.',
  },
  {
    number: '03',
    title: 'Experience the field',
    description:
      'Where opportunities allow, learners accompany the team on live productions and observe or assist with real assignments.',
  },
];

export default function AcademyPage() {
  return (
    <main className="min-h-screen w-full bg-[#060608] pb-24 text-[#F0EBE3]">
      <div className="h-24" />

      <section className="relative isolate overflow-hidden border-b border-[rgba(201,168,76,0.1)] bg-gradient-to-b from-[#0A090D] to-[#060608] px-6 py-24 md:py-36">
        <div className="pointer-events-none absolute left-1/4 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-[rgba(201,168,76,0.035)] blur-[130px]" />
        <div className="mx-auto flex max-w-[1200px] flex-col items-center text-center">
          <span className="label-gold mb-6 block">Tateno Film Academy · Community Programme</span>
          <h1 className="display-lg mb-7 uppercase leading-[0.98]">
            Skills for the
            <br />
            <span className="font-serif font-light italic lowercase text-[var(--gold)]">
              next generation
            </span>
          </h1>
          <p className="max-w-2xl text-base font-light leading-relaxed text-[var(--text-secondary)] md:text-lg">
            A practical creative learning programme helping young people discover their
            potential in visual storytelling, digital creativity and film production.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <span className="border border-[rgba(201,168,76,0.25)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--gold)]">
              Learning together since 2023
            </span>
            <span className="border border-white/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-secondary)]">
              Learn · Practise · Experience
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:py-28">
        <div>
          <span className="label-gold mb-4 block">Why the Academy exists</span>
          <h2 className="font-serif text-3xl font-light leading-tight text-[#F0EBE3] md:text-4xl">
            Creative skills can open doors.
          </h2>
        </div>
        <div className="space-y-5 text-sm font-light leading-8 text-[var(--text-secondary)] md:text-base">
          <p>
            Tateno Film Academy grew from our desire to make creative knowledge and
            practical skills more accessible to young people in the community. Since
            2023, we have worked with a number of young learners, introducing them to
            different areas of design, photography and film production.
          </p>
          <p>
            We believe learning is strongest when it moves beyond theory. Alongside
            guided training, learners get opportunities to see how creative work
            happens in practice and, where appropriate, gain field experience through
            real productions.
          </p>
          <p>
            The aim is to build confidence, encourage creative thinking and help
            learners begin developing skills they can continue to grow into meaningful
            opportunities.
          </p>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#09080B] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 max-w-2xl">
            <span className="label-gold mb-4 block">What learners explore</span>
            <h2 className="font-serif text-3xl font-light text-[#F0EBE3] md:text-4xl">
              A foundation in creative practice.
            </h2>
            <p className="mt-4 text-sm font-light leading-7 text-[var(--text-secondary)]">
              The programme introduces learners to a range of connected creative
              disciplines. The specific focus can vary with the learning activity and
              available production opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {learningAreas.map((area) => (
              <article key={area.number} className="bg-[#09080B] p-7 md:p-10">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--gold)]">
                  {area.number}
                </span>
                <h3 className="mt-6 font-serif text-2xl font-light text-[#F0EBE3]">
                  {area.title}
                </h3>
                <p className="mt-3 max-w-md text-sm font-light leading-7 text-[var(--text-secondary)]">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="mb-12 max-w-2xl">
          <span className="label-gold mb-4 block">Learning beyond the classroom</span>
          <h2 className="font-serif text-3xl font-light text-[#F0EBE3] md:text-4xl">
            Real creative work. Real-world exposure.
          </h2>
          <p className="mt-4 text-sm font-light leading-7 text-[var(--text-secondary)]">
            An important part of the Academy is helping learners understand how their
            skills are used outside a training environment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {experienceSteps.map((step) => (
            <article key={step.number} className="border-t border-[rgba(201,168,76,0.3)] pt-6">
              <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--gold)]">
                {step.number}
              </span>
              <h3 className="mt-5 font-serif text-xl font-light text-[#F0EBE3]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm font-light leading-7 text-[var(--text-secondary)]">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 border border-white/10 bg-[#0D0C0F] p-7 md:p-10">
          <span className="label-gold mb-3 block">On-location exposure</span>
          <p className="max-w-3xl text-sm font-light leading-7 text-[var(--text-secondary)] md:text-base">
            Learners have had opportunities to experience live creative assignments,
            including wedding productions and music videos for local artists, alongside
            other projects. These experiences offer a closer look at teamwork,
            preparation, production etiquette and the responsibilities involved in
            delivering work for real clients.
          </p>
        </div>
      </section>

      <section className="mx-6 border border-[rgba(201,168,76,0.18)] bg-gradient-to-br from-[#100E0B] to-[#09080B] px-7 py-14 text-center md:mx-auto md:max-w-[1200px] md:px-16 md:py-20">
        <span className="label-gold mb-4 block">Get in touch</span>
        <h2 className="mx-auto max-w-3xl font-serif text-3xl font-light leading-tight text-[#F0EBE3] md:text-4xl">
          Interested in learning with Tateno?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm font-light leading-7 text-[var(--text-secondary)]">
          Parents, guardians, young creatives and community partners are welcome to
          contact us to learn more about the programme, current activities and
          opportunities to get involved.
        </p>
        <Link href="/#contact" className="btn-gold mt-8 inline-flex">
          <span>Enquire about the Academy</span>
        </Link>
      </section>
    </main>
  );
}
