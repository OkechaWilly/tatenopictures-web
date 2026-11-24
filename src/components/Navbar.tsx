'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const pathname = usePathname();

  // Scroll detection for transparent-to-solid navbar transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to detect active page section for menu highlighting
  useEffect(() => {
    if (pathname !== '/') return;

    const sections = ['hero', 'work', 'manifesto', 'academy', 'contact'];
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
        { threshold: 0.3 }
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

  return (
    <>
      <header className="fixed w-full z-50 top-0 left-0">
        <nav
          className={`transition-all duration-500 ${
            isScrolled
              ? 'bg-[#060608]/90 backdrop-blur-xl border-b border-[rgba(201,168,76,0.08)] py-4'
              : 'bg-transparent py-6'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
            
            {/* Desktop Left Nav Links */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12 flex-1 justify-end pr-12">
              <Link href="/work" className={`nav-link uppercase ${pathname.startsWith('/work') ? 'text-[#C9A84C]' : 'text-[#8C867F]'}`}>Film & Video</Link>
              <Link href="/photography" className={`nav-link uppercase ${pathname === '/photography' ? 'text-[#C9A84C]' : 'text-[#8C867F]'}`}>Photography</Link>

              {/* ACADEMY Page Link */}
              <Link
                href="/academy"
                className={`nav-link uppercase ${
                  pathname === '/academy' ? 'text-[#C9A84C]' : 'text-[#8C867F]'
                }`}
              >
                Academy
              </Link>
            </div>

            {/* Centered Brand Logo */}
            <div className="flex-shrink-0 z-50">
              <Link href="/" className="flex flex-col items-center group">
                <Image
                  src="/images/tateno-pics-logo-w.png"
                  alt="Tateno Pictures Logo"
                  width={34}
                  height={58}
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <span className="text-[10px] text-[#F0EBE3] font-serif font-light tracking-[0.25em] mt-2 uppercase transition-colors duration-300 group-hover:text-[#C9A84C]">
                  Tateno Pictures
                </span>
              </Link>
            </div>

            {/* Desktop Right Nav Links */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12 flex-1 pl-12">
              {/* ABOUT Manifesto Section */}
              <Link
                href="/#manifesto"
                className={`nav-link uppercase ${
                  activeSection === 'manifesto' ? 'text-[#C9A84C]' : 'text-[#8C867F]'
                }`}
              >
                Manifesto
              </Link>

              {/* CONTACT Section Button */}
              <Link
                href="/#contact"
                className={`nav-link uppercase ${
                  activeSection === 'contact' ? 'text-[#C9A84C]' : 'text-[#8C867F]'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Navigation Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#F0EBE3] p-2 focus:outline-none z-50"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span className={`block h-[1px] w-6 bg-[#F0EBE3] transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}></span>
                <span className={`block h-[1px] w-4 bg-[#F0EBE3] transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`block h-[1px] w-6 bg-[#F0EBE3] transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}></span>
              </div>
            </button>

          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="mobile-menu-overlay"
          >
            <div className="flex flex-col h-full justify-between py-12">
              
              {/* Brand Header */}
              <div className="flex justify-center border-b border-[rgba(201,168,76,0.1)] pb-6">
                <span className="font-serif font-light text-xl tracking-[0.2em] text-[#F0EBE3] uppercase">
                  TATENO PICTURES
                </span>
              </div>

              {/* Central Nav Links */}
              <nav className="flex flex-col items-center gap-6 my-auto">
                <Link href="/work" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-sans font-light text-[#F0EBE3] hover:text-[#C9A84C] transition-colors duration-300">Film & Video</Link>
                <Link href="/photography" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-sans font-light text-[#F0EBE3] hover:text-[#C9A84C] transition-colors duration-300">Photography</Link>

                <div className="h-[1px] w-12 bg-[rgba(201,168,76,0.15)] my-2"></div>

                <Link
                  href="/academy"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-sans font-light text-[#F0EBE3] hover:text-[#C9A84C] transition-colors duration-300"
                >
                  Academy
                </Link>

                <Link
                  href="/#manifesto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-sans font-light text-[#F0EBE3] hover:text-[#C9A84C] transition-colors duration-300"
                >
                  Our Manifesto
                </Link>

                <Link
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-sans font-light text-[#F0EBE3] hover:text-[#C9A84C] transition-colors duration-300"
                >
                  Get in Touch
                </Link>
              </nav>

              {/* Social Footer */}
              <div className="flex justify-center gap-6 border-t border-[rgba(201,168,76,0.1)] pt-6">
                {[
                  { label: 'Instagram', href: 'https://instagram.com/tatenopictures' },
                  { label: 'Vimeo', href: 'https://vimeo.com/tatenopictures' },
                  { label: 'YouTube', href: 'https://youtube.com/tatenopictures' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] text-[#8C867F] hover:text-[#C9A84C] tracking-wider uppercase transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}