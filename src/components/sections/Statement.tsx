'use client';

import { motion } from 'framer-motion';

const capabilities = [
  { number: '01', title: 'Film & moving image', detail: 'Documentary, narrative, music and commissioned productions.' },
  { number: '02', title: 'Cinematography', detail: 'Visual direction, camera and lighting shaped around the story.' },
  { number: '03', title: 'Photography', detail: 'People, places, events and considered visual records.' },
  { number: '04', title: 'Post-production', detail: 'Editing, colour grading and finishing for a coherent final work.' },
];

export default function Statement() {
  return (
    <section id="manifesto" className="bg-[var(--ink)] px-5 py-20 text-[var(--paper-bright)] sm:px-8 md:py-28 lg:px-14">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-24 lg:pb-16">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="eyebrow mb-6 text-[#D98A6C]">03 / The studio point of view</span>
            <h2 className="max-w-4xl text-[clamp(2.8rem,6.4vw,6.2rem)] font-medium leading-[.98] tracking-[-.07em]">
              The way a story is seen changes <span className="font-serif font-normal italic text-[#D98A6C]">the way it is felt.</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .1 }} className="flex flex-col justify-end">
            <p className="max-w-xl text-sm leading-8 text-white/65 md:text-base">
              Based in Kampala, Tateno Pictures is an independent production studio working across film, photography and post-production. We pay attention to the people, places and details within a story — then bring the right creative and technical craft to shape how it reaches an audience.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-8 text-white/65 md:text-base">
              Our work begins with listening, develops through collaboration and is carried carefully through to the final frame.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, index) => (
            <motion.article key={item.number} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .45, delay: index * .06 }} className="border-b border-white/15 py-7 sm:pr-7 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
              <span className="font-mono text-xs text-[#D98A6C]">{item.number}</span>
              <h3 className="mt-6 text-lg font-semibold tracking-[-.035em] text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/55">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
