'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#060608] border-t border-[rgba(201,168,76,0.08)] py-16 md:py-20 page-pad">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          
          {/* Column 1: Brand Identifier */}
          <div className="flex flex-col gap-3">
            <span className="text-[#F0EBE3] font-serif font-light text-2xl tracking-[0.2em]">
              TATENO PICTURES
            </span>
            <span className="text-[#8C867F] font-mono text-[10px] tracking-[0.2em] uppercase">
              Kampala, Uganda
            </span>
            <span className="text-[10px] text-[#4A4540] font-mono tracking-[0.15em] uppercase mt-4">
              © {currentYear} ALL RIGHTS RESERVED
            </span>
          </div>

          {/* Column 2: Studio Navigation */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[var(--gold)]">
              Sectors
            </span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <Link href="/#work" className="text-sm font-light text-[#8C867F] hover:text-[var(--gold)] transition-colors">
                Narrative
              </Link>
              <Link href="/#work" className="text-sm font-light text-[#8C867F] hover:text-[var(--gold)] transition-colors">
                Branded
              </Link>
              <Link href="/#work" className="text-sm font-light text-[#8C867F] hover:text-[var(--gold)] transition-colors">
                Events
              </Link>
              <Link href="/#work" className="text-sm font-light text-[#8C867F] hover:text-[var(--gold)] transition-colors">
                Stills
              </Link>
              <Link href="/academy" className="text-sm font-light text-[#8C867F] hover:text-[var(--gold)] transition-colors col-span-2 mt-2">
                Academy
              </Link>
            </div>
          </div>

          {/* Column 3: Contact & Connect */}
          <div className="flex flex-col gap-4 md:items-end">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[var(--gold)] md:text-right w-full">
              Connect
            </span>
            <div className="flex flex-col gap-2 md:items-end w-full">
              <a href="mailto:info@tatenopictures.com" className="text-sm font-light text-[#8C867F] hover:text-[var(--gold)] transition-colors">
                info@tatenopictures.com
              </a>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono tracking-widest text-[#8C867F] hover:text-[var(--gold)] uppercase transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://vimeo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono tracking-widest text-[#8C867F] hover:text-[var(--gold)] uppercase transition-colors"
                >
                  Vimeo
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono tracking-widest text-[#8C867F] hover:text-[var(--gold)] uppercase transition-colors"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Cinematic specs bottom rule */}
        <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.03)] flex flex-col sm:flex-row justify-between items-center gap-4 text-[8px] font-mono text-[#4A4540] uppercase tracking-[0.25em]">
          <span>Format: 2.39:1 anamorphic</span>
          <span>4K DIGITAL CINEMATOGRAPHY</span>
          <span>LAT: 0.3476° N · LON: 32.5825° E</span>
        </div>
      </div>
    </footer>
  );
}
