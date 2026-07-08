'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function AcademyTeaser() {
  return (
    <section id="academy" className="relative w-full min-h-[70vh] flex items-center bg-[#060608] section-pad page-pad overflow-hidden">
      {/* Background Image: Moody training shoot still */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/directing-still.jpg"
          alt="Tateno Film Academy training shoot still"
          fill
          sizes="100vw"
          className="object-cover opacity-25 filter brightness-[0.35] saturate-[0.6]"
        />
        {/* Soft vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060608] via-[#060608]/85 to-[#060608]" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* Left Side: Large typography */}
        <div className="lg:col-span-6 flex flex-col gap-3">
          <span className="label-gold">Tateno Film Academy</span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="display-md text-[var(--text-primary)] leading-[1.05] tracking-tight uppercase"
          >
            The Tateno <br className="hidden md:inline" />
            <span className="italic text-[var(--gold)] font-light font-serif">Film Academy</span>
          </motion.h2>
        </div>

        {/* Right Side: Description and CTA */}
        <div className="lg:col-span-6 flex flex-col gap-8 items-start">
          <p className="text-[var(--text-secondary)] font-sans font-light text-base leading-relaxed max-w-xl">
            We are dedicated to training the next generation of African filmmakers. From cinematography and light design to DaVinci Resolve color grading, our hands-on workshops are taught directly by active industry professionals using high-end cinema equipment.
          </p>

          <Link href="/academy" className="btn-gold">
            <span>Explore Academy Courses</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
