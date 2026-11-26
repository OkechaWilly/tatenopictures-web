'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[var(--paper)] px-5 pb-16 pt-32 sm:px-8 md:pt-40 lg:px-14">
      <div className="mx-auto grid max-w-[1500px] items-center gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, ease: [0.2,0.7,0.2,1] }} className="relative z-10">
          <span className="eyebrow mb-7">Independent production · Kampala, Uganda</span>
          <h1 className="max-w-3xl text-[clamp(3.6rem,7.5vw,7.4rem)] font-medium leading-[.91] tracking-[-.075em] text-[var(--ink)]">
            Stories,
            <br />
            <span className="font-semibold tracking-[-.075em] text-[var(--ink)]">shaped with</span>
            <br />
            intent.
          </h1>
          <p className="mt-8 max-w-lg text-base leading-8 text-[var(--muted)] sm:text-lg">
            We bring film, photography and post-production together to make visual work with a clear point of view — rooted in place, attentive to people and made with care.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/work" className="btn-primary">Explore selected work</Link>
            <Link href="/#contact" className="btn-outline">Start a project</Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .12 }} className="relative">
          <div className="relative aspect-[.92] overflow-hidden bg-[#D8D5CC] sm:aspect-[1.12] lg:aspect-[.92]">
            <Image src="/images/directing-still.jpg" alt="Tateno Pictures at work on a production set" fill priority sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
