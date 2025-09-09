'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 top-0 left-0"> 
      <nav className="backdrop-blur-md bg-white/5 border-b border-white/10 shadow-lg h-16"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-center h-full">
            <ul className="flex items-center justify-center gap-6 md:gap-8">
              <li><Link href="/" className="text-white/90 hover:text-white text-sm font-medium transition-colors">Home</Link></li>
              <li><Link href="/portfolio" className="text-white/90 hover:text-white text-sm font-medium transition-colors">Portfolio</Link></li>
              <li><Link href="/stills" className="text-white/90 hover:text-white text-sm font-medium transition-colors">Stills</Link></li>
              
              {/* Dynamic spacing based on scroll state */}
              <li className={`transition-all duration-500 ease-in-out ${
                isScrolled ? 'mx-12 md:mx-14' : 'mx-2 md:mx-4'
              }`}>
                <Link href="/" className="flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    {/* Logo that scales down and fades out */}
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
                    
                    {/* Text that scales up and fades in */}
                    <span className={`absolute transition-all duration-500 ease-in-out ${
                      isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    } text-white text-xl font-bold whitespace-nowrap`}>
                      Tateno Pictures
                    </span>
                  </div>
                </Link>
              </li>

              <li><Link href="/academy" className="text-white/90 hover:text-white text-sm font-medium transition-colors">Academy</Link></li>
              <li><Link href="/blog" className="text-white/90 hover:text-white text-sm font-medium transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-amber-300 hover:text-white text-sm font-medium transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}