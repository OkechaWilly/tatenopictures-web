'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

// In Navbar.tsx - update your navItems to match your actual pages
const navItems = [
  { href: '#narrative', label: 'Narrative' },       // Films/Docs/Music Videos
  { href: '#events', label: 'Events' },             // Live Events/Weddings
  { href: '#stills', label: 'Stills' },             // Photography
  { href: '#branded', label: 'Branded' },           // Graphics/Motion/Commercials
  { href: '#academy', label: 'Academy' },           // Classes & Training
  { href: '#contact', label: 'Contact' },           // Team & Business Info
];

  return (
    <header className="fixed w-full z-50 top-0 left-0"> 
      {/* Enhanced scroll shadow effect */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'shadow-xl bg-black/70 backdrop-blur-lg border-b border-white/20' 
          : 'backdrop-blur-md bg-white/5 border-b border-white/10'
      } h-16`}> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <ul className="flex items-center justify-center gap-6 lg:gap-8">
                {navItems.slice(0, 3).map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      className={`text-sm font-medium transition-colors ${
                        pathname === item.href
                          ? 'text-amber-400 font-bold'
                          : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                
                {/* Logo/Text Center */}
                <li className={`transition-all duration-500 ease-in-out ${
                  isScrolled ? 'mx-12 lg:mx-14' : 'mx-2 lg:mx-4'
                }`}>
                  <Link href="/" className="flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className={`transition-all duration-500 ease-in-out ${
                        isScrolled ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
                      }`}>
                        <Image
                          src="/images/tateno-pics-logo-w.png"
                          alt="Tateno Pictures"
                          width={50}
                          height={86}
                          className="cursor-pointer object-contain"
                          priority
                        />
                      </div>
                      <span className={`absolute transition-all duration-500 ease-in-out ${
                        isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      } text-white text-xl font-bold whitespace-nowrap`}>
                        Tateno Pictures
                      </span>
                    </div>
                  </Link>
                </li>

                {navItems.slice(3).map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      className={`text-sm font-medium transition-colors ${
                        pathname === item.href
                          ? 'text-amber-400 font-bold'
                          : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Header */}
            <div className="flex md:hidden items-center justify-between w-full">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/tateno-pics-logo-w.png"
                  alt="Tateno Pictures"
                  width={40}
                  height={69}
                  className="object-contain"
                  priority
                />
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}></span>
                  <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer with Framer Motion */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/20"
            >
              <nav className="px-4 py-4">
                <ul className="space-y-3">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block py-2 text-lg font-medium transition-colors ${
                          pathname === item.href
                            ? 'text-amber-400 font-bold'
                            : 'text-white/90 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}