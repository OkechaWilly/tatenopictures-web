'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#060608] px-6 py-14 md:py-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_1fr_1fr] md:gap-8">
          <div className="flex flex-col gap-3">
            <Link href="/" className="w-fit font-serif text-2xl font-light tracking-[0.18em] text-[#F0EBE3] transition-colors hover:text-[#C9A84C]">
              TATENO PICTURES
            </Link>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C867F]">
              Independent creative production · Kampala, Uganda
            </span>
            <span className="mt-4 font-mono text-[9px] uppercase tracking-[0.15em] text-[#4A4540]">
              © {currentYear} Tateno Pictures
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]">
              Explore
            </span>
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-5 gap-y-3">
              <Link href="/work" className="text-sm font-light text-[#8C867F] transition-colors hover:text-[var(--gold)]">Film & Video</Link>
              <Link href="/photography" className="text-sm font-light text-[#8C867F] transition-colors hover:text-[var(--gold)]">Photography</Link>
              <Link href="/academy" className="text-sm font-light text-[#8C867F] transition-colors hover:text-[var(--gold)]">Academy</Link>
              <Link href="/#manifesto" className="text-sm font-light text-[#8C867F] transition-colors hover:text-[var(--gold)]">About the studio</Link>
              <Link href="/#contact" className="text-sm font-light text-[#8C867F] transition-colors hover:text-[var(--gold)]">Contact</Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <span className="w-full font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--gold)] md:text-right">
              What we do
            </span>
            <p className="max-w-xs text-sm font-light leading-7 text-[#8C867F] md:text-right">
              Film and video production, photography, cinematography, editing, colour grading and creative visual work.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/5 pt-6 font-mono text-[9px] uppercase tracking-[0.18em] text-[#4A4540] sm:flex-row sm:items-center sm:justify-between">
          <span>Film · Photography · Post-production</span>
          <span>Made in Uganda</span>
        </div>
      </div>
    </footer>
  );
}
