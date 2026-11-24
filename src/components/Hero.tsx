'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[var(--paper)] px-5 pb-12 pt-32 sm:px-8 md:pt-40 lg:px-14">
      <div className="mx-auto grid max-w-[1500px] items-center gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, ease: [0.2,0.7,0.2,1] }} className="relative z-10">
          <span className="eyebrow mb-7">Independent production studio · Kampala, Uganda</span>
          <h1 className="max-w-3xl text-[clamp(3.6rem,7.5vw,7.4rem)] font-medium leading-[.91] tracking-[-.075em] text-[var(--ink)]">
            We make
            <br />
            <span className="font-serif font-normal italic tracking-[-.045em] text-[var(--accent)]">moving images</span>
            <br />
            that move people.
          </h1>
          <p className="mt-8 max-w-lg text-base leading-8 text-[var(--muted)] sm:text-lg">
            Film, photography and post-production for stories, people and organisations with something to say.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/work" className="btn-primary">Explore selected work <span aria-hidden="true">↗</span></Link>
            <Link href="/#contact" className="btn-outline">Start a project</Link>
          </div>
          <div className="mt-14 flex items-center gap-4 border-t border-[var(--line)] pt-4 text-[10px] font-medium uppercase tracking-[.14em] text-[var(--muted)]">
            <span>Film</span><span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
            <span>Photography</span><span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
            <span>Post-production</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .12 }} className="relative">
          <div className="relative aspect-[.92] overflow-hidden bg-[#D8D5CC] sm:aspect-[1.12] lg:aspect-[.92]">
            <Image src="/images/directing-still.jpg" alt="Tateno Pictures at work on a production set" fill priority sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover" />
          </div>
          <div className="mt-3 flex items-start justify-between gap-4 text-[10px] uppercase tracking-[.12em] text-[var(--muted)]">
            <span>Stories take shape on set.</span>
            <span className="text-right">01 / Tateno Pictures</span>
          </div>
          <div className="absolute -bottom-7 -left-5 hidden h-24 w-24 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--paper)] text-center font-mono text-[9px] uppercase leading-4 tracking-[.12em] text-[var(--accent)] sm:flex">
            Made<br/>with intent
          </div>
        </motion.div>
      </div>
      <div className="mx-auto mt-20 max-w-[1500px] border-t border-[var(--line)] pt-4 text-[10px] uppercase tracking-[.14em] text-[var(--muted)]">
        <div className="flex flex-wrap justify-between gap-3"><span>Independent by nature. Collaborative by design.</span><span>Scroll to explore ↓</span></div>
      </div>
    </section>
  );
}
