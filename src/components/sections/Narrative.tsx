// src/components/sections/Narrative.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Define TypeScript interfaces for high-end cinematic project properties
interface BaseProject {
  title: string;
  image: string;
  year: string;
  description: string;
  category: string;
  duration: string;
  specs: {
    format?: string;
    dp?: string;
    lenses?: string;
  };
}

interface MusicVideoProject extends BaseProject {
  artist: string;
}

interface NarrativeCategory {
  type: string;
  projects: (BaseProject | MusicVideoProject)[];
}

const narrativeWork: NarrativeCategory[] = [
  {
    type: "Cinema & Short Films",
    projects: [
      { 
        title: "The New Neighbour", 
        image: "/images/films/newneighbor3.png", 
        year: "2024",
        description: "An experimental short-film exploring the fragile nuances of urban relationships.",
        category: "Drama",
        duration: "18 min",
        specs: {
          format: "Arri Alexa Mini LF",
          dp: "Willy Okecha",
          lenses: "Cooke Anamorphic"
        }
      },
      { 
        title: "Benja", 
        image: "/images/films/newneighbor3.png", 
        year: "2024",
        description: "A gritty narrative following a young protagonist navigating Kampala's underground scene.",
        category: "Drama",
        duration: "24 min",
        specs: {
          format: "RED V-Raptor 8K",
          dp: "Willy Okecha",
          lenses: "Atlas Orion Anamorphics"
        }
      },
      { 
        title: "Shadows of the Savannah", 
        image: "/images/films/newneighbor2.png", 
        year: "2023",
        description: "An atmospheric visual poem capturing the ancient wilderness and native wildlife.",
        category: "Adventure",
        duration: "15 min",
        specs: {
          format: "Sony Venice 2",
          dp: "Willy Okecha",
          lenses: "Angenieux Optimo Zooms"
        }
      }
    ]
  },
  {
    type: "Documentary Films", 
    projects: [
      { 
        title: "Changing the Truth", 
        image: "/images/docs/ctt-doc-11.png", 
        year: "2024",
        description: "An intimate, character-driven story documenting structural education reform.",
        category: "Humanitarian",
        duration: "30 min",
        specs: {
          format: "Arri Amira",
          dp: "Willy Okecha",
          lenses: "Zeiss Super Speeds"
        }
      },
      { 
        title: "Urban Rhythms", 
        image: "/images/docs/ctt-doc-3.png", 
        year: "2023",
        description: "A cultural exploration of the evolving contemporary music scene across African metropolises.",
        category: "Social History",
        duration: "52 min",
        specs: {
          format: "Arri Alexa Mini",
          dp: "Willy Okecha",
          lenses: "Sigma Cine Primes"
        }
      }
    ]
  },
  {
    type: "Music Videos",
    projects: [
      { 
        title: "Binyumira", 
        image: "/images/music/Binyumira-BashySmith2.png", 
        artist: "Bashy Smithe", 
        year: "2024",
        description: "Vibrant city streets come to life in this energetic Afrobeat dance celebration.",
        category: "Music Video",
        duration: "4:15",
        specs: {
          format: "RED Komodo 6K",
          dp: "Willy Okecha",
          lenses: "DZOFilm Vespid Primes"
        }
      },
      { 
        title: "She Love Me", 
        image: "/images/music/Koka-Sheloveme44.png", 
        artist: "Bashy Smithe", 
        year: "2024",
        description: "A moody, stylized performance video focusing on choreography and dramatic lighting.",
        category: "Music Video",
        duration: "3:50",
        specs: {
          format: "Arri Alexa Mini LF",
          dp: "Willy Okecha",
          lenses: "Cooke Anamorphic"
        }
      }
    ]
  }
];

function isMusicVideo(project: BaseProject | MusicVideoProject): project is MusicVideoProject {
  return 'artist' in project;
}

export default function Narrative() {
  return (
    <section className="min-h-screen py-28 bg-[#09090a] relative overflow-hidden">
      {/* Textured Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1c1c1e_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold mb-2.5 inline-block">
              Narrative & Visual Works
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white leading-tight">
              Selected Cinematography
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-sm font-light leading-relaxed">
            Delivering cinematic excellence through a blend of technical precision and artistic visual narrative.
          </p>
        </div>

        {/* Categories */}
        {narrativeWork.map((category, categoryIndex) => (
          <div key={category.type} className="mb-24 last:mb-0">
            
            {/* Category Header */}
            <div className="flex items-baseline justify-between mb-10">
              <h3 className="text-xl font-serif font-medium text-white/95 tracking-wide">
                {category.type}
              </h3>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">
                {category.projects.length} Works
              </span>
            </div>

            {/* Projects Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${category.projects.length >= 3 ? '3' : '2'} gap-8`}>
              {category.projects.map((project, projectIndex) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: projectIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative flex flex-col justify-end bg-neutral-900/40 rounded-xl overflow-hidden border border-white/5 hover:border-amber-400/20 transition-all duration-500 h-[28rem]"
                >
                  <Link href={`/work/${project.title.toLowerCase().replace(/\s+/g, '-')}`} className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                    
                    {/* Background Image Container */}
                    <div className="absolute inset-0 z-0 bg-neutral-950">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1200ms] opacity-40 group-hover:opacity-60"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
                    </div>

                    {/* ALWAYS VISIBLE INFO PANEL */}
                    <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-4">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-amber-400 font-semibold mb-2 inline-block">
                        {isMusicVideo(project) ? `${project.artist} • ${project.category}` : project.category}
                      </span>
                      <h4 className="text-2xl font-serif font-light text-white mb-2">
                        {project.title}
                      </h4>
                      <p className="text-xs text-gray-400 font-light truncate max-w-xs transition-opacity duration-300 group-hover:opacity-0">
                        {project.description}
                      </p>
                    </div>

                    {/* HOVER OVERLAY - EDITORIAL SPECS (Fades in, slides up) */}
                    <div className="absolute inset-x-6 bottom-6 z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex flex-col gap-4 border-t border-white/10 pt-4">
                      <p className="text-xs text-gray-300 font-light leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-y-2 gap-x-4 border-t border-white/5 pt-3 text-[10px] font-mono text-gray-400">
                        <div>
                          <span className="text-gray-600 block uppercase tracking-wider text-[8px]">DP</span>
                          {project.specs.dp}
                        </div>
                        <div>
                          <span className="text-gray-600 block uppercase tracking-wider text-[8px]">Duration</span>
                          {project.duration}
                        </div>
                        <div className="col-span-2">
                          <span className="text-gray-600 block uppercase tracking-wider text-[8px]">Format & Lenses</span>
                          {project.specs.format} / {project.specs.lenses}
                        </div>
                      </div>

                      <div className="mt-2 text-[10px] font-bold uppercase tracking-widest text-amber-400 flex items-center gap-1.5 self-start">
                        View Project Reel
                        <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
}