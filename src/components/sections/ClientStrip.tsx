'use client';

import { motion } from 'framer-motion';

const clientBrands = [
  'Nexus Tech',
  'Peak Outdoors',
  'Aura Fashion',
  'Luxe Hotels',
  'Oasis Drinks',
  'Apex Athletics',
  'Vanguard Auto',
  'Crown Jewelry'
];

export default function ClientStrip() {
  return (
    <section className="w-full bg-[#060608] border-y border-[rgba(201,168,76,0.06)] py-12 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#060608] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#060608] to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto flex items-center">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 35,
              ease: 'linear',
            },
          }}
          className="flex gap-20 w-max items-center font-mono text-[10px] tracking-[0.3em] uppercase text-[#4A4540]"
        >
          {/* First loop of brands */}
          {clientBrands.map((brand, idx) => (
            <span
              key={`brand-1-${idx}`}
              className="hover:text-[var(--gold)] transition-colors duration-300 select-none cursor-default"
            >
              {brand}
            </span>
          ))}
          {/* Second loop (duplicated for seamless scrolling) */}
          {clientBrands.map((brand, idx) => (
            <span
              key={`brand-2-${idx}`}
              className="hover:text-[var(--gold)] transition-colors duration-300 select-none cursor-default"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
