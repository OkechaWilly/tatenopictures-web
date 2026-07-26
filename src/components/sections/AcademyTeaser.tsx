'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AcademyTeaser() {
  return (
    <section id="academy" className="bg-[#060608] section-pad page-pad border-t border-[rgba(201,168,76,0.05)] relative overflow-hidden">
      {/* Subtle light glows */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-[rgba(201,168,76,0.02)] rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Visual Showcase (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative h-[24rem] sm:h-[30rem] w-full rounded overflow-hidden border border-[rgba(201,168,76,0.1)]"
          >
            <Image
              src="/images/directing-still.jpg"
              alt="Film Academy Training"
              fill
              className="object-cover filter brightness-[0.7] saturate-[0.85]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Dark gradient vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060608]/80 to-transparent" />
            
            {/* Floating indicator */}
            <div className="absolute top-6 left-6 px-3.5 py-1.5 glass rounded flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
              <span className="text-[9px] font-mono text-[#F0EBE3] uppercase tracking-widest">Live Workshops</span>
            </div>
          </motion.div>

          {/* Copy and CTA (Right Column) */}
          <div className="lg:col-span-6">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="label-gold mb-3 inline-block"
            >
              Tateno Academy
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl font-serif font-light text-[#F0EBE3] tracking-tight leading-tight mb-6"
            >
              Nurturing the Next Generation of <span className="italic text-[#C9A84C]">Filmmakers</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#8C867F] font-sans font-light text-base leading-relaxed mb-8"
            >
              Learn industry-standard visual tools and techniques directly from active industry directors, cinematographers, and colorists. From camera operations to DaVinci Resolve color grading, our masterclasses are designed to build professional-grade skillsets.
            </motion.p>

            {/* List features */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 mb-10 text-xs font-mono text-[#8C867F]"
            >
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                Cinematography & Lighting Masterclass
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                Professional DaVinci Resolve Color Grading
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                Directing & Visual Narratives Workshops
              </li>
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href="/academy" className="btn-gold">
                Explore Academy & Programs
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
