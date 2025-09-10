// src/components/sections/Narrative.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Define TypeScript interfaces
interface BaseProject {
  title: string;
  image: string;
  year: string;
  description: string;
  category: string;
  duration: string;
}

interface MusicVideoProject extends BaseProject {
  artist: string;
}

interface NarrativeCategory {
  type: string;
  projects: (BaseProject | MusicVideoProject)[];
}

// Use the interface for your data
const narrativeWork: NarrativeCategory[] = [
  {
    type: "Feature Films",
    projects: [
      { 
        title: "The New Neighbour", 
        image: "/images/films/newneighbor3.png", 
        year: "2024",
        description: "An experimental short-film exploring urban relationships",
        category: "Drama",
        duration: "2 min"
      },
       { 
        title: "Benja", 
        image: "/images/films/newneighbor3.png", 
        year: "2024",
        description: "An experimental short-film exploring urban relationships",
        category: "Drama",
        duration: "2 min"
      },
      { 
        title: "Shadows of the Savannah", 
        image: "/images/films/newneighbor2.png", 
        year: "2023",
        description: "An epic journey through the African wilderness",
        category: "Adventure",
        duration: "105 min"
      }
    ]
  },
  {
    type: "Documentaries", 
    projects: [
      { 
        title: "Changing the Truth", 
        image: "/images/docs/ctt-doc-11.png", 
        year: "2024",
        description: "Lighting the World, One Child at a Time",
        category: "Humanitarian",
        duration: "30 min"
      },
      { 
        title: "Urban Rhythms", 
        image: "/images/docs/ctt-doc-3.png", 
        year: "2023",
        description: "The pulse of city life in contemporary Africa",
        category: "Social",
        duration: "75 min"
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
        description: "Vibrant sounds of the city come to life in this Afrobeat celebration",
        category: "Afrobeat",
        duration: "4:30"
      },
      { 
        title: "She Love Me", 
        image: "/images/music/Koka-Sheloveme44.png", 
        artist: "Bashy Smithe", 
        year: "2024",
        description: "Vibrant sounds of the city come to life in this Afrobeat celebration",
        category: "Afrobeat",
        duration: "4:30"
      },
      { 
        title: "Yona", 
        image: "/images/music/Yona-SDA4.png", 
        artist: "Bashy Smithe", 
        year: "2023",
        description: "Soulful tunes against the African sunset",
        category: "R&B",
        duration: "3:45"
      }
    ]
  }
];

// Type guard to check if a project is a MusicVideoProject
function isMusicVideo(project: BaseProject | MusicVideoProject): project is MusicVideoProject {
  return 'artist' in project;
}

export default function Narrative() {
  return (
    <section className="min-h-screen py-20 bg-navy-950 relative overflow-hidden">
      {/* Textured Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
      
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/5"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-white bg-clip-text text-transparent">
            Narrative Work
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Compelling stories told through film, documentary, and music
          </p>
        </motion.div>

        {/* Categories */}
        {narrativeWork.map((category, categoryIndex) => (
          <motion.div
            key={category.type}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className="mb-20 last:mb-0"
          >
            {/* Category Header */}
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-amber-400">{category.type}</h3>
              <span className="text-gray-400 text-sm">
                {category.projects.length} projects
              </span>
            </div>

            {/* Projects Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${category.projects.length >= 3 ? '3' : '2'} gap-6`}>
              {category.projects.map((project, projectIndex) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: projectIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer rounded-xl overflow-hidden transition-all duration-500 relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/30 hover:border-amber-400/20"
                >
                  <Link href={`/work/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {/* Project Image Container */}
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                    </div>

                    {/* Minimal Info Panel - Always visible */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-md bg-black/40 border-t border-gray-600/20">
                      <h4 className="text-sm font-bold text-white truncate">
                        {project.title}
                      </h4>
                      {isMusicVideo(project) && (
                        <p className="text-amber-300 text-xs truncate">
                          {project.artist}
                        </p>
                      )}
                    </div>

                    {/* Hover Overlay with Description */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-lg bg-gray-900/90 p-6 flex items-center justify-center">
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-white mb-2">
                          {project.title}
                        </h4>
                        {isMusicVideo(project) && (
                          <p className="text-amber-300 text-sm mb-3">
                            {project.artist}
                          </p>
                        )}
                        <p className="text-gray-200 text-sm leading-relaxed">
                          {project.description}
                        </p>
                        <div className="mt-4">
                          <span className="inline-block bg-amber-600 text-white text-xs px-3 py-1 rounded-full">
                            View Project
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/narrative"
            className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            Explore All Narrative Work
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}