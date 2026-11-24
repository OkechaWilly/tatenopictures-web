'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const slides = [
  { src: '/images/directing-still.jpg', alt: 'A directing moment on set' },
  { src: '/images/cinema-still.jpg', alt: 'Camera setup during production' },
  { src: '/images/photo-still.jpg', alt: 'A photographic frame' },
  { src: '/images/editing-still.jpg', alt: 'Post-production workspace' },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative isolate flex min-h-[88svh] w-full items-end overflow-hidden bg-[#060608] md:min-h-screen">
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.025 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].src}
              alt={slides[currentSlide].alt}
              className="h-full w-full object-cover"
              fetchPriority={currentSlide === 0 ? 'high' : 'auto'}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[#060608]/85 via-[#060608]/35 to-[#060608]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-[#060608]/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-20 pt-36 sm:px-10 md:pb-28 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <span className="label-gold mb-6 block">Independent creative production · Kampala, Uganda</span>
          <h1 className="max-w-4xl font-serif text-5xl font-light leading-[0.98] tracking-tight text-[#F0EBE3] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            Film, photography
            <br />
            <span className="italic text-[#C9A84C]">& visual storytelling.</span>
          </h1>
          <p className="mt-7 max-w-xl text-sm font-light leading-7 text-[#D0CBC3] sm:text-base">
            We create films and images for people, brands and stories worth bringing to life.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/work" className="btn-gold">Explore our work</Link>
            <Link href="/#contact" className="inline-flex items-center gap-3 border border-white/25 px-6 py-3 text-xs uppercase tracking-[0.16em] text-white transition-colors hover:border-[#C9A84C] hover:text-[#C9A84C]">
              Start a conversation <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </motion.div>

        <div className="mt-16 flex items-center justify-between border-t border-white/20 pt-4 text-[9px] font-mono uppercase tracking-[0.2em] text-white/65 md:mt-24">
          <span>Stories in motion. Images that stay.</span>
          <span>{String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  );
}
