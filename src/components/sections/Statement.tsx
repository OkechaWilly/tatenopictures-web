'use client';

import { motion } from 'framer-motion';

export default function Statement() {
  const stats = [
    { number: '8+', label: 'Years in Production' },
    { number: '200+', label: 'Projects Completed' },
    { number: '3', label: 'Countries Active' },
  ];

  return (
    <section id="manifesto" className="bg-[#060608] section-pad page-pad relative overflow-hidden">
      {/* Background Texture grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(201,168,76,0.02)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col justify-center min-h-[50vh]">
        
        {/* Decorative Golden Line */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '4rem' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="h-[1px] bg-[#C9A84C] mb-12"
        />

        {/* Studio Manifesto Statement */}
        <div className="mb-20 md:mb-28">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="label-gold mb-6"
          >
            Studio Manifesto
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-8xl font-serif font-light text-[#F0EBE3] tracking-tight leading-[1.05] max-w-5xl"
          >
            We don&apos;t just film.<br />
            <span className="italic text-[#C9A84C]">We build visual memory.</span>
          </motion.h3>
        </div>

        {/* Stat Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 border-t border-[rgba(201,168,76,0.08)] pt-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <span className="stat-number text-[#F0EBE3]">{stat.number}</span>
              <span className="text-xs font-mono text-[#8C867F] uppercase tracking-widest mt-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
