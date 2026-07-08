'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for header background opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Monitor active section on homepage using IntersectionObserver
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sections = ['work', 'statement', 'academy', 'contact'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-30% 0px -60% 0px' }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, [pathname]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsWorkDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsWorkDropdownOpen(false);
  }, [pathname]);

  const workCategories = [
    { name: 'Narrative', slug: 'narrative' },
    { name: 'Events', slug: 'events' },
    { name: 'Stills', slug: 'stills' },
    { name: 'Branded', slug: 'branded' },
  ];

  const handleWorkCategoryClick = (slug: string) => {
    setIsWorkDropdownOpen(false);
    setIsMobileMenuOpen(false);

    if (pathname === '/') {
      const el = document.getElementById('work');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        // Dispatch custom event to update active filter in Work component
        window.dispatchEvent(new CustomEvent('setWorkFilter', { detail: slug }));
      }
    } else {
      router.push(`/#work`);
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('setWorkFilter', { detail: slug }));
      }, 500);
    }
  };

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full z-50 top-0 left-0">
      {/* Top Border Accent */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-60" />

      <nav
        className={`w-full transition-all duration-500 ease-out ${
          isScrolled
            ? 'h-16 bg-[#060608]/90 backdrop-blur-xl border-b border-[rgba(201,168,76,0.1)] shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'h-24 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
          
          {/* LEFT SIDE NAVIGATION */}
          <div className="hidden md:flex items-center gap-10 w-1/3">
            {/* WORK DROPDOWN */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsWorkDropdownOpen(!isWorkDropdownOpen)}
                className={`text-[10px] uppercase tracking-[0.25em] font-mono transition-colors flex items-center gap-1.5 py-2 ${
                  activeSection === 'work' || isWorkDropdownOpen
                    ? 'text-[var(--gold)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                Work
                <svg
                  className={`w-2.5 h-2.5 transition-transform duration-300 ${
                    isWorkDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {isWorkDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="absolute left-0 mt-3 w-52 bg-[#0C0B0E] border border-[rgba(201,168,76,0.15)] shadow-2xl p-2 rounded-sm backdrop-blur-lg"
                  >
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-40" />
                    {workCategories.map((cat) => (
                      <button
                        key={cat.slug}
                        onClick={() => handleWorkCategoryClick(cat.slug)}
                        className="w-full text-left px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] font-mono text-[var(--text-secondary)] hover:text-[var(--gold)] hover:bg-white/[0.02] transition-colors rounded-sm"
                      >
                        {cat.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ACADEMY */}
            <Link
              href="/academy"
              className={`text-[10px] uppercase tracking-[0.25em] font-mono transition-colors py-2 ${
                pathname === '/academy' || activeSection === 'academy'
                  ? 'text-[var(--gold)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Academy
            </Link>
          </div>

          {/* CENTER BRAND LOGO */}
          <div className="flex justify-center items-center">
            <Link href="/" className="group relative flex items-center justify-center">
              {/* Logo icon (displays when not scrolled) */}
              <div
                className={`transition-all duration-700 ease-out flex items-center justify-center ${
                  isScrolled ? 'opacity-0 scale-50 pointer-events-none w-0 h-0' : 'opacity-100 scale-100 w-12 h-16'
                }`}
              >
                <Image
                  src="/images/tateno-pics-logo-w.png"
                  alt="Tateno Pictures"
                  width={42}
                  height={72}
                  className="object-contain filter brightness-95 group-hover:brightness-110 transition-all duration-300"
                  priority
                />
              </div>

              {/* Text logo (fades in when scrolled, or sits styled nicely) */}
              <div
                className={`transition-all duration-700 ease-out flex flex-col items-center justify-center ${
                  isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none absolute'
                }`}
              >
                <span className="text-[13px] tracking-[0.35em] text-[var(--text-primary)] font-serif font-light">
                  TATENO PICTURES
                </span>
                <span className="text-[7px] tracking-[0.5em] text-[var(--gold)] font-mono uppercase mt-0.5">
                  Kampala
                </span>
              </div>
            </Link>
          </div>

          {/* RIGHT SIDE NAVIGATION */}
          <div className="hidden md:flex items-center justify-end gap-10 w-1/3">
            {/* ABOUT */}
            <Link
              href="/#statement"
              onClick={(e) => handleNavClick('statement', e)}
              className={`text-[10px] uppercase tracking-[0.25em] font-mono transition-colors py-2 ${
                activeSection === 'statement'
                  ? 'text-[var(--gold)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              About
            </Link>

            {/* CONTACT */}
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick('contact', e)}
              className={`text-[10px] uppercase tracking-[0.25em] font-mono transition-colors py-2 ${
                activeSection === 'contact'
                  ? 'text-[var(--gold)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 focus:outline-none z-50"
              aria-label="Toggle Menu"
            >
              <div className="w-5 h-5 flex flex-col justify-between items-end">
                <span
                  className={`h-[1.5px] bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? 'w-5 rotate-45 translate-y-[9px]' : 'w-5'
                  }`}
                />
                <span
                  className={`h-[1.5px] bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? 'w-0 opacity-0' : 'w-3.5'
                  }`}
                />
                <span
                  className={`h-[1.5px] bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? 'w-5 -rotate-45 -translate-y-[9px]' : 'w-2.5'
                  }`}
                />
              </div>
            </button>
          </div>

        </div>
      </nav>

      {/* FULL-SCREEN MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 bg-[#060608] z-40 flex flex-col justify-between p-8 pt-32"
          >
            {/* Background elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--gold)] blur-[150px] opacity-10" />
            </div>

            {/* Navigation links */}
            <div className="flex flex-col gap-8 md:gap-12 mt-4">
              <span className="text-[9px] tracking-[0.3em] font-mono text-[var(--gold)] uppercase">Menu</span>
              
              <div className="flex flex-col gap-6">
                {/* Work section with categories */}
                <div>
                  <span className="text-xl uppercase tracking-[0.2em] font-serif text-[var(--text-secondary)] block mb-3">Work</span>
                  <div className="grid grid-cols-2 gap-3 pl-4 border-l border-[rgba(201,168,76,0.15)]">
                    {workCategories.map((cat) => (
                      <button
                        key={cat.slug}
                        onClick={() => handleWorkCategoryClick(cat.slug)}
                        className="text-left text-[11px] uppercase tracking-[0.2em] font-mono text-[var(--text-secondary)] hover:text-[var(--gold)] py-1.5 transition-colors"
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Academy link */}
                <Link
                  href="/academy"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl uppercase tracking-[0.2em] font-serif text-[var(--text-primary)] hover:text-[var(--gold)] py-2 transition-colors border-b border-white/5"
                >
                  Academy
                </Link>

                {/* About link */}
                <Link
                  href="/#statement"
                  onClick={(e) => {
                    handleNavClick('statement', e);
                  }}
                  className="text-2xl uppercase tracking-[0.2em] font-serif text-[var(--text-primary)] hover:text-[var(--gold)] py-2 transition-colors border-b border-white/5"
                >
                  About
                </Link>

                {/* Contact link */}
                <Link
                  href="/#contact"
                  onClick={(e) => {
                    handleNavClick('contact', e);
                  }}
                  className="text-2xl uppercase tracking-[0.2em] font-serif text-[var(--text-primary)] hover:text-[var(--gold)] py-2 transition-colors border-b border-white/5"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Footer details in mobile menu */}
            <div className="border-t border-white/5 pt-6 flex flex-col gap-4 font-mono">
              <div className="flex justify-between text-[8px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                <span>Kampala, Uganda</span>
                <span>info@tatenopictures.com</span>
              </div>
              <div className="flex gap-6 text-[8px] uppercase tracking-[0.2em] text-[var(--gold)]">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer">Vimeo</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}