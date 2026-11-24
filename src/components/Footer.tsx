import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] px-5 py-12 text-[var(--paper-bright)] sm:px-8 md:py-16 lg:px-14">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-10 border-b border-white/15 pb-12 md:grid-cols-[1.3fr_.7fr_1fr] md:gap-16">
          <div>
            <Link href="/" aria-label="Tateno Pictures home" className="inline-flex items-center gap-3">
              <Image
                src="/images/tateno-pics-logo-w.png"
                alt=""
                width={42}
                height={58}
                className="h-12 w-9 object-contain"
              />
              <span className="flex flex-col">
                <span className="text-2xl font-semibold tracking-[-.075em]">TATENO<span className="text-[#D98A6C]">.</span></span>
                <span className="mt-1 text-[9px] uppercase tracking-[.22em] text-white/55">Pictures</span>
              </span>
            </Link>
            <p className="mt-3 text-xs uppercase tracking-[.14em] text-white/55">Kampala, Uganda</p>
          </div>
          <div>
            <span className="eyebrow text-[#D98A6C]">Explore</span>
            <nav aria-label="Footer navigation" className="mt-5 flex flex-col gap-3 text-sm text-white/70">
              <Link href="/work" className="hover:text-white">Film & Video</Link>
              <Link href="/photography" className="hover:text-white">Photography</Link>
              <Link href="/academy" className="hover:text-white">Academy</Link>
              <Link href="/#manifesto" className="hover:text-white">The studio</Link>
              <Link href="/#contact" className="hover:text-white">Contact</Link>
            </nav>
          </div>
          <div className="md:text-right">
            <span className="eyebrow text-[#D98A6C]">Our practice</span>
            <p className="mt-5 ml-auto max-w-sm text-sm leading-7 text-white/65">
              Film and video production, photography, cinematography, editing, colour grading and creative visual work.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-6 text-[10px] uppercase tracking-[.14em] text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Tateno Pictures</span>
          <span>Independent creative production · Made in Uganda</span>
        </div>
      </div>
    </footer>
  );
}
