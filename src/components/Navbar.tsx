'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  { label: 'Film & Video', href: '/work' },
  { label: 'Photography', href: '/photography' },
  { label: 'Academy', href: '/academy' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(23,25,22,.08)] bg-[rgba(244,242,236,.92)] backdrop-blur-xl">
      <nav aria-label="Main navigation" className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-14">
        <Link href="/" className="group flex items-center gap-3" aria-label="Tateno Pictures home">
          <Image src="/images/tateno-pics-logo12.png" alt="" width={46} height={46} priority className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105" />
          <span className="flex flex-col leading-none">
            <span className="text-[16px] font-semibold tracking-[-.065em] text-[var(--ink)]">TATENO<span className="text-[var(--accent)]">.</span></span>
            <span className="mt-[5px] text-[8px] font-medium uppercase tracking-[.22em] text-[var(--muted)]">Pictures</span>
          </span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} aria-current={pathname === link.href || (link.href === '/work' && pathname.startsWith('/work/')) ? 'page' : undefined} className={`nav-link ${pathname === link.href || (link.href === '/work' && pathname.startsWith('/work/')) ? 'active' : ''}`}>
              {link.label}
            </Link>
          ))}
          <Link href="/#manifesto" className="nav-link">Studio</Link>
          <Link href="/#contact" className="ml-1 inline-flex min-h-11 items-center rounded-full bg-[var(--ink)] px-6 text-xs font-semibold text-white transition-colors hover:bg-[var(--accent)]">Let's talk</Link>
        </div>

        <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-[var(--line)] transition-colors hover:bg-black/5 md:hidden">
          <span className={`h-px w-5 bg-[var(--ink)] transition-transform ${open ? 'translate-y-[3px] rotate-45' : ''}`} />
          <span className={`h-px w-5 bg-[var(--ink)] transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-px w-5 bg-[var(--ink)] transition-transform ${open ? '-translate-y-[9px] -rotate-45' : ''}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-navigation" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="border-t border-[var(--line)] bg-[var(--paper-bright)] px-6 py-8 md:hidden">
            <div className="flex flex-col gap-6">
              {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={pathname === link.href ? 'page' : undefined} className={`text-2xl font-semibold tracking-[-.04em] ${pathname === link.href ? 'text-[var(--accent)]' : 'text-[var(--ink)]'}`}>{link.label}</Link>)}
              <Link href="/#manifesto" onClick={() => setOpen(false)} className="text-2xl font-medium tracking-[-.05em] text-[var(--ink)]">The studio</Link>
              <Link href="/#contact" onClick={() => setOpen(false)} className="text-2xl font-semibold tracking-[-.04em] text-[var(--accent)]">Start a project</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
