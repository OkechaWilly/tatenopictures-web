'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimateNumber({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const totalMiliseconds = duration * 1000;
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="stat-number">
      {count}
      {suffix}
    </span>
  );
}

export default function Statement() {
  return (
    <section id="statement" className="w-full bg-[#060608] section-pad page-pad relative overflow-hidden">
      {/* Cinematic subtle grid backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(201,168,76,0.02)_1px,transparent_1px)] [background-size:32px_32px] opacity-60 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Manifesto Content */}
        <div className="mb-24 md:mb-32">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="label-gold block mb-6"
          >
            Our Manifesto
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-2"
          >
            <h2 className="display-lg text-[var(--text-primary)] leading-[0.95] tracking-tight uppercase">
              We don&apos;t just film.
            </h2>
            <h2 className="display-lg text-[var(--gold)] italic font-light leading-[0.95] tracking-tight pl-0 md:pl-20">
              We build visual memory.
            </h2>
          </motion.div>
        </div>

        {/* Golden Rule Separator */}
        <div className="gold-rule mb-20 opacity-30" />

        {/* Animate on Scroll Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3 border-l border-[rgba(201,168,76,0.1)] pl-6"
          >
            <div className="flex items-baseline">
              <AnimateNumber value={8} suffix="+" />
            </div>
            <span className="text-[10px] font-mono tracking-[0.25em] text-[var(--text-secondary)] uppercase">
              Years in Active Production
            </span>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3 border-l border-[rgba(201,168,76,0.1)] pl-6"
          >
            <div className="flex items-baseline">
              <AnimateNumber value={200} suffix="+" duration={2.5} />
            </div>
            <span className="text-[10px] font-mono tracking-[0.25em] text-[var(--text-secondary)] uppercase">
              Completed Visual Projects
            </span>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3 border-l border-[rgba(201,168,76,0.1)] pl-6"
          >
            <div className="flex items-baseline">
              <AnimateNumber value={3} suffix="" />
            </div>
            <span className="text-[10px] font-mono tracking-[0.25em] text-[var(--text-secondary)] uppercase">
              Active Production Countries
            </span>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
