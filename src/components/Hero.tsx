'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// High-quality stills available in the public/images directory
const fallbackSlides = [
  { src: '/images/directing-still.jpg', title: 'Directing Session' },
  { src: '/images/cinema-still.jpg', title: 'On Set Camera Setup' },
  { src: '/images/photo-still.jpg', title: 'Location Portrait' },
  { src: '/images/editing-still.jpg', title: 'Post Production' },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timecode, setTimecode] = useState('00:00:00:00');

  // Slide interval logic
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % fallbackSlides.length);
    }, 5000);

    return () => clearInterval(slideTimer);
  }, []);

  // Timecode simulation (ticks like a real edit timeline)
  useEffect(() => {
    let frames = 0;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    const timecodeTimer = setInterval(() => {
      frames++;
      if (frames >= 24) {
        frames = 0;
        seconds++;
        if (seconds >= 60) {
          seconds = 0;
          minutes++;
          if (minutes >= 60) {
            minutes = 0;
            hours = (hours + 1) % 24;
          }
        }
      }

      const format = (num: number) => num.toString().padStart(2, '0');
      setTimecode(`${format(hours)}:${format(minutes)}:${format(seconds)}:${format(frames)}`);
    }, 1000 / 24); // 24 FPS

    return () => clearInterval(timecodeTimer);
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-[#060608]">
      
      {/* Background Slideshow (Fades between rich production stills) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={fallbackSlides[currentSlide].src}
              alt={fallbackSlides[currentSlide].title}
              className="w-full h-full object-cover filter brightness-[0.7] saturate-[0.85]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dynamic radial gradient mask for immersive vignetting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#060608_100%)] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060608]/40 to-[#060608]" />
      </div>

      {/* Cinematic HUD Elements (Frame count, status) */}
      <div className="absolute inset-0 z-10 pointer-events-none p-8 md:p-12 flex flex-col justify-between">
        
        {/* Top bar HUD */}
        <div className="flex justify-between items-start w-full">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            <span className="text-[10px] font-mono text-[#8C867F] uppercase tracking-[0.25em]">REC</span>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-mono text-[#8C867F] uppercase tracking-[0.25em]">TC / {timecode}</span>
          </div>
        </div>

        {/* Bottom bar HUD */}
        <div className="flex justify-between items-end w-full">
          <div>
            <span className="text-[9px] font-mono text-[#4A4540] uppercase tracking-[0.25em]">FPS 24.00</span>
          </div>
          <div>
            <span className="text-[9px] font-mono text-[#4A4540] uppercase tracking-[0.25em]">UGANDA / 0.3476° N</span>
          </div>
        </div>

      </div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <span className="text-[10px] font-mono text-[#C9A84C] uppercase tracking-[0.35em] mb-6 block font-medium">
            Tateno Pictures Studio
          </span>
          
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-serif font-light text-[#F0EBE3] tracking-tight leading-[0.95] mb-8">
            Crafting <br />
            <span className="italic font-light text-[#C9A84C]">Cinematic</span> Stories
          </h1>
          
          <p className="text-sm md:text-base text-[#8C867F] font-sans font-light tracking-widest max-w-xl mx-auto leading-relaxed uppercase">
            From high-end film production to authentic documentary storytelling. We capture frames that linger in memory.
          </p>
        </motion.div>

        {/* Scroll CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-16 flex flex-col items-center gap-4 cursor-pointer"
          onClick={() => {
            document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[9px] font-mono text-[#8C867F] uppercase tracking-[0.3em]">
            Explore Work
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-[1px] h-12 bg-gradient-to-b from-[#C9A84C] to-transparent"
          />
        </motion.div>

      </div>

    </section>
  );
}
