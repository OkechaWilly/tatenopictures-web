'use client';

import { motion } from 'framer-motion';

const capabilities = [
  'Film & video production',
  'Cinematography',
  'Photography',
  'Editing & colour grading',
  'Creative visuals & design',
];

export default function Statement() {
  return (
    <section id="manifesto" className="relative overflow-hidden border-y border-white/5 bg-[#0B0A0D] px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-24">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <span className="label-gold mb-6 block">About the studio</span>
          <h2 className="max-w-4xl font-serif text-4xl font-light leading-[1.08] tracking-tight text-[#F0EBE3] sm:text-5xl md:text-7xl">
            A creative production studio for <span className="italic text-[#C9A84C]">stories with a point of view.</span>
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.12 }}>
          <p className="max-w-xl text-sm font-light leading-8 text-[#A9A39B] md:text-base">
            Tateno Pictures is an independent creative studio based in Kampala, Uganda. We bring together moving images, photography and post-production to help people and organisations communicate through thoughtful visual work.
          </p>
          <div className="mt-9 grid grid-cols-1 gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
            {capabilities.map((item, index) => (
              <div key={item} className="flex items-center gap-3 text-xs text-[#D0CBC3]">
                <span className="font-mono text-[10px] text-[#C9A84C]">0{index + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
