'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '@/lib/projects';

export default function Work() {
  const [filter, setFilter] = useState<'all' | 'narrative' | 'events' | 'stills' | 'branded'>('all');

  // Handle filter changes via custom event (e.g., dispatched by Navbar)
  useEffect(() => {
    const handleFilterChange = (e: Event) => {
      const customEvent = e as CustomEvent<'all' | 'narrative' | 'events' | 'stills' | 'branded'>;
      if (customEvent.detail) {
        setFilter(customEvent.detail);
      }
    };

    window.addEventListener('setWorkFilter', handleFilterChange);
    return () => window.removeEventListener('setWorkFilter', handleFilterChange);
  }, []);

  const filteredProjects = projectsData.filter(
    (project) => filter === 'all' || project.category === filter
  );

  // Asymmetric classes based on list indices to form a premium grid layout
  const getGridClasses = (index: number) => {
    const modulo = index % 6;
    if (modulo === 0) return 'col-span-12 md:col-span-8 h-[400px] md:h-[550px]';
    if (modulo === 1) return 'col-span-12 md:col-span-4 h-[400px] md:h-[550px]';
    if (modulo === 2) return 'col-span-12 md:col-span-4 h-[400px] md:h-[550px]';
    if (modulo === 3) return 'col-span-12 md:col-span-8 h-[400px] md:h-[550px]';
    return 'col-span-12 md:col-span-6 h-[400px] md:h-[450px]';
  };

  const tabs: { id: 'all' | 'narrative' | 'events' | 'stills' | 'branded'; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'narrative', label: 'Narrative' },
    { id: 'events', label: 'Events' },
    { id: 'stills', label: 'Stills' },
    { id: 'branded', label: 'Branded' },
  ];

  return (
    <section id="work" className="w-full bg-[#060608] section-pad page-pad relative">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="label-gold block mb-3">Selected Work</span>
            <h2 className="display-lg uppercase text-[var(--text-primary)]">
              Visual Portfolio
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] font-sans font-light text-sm max-w-sm leading-relaxed">
            A curated selection of our most recent visual projects, ranging from narrative short films and raw documentaries to commercial campaigns.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-12 border-b border-[rgba(201,168,76,0.08)] scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`filter-tab ${filter === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Gallery Grid */}
        {filteredProjects.length === 0 && filter === 'stills' ? (
          <div className="w-full h-80 flex flex-col items-center justify-center border border-[rgba(201,168,76,0.08)] bg-[#0C0B0E] p-8 text-center rounded-sm">
            <span className="label-gold mb-3">Stills & Fine Art</span>
            <p className="text-[var(--text-secondary)] text-sm max-w-md font-light mb-6">
              Our complete photography portfolio is featured separately in our dedicated masonry gallery below.
            </p>
            <button
              onClick={() => {
                const el = document.getElementById('photography');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-outline"
            >
              Go To Photography
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-12 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`work-tile group ${getGridClasses(index)}`}
                >
                  <Link href={`/work/${project.slug}`} className="absolute inset-0 flex flex-col justify-end">
                    {/* Media container */}
                    <div className="absolute inset-0 z-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-75 group-hover:brightness-[0.85] saturate-[0.85]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent opacity-90" />
                    </div>

                    {/* Meta info at the top of card */}
                    <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20 pointer-events-none font-mono">
                      <span className="text-[9px] tracking-widest text-[#F0EBE3]/50 uppercase">
                        {project.year}
                      </span>
                      <span className="text-[9px] tracking-widest text-[var(--gold)] uppercase">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Standard details at the bottom (slides up on hover) */}
                    <div className="p-6 md:p-8 z-10 transition-all duration-500 transform group-hover:-translate-y-2">
                      <h3 className="text-xl md:text-2xl font-serif font-light text-[var(--text-primary)] mb-2 group-hover:text-[var(--gold)] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] font-light max-w-md line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        {project.description}
                      </p>
                      
                      {/* Specs revealed on hover */}
                      <div className="h-0 group-hover:h-12 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end gap-6 font-mono text-[8px] tracking-wider text-[var(--text-secondary)] border-t border-white/5 mt-4 pt-4">
                        <span>FORMAT: {project.specs.format}</span>
                        <span>DP: {project.specs.dp}</span>
                      </div>
                    </div>

                    {/* Top right hover CTA arrow */}
                    <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 text-[var(--gold)] transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </section>
  );
}
