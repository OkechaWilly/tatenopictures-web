'use client';

import { motion } from 'framer-motion';

const capabilities = ['Film & video production', 'Cinematography', 'Photography', 'Editing & colour grading', 'Creative design'];

export default function Statement() {
  return (
    <section id="manifesto" className="bg-[var(--ink)] px-5 py-20 text-[var(--paper-bright)] sm:px-8 md:py-28 lg:px-14">
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-24">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="eyebrow mb-6 text-[#D98A6C]">03 / The studio</span>
          <h2 className="max-w-4xl text-[clamp(2.8rem,6.4vw,6.2rem)] font-medium leading-[.98] tracking-[-.07em]">
            We bring ideas to life through <span className="font-serif font-normal italic text-[#D98A6C]">images and sound.</span>
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .1 }} className="flex flex-col justify-end">
          <p className="max-w-xl text-sm leading-8 text-white/65 md:text-base">
            Tateno Pictures is an independent creative production studio based in Kampala, Uganda. We work across film, photography and post-production, collaborating with people and organisations to shape ideas into thoughtful visual work.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 border-t border-white/15 pt-6 sm:grid-cols-2">
            {capabilities.map((item, index) => <div key={item} className="flex gap-3 text-xs text-white/80"><span className="font-mono text-[#D98A6C]">0{index + 1}</span>{item}</div>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
