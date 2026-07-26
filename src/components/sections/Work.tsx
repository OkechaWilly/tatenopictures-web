'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData as projects } from '@/lib/projects';
import type { Project } from '@/lib/projects';


export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const handleSetFilter = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setActiveFilter(customEvent.detail);
      }
    };

    window.addEventListener('set-work-filter', handleSetFilter);
    return () => window.removeEventListener('set-work-filter', handleSetFilter);
  }, []);

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const filters = [
    { label: 'All Projects', id: 'all' },
    { label: 'Cinema & Narrative', id: 'narrative' },
    { label: 'Commercial & Branded', id: 'branded' },
    { label: 'Weddings & Live Events', id: 'events' },
  ];

  return (
    <section id="work" className="bg-[#060608] section-pad page-pad border-t border-[rgba(201,168,76,0.05)]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="label-gold mb-3 inline-block">Showcase</span>
            <h2 className="display-lg text-[#F0EBE3]">Selected Works</h2>
          </div>
          <p className="text-[#8C867F] font-sans font-light text-sm max-w-sm leading-relaxed">
            Delivering cinematic excellence through a blend of technical precision and artistic visual narrative across commercials, films, and events.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-12 border-b border-[rgba(255,255,255,0.03)] no-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Asymmetric Cinematic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              // Asymmetric grid heights to mimic premier agency designs
              const isLarge = idx % 3 === 0;
              return (
                <motion.div
                  layout
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative overflow-hidden rounded bg-[#0D0C0F] border border-[rgba(255,255,255,0.03)] hover:border-[rgba(201,168,76,0.15)] transition-all duration-500 ${
                    isLarge ? 'md:h-[36rem]' : 'md:h-[28rem]'
                  } h-[24rem]`}
                >
                  <Link href={`/work/${project.slug}`} className="block w-full h-full relative">
                    
                    {/* Project Image */}
                    <div className="w-full h-full relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-[0.75] saturate-[0.8] group-hover:brightness-[0.9] group-hover:saturate-[0.95]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={idx < 2}
                      />
                      
                      {/* Dark Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-[#060608]/40 opacity-70 group-hover:opacity-85 transition-opacity duration-500" />
                    </div>

                    {/* Left Golden Border Glow */}
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#C9A84C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Standard Info Panel */}
                    <div className="absolute inset-x-8 bottom-8 z-10 transition-transform duration-500 group-hover:-translate-y-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-mono text-[#C9A84C] uppercase tracking-wider">
                          {project.subtitle}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.2)]" />
                        <span className="text-[10px] font-mono text-[#8C867F]">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#F0EBE3] mb-3">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#8C867F] font-sans font-light max-w-sm line-clamp-2 transition-opacity duration-300 group-hover:opacity-0">
                        {project.description}
                      </p>
                    </div>

                    {/* Hover Editorial Specs Overlay */}
                    <div className="absolute inset-x-8 bottom-8 z-20 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500 flex flex-col gap-4 border-t border-[rgba(201,168,76,0.15)] pt-4 pointer-events-none">
                      <p className="text-xs text-[#F0EBE3] font-sans font-light leading-relaxed">
                        {project.description}
                      </p>
                      
                      {project.specs && (
                        <div className="grid grid-cols-2 gap-y-2 gap-x-4 border-t border-[rgba(255,255,255,0.03)] pt-3 text-[10px] font-mono text-[#8C867F]">
                          <div>
                            <span className="text-[#4A4540] block uppercase tracking-widest text-[8px] mb-0.5">Director / DP</span>
                            {project.specs.dp}
                          </div>
                          {project.duration && (
                            <div>
                              <span className="text-[#4A4540] block uppercase tracking-widest text-[8px] mb-0.5">Duration</span>
                              {project.duration}
                            </div>
                          )}
                          <div className="col-span-2">
                            <span className="text-[#4A4540] block uppercase tracking-widest text-[8px] mb-0.5">Format & Optics</span>
                            {project.specs.format} / {project.specs.lenses}
                          </div>
                        </div>
                      )}

                      <div className="mt-2 text-[10px] font-mono uppercase tracking-widest text-[#C9A84C] flex items-center gap-2">
                        View Project Detail
                        <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>

                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
