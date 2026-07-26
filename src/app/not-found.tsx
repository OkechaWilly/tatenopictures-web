'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#060608] flex items-center justify-center px-6">
      {/* Decorative cinematic vignette overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none overlay-full" />
      
      {/* Subtle radial backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[rgba(201,168,76,0.03)] blur-[150px] pointer-events-none" />

      {/* Top Right Corner Detail: 404 Status */}
      <div className="absolute top-28 right-6 md:right-12 z-25 pointer-events-none font-mono flex flex-col items-end hidden md:flex">
        <span className="text-[9px] text-[var(--gold)] tracking-[0.2em] uppercase mb-0.5">STATUS 🔴</span>
        <span className="text-[12px] md:text-sm text-[#F0EBE3] tracking-widest font-medium opacity-85">
          ERROR_404
        </span>
        <div className="flex gap-2 text-[8px] text-[var(--text-secondary)] tracking-wider uppercase mt-1">
          <span>SEC 000</span>
          <span>•</span>
          <span>MISSING_REEL</span>
        </div>
      </div>

      {/* Bottom Left Corner Detail: Location */}
      <div className="absolute bottom-10 left-6 md:left-12 z-25 pointer-events-none font-mono flex-col gap-1 hidden md:flex">
        <div className="w-16 h-[1px] bg-[var(--gold)] opacity-50 mb-1" />
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-[#F0EBE3]/70">
          TATENO PICTURES — KAMPALA
        </span>
        <span className="text-[7px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
          LAT: 0.3476° N · LON: 32.5825° E
        </span>
      </div>

      <div className="relative z-20 flex flex-col items-center text-center max-w-lg">
        {/* Minimal gold hairline rule */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.6, scaleX: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-12 h-[1px] bg-[var(--gold)] mb-6 origin-center" 
        />

        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="label-gold text-[9px] mb-3 block"
        >
          Scene Not Found
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-serif font-light tracking-[0.15em] text-[#F0EBE3] uppercase leading-tight mb-4"
        >
          404 CUT
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs md:text-sm text-[var(--text-secondary)] font-light leading-relaxed mb-8 max-w-sm"
        >
          The sequence or project still you are looking for has been trimmed from the final edit of the site.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <Link href="/" className="btn-outline font-mono text-[9px] tracking-widest uppercase">
            ← Return to Studio
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
