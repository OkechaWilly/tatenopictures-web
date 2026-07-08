'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const slides = [
  {
    image: '/images/directing-still.jpg',
    title: 'Directing Still',
  },
  {
    image: '/images/cinema-still.jpg',
    title: 'Cinema Still',
  },
  {
    image: '/images/photo-still.jpg',
    title: 'Photo Still',
  },
  {
    image: '/images/editing-still.jpg',
    title: 'Editing Still',
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, 100]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timecode, setTimecode] = useState('00:00:00:00');

  // Slide rotation (every 4 seconds)
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(slideTimer);
  }, []);

  // Cinematic Timecode Generator
  useEffect(() => {
    let frame = 0;
    let sec = 0;
    let min = 0;
    let hr = 0;

    const timecodeTimer = setInterval(() => {
      frame += 1;
      if (frame >= 24) {
        frame = 0;
        sec += 1;
      }
      if (sec >= 60) {
        sec = 0;
        min += 1;
      }
      if (min >= 60) {
        min = 0;
        hr += 1;
      }

      const pad = (num: number) => num.toString().padStart(2, '0');
      setTimecode(`${pad(hr)}:${pad(min)}:${pad(sec)}:${pad(frame)}`);
    }, 1000 / 24); // 24 FPS ticker

    return () => clearInterval(timecodeTimer);
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative w-full h-screen overflow-hidden bg-[#060608]">
      {/* Fallback Slideshow with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: parallaxY }}>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              priority
              sizes="100vw"
              className="object-cover brightness-[0.45] saturate-[0.85]"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Cinematic Vignette Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none overlay-full" />

      {/* Large Center Branding (Fades out as we scroll) */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-6 relative w-24 h-36 md:w-28 md:h-44">
            <Image
              src="/images/tateno-pics-logo-w.png"
              alt="Tateno Pictures Logo"
              fill
              sizes="(max-width: 768px) 96px, 112px"
              className="object-contain filter brightness-95 opacity-80"
              priority
            />
          </div>
          <h1 className="text-[10vw] font-serif font-light tracking-[0.25em] text-[#F0EBE3] leading-none mb-4">
            TATENO
          </h1>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-[var(--gold)] font-mono">
            Cinematic Production Studio & Academy
          </p>
        </motion.div>
      </div>

      {/* TOP RIGHT: Rotating Frame Counter / Timecode Info */}
      <div className="absolute top-28 right-6 md:right-12 z-25 pointer-events-none font-mono flex flex-col items-end">
        <span className="text-[9px] text-[var(--gold)] tracking-[0.2em] uppercase mb-0.5">REC 🔴</span>
        <span className="text-[12px] md:text-sm text-[#F0EBE3] tracking-widest font-medium opacity-85">
          {timecode}
        </span>
        <div className="flex gap-2 text-[8px] text-[var(--text-secondary)] tracking-wider uppercase mt-1">
          <span>24 FPS</span>
          <span>•</span>
          <span>SEQ 00{currentSlide + 1}</span>
        </div>
      </div>

      {/* BOTTOM LEFT: Custom thin line info */}
      <div className="absolute bottom-10 left-6 md:left-12 z-25 pointer-events-none font-mono flex flex-col gap-1">
        <div className="w-16 h-[1px] bg-[var(--gold)] opacity-50 mb-1" />
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-[#F0EBE3]/70">
          TATENO PICTURES — KAMPALA
        </span>
        <span className="text-[7px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
          LAT: 0.3476° N · LON: 32.5825° E
        </span>
      </div>

      {/* BOTTOM RIGHT: Scroll Indicator (Single vertical line with slide-down animation) */}
      <div className="absolute bottom-10 right-6 md:right-12 z-25 flex flex-col items-center">
        <div className="relative w-[1px] h-16 bg-white/10 overflow-hidden">
          <motion.div
            animate={{
              y: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
