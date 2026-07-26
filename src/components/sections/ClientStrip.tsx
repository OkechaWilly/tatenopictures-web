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
  'Crown Jewelry',
];

export default function ClientStrip() {
  return (
    <section className="bg-[#0D0C0F] border-y border-[rgba(201,168,76,0.08)] py-10 relative overflow-hidden">
      {/* Edge gradient masks for smooth fade in/out */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#0D0C0F] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#0D0C0F] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="w-full overflow-hidden">
          <div className="ticker-track flex items-center gap-16 md:gap-24">
            
            {/* First sequence */}
            {clientBrands.map((brand, idx) => (
              <span
                key={`b1-${idx}`}
                className="text-xs md:text-sm font-mono font-medium tracking-[0.3em] uppercase text-[#4A4540] hover:text-[#C9A84C] transition-colors duration-300 select-none whitespace-nowrap"
              >
                {brand}
              </span>
            ))}
            
            {/* Second sequence for seamless loop */}
            {clientBrands.map((brand, idx) => (
              <span
                key={`b2-${idx}`}
                className="text-xs md:text-sm font-mono font-medium tracking-[0.3em] uppercase text-[#4A4540] hover:text-[#C9A84C] transition-colors duration-300 select-none whitespace-nowrap"
              >
                {brand}
              </span>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
