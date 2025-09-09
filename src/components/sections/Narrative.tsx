// src/components/sections/Narrative.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Define proper types
interface FilmProject {
  title: string;
  image: string;
  year: string;
  type: 'film';
}

interface DocumentaryProject {
  title: string;
  image: string;
  year: string;
  type: 'documentary';
}

interface MusicVideoProject {
  title: string;
  image: string;
  artist: string;
  year: string;
  type: 'music-video';
}

type Project = FilmProject | DocumentaryProject | MusicVideoProject;

interface NarrativeCategory {
  type: string;
  projects: Project[];
}

const narrativeWork: NarrativeCategory[] = [
  {
    type: "Feature Films",
    projects: [
      { title: "The Last Harvest", image: "/images/film-1.jpg", year: "2024", type: 'film' },
      { title: "Shadows of the Savannah", image: "/images/film-2.jpg", year: "2023", type: 'film' }
    ]
  },
  {
    type: "Documentaries", 
    projects: [
      { title: "Echoes of the Nile", image: "/images/doc-1.jpg", year: "2024", type: 'documentary' },
      { title: "Urban Rhythms", image: "/images/doc-2.jpg", year: "2023", type: 'documentary' }
    ]
  },
  {
    type: "Music Videos",
    projects: [
      { title: "Kampala Rhythm", image: "/images/music-1.jpg", artist: "Lydia Jazmine", year: "2024", type: 'music-video' },
      { title: "Sunset Melodies", image: "/images/music-2.jpg", artist: "John Blaq", year: "2023", type: 'music-video' }
    ]
  }
];

export default function Narrative() {
  return (
    <section className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Narrative Work</h2>
          <p className="text-xl text-gray-300">Films, Documentaries & Music Videos</p>
        </motion.div>

        {narrativeWork.map((category, index) => (
          <motion.div
            key={category.type}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-amber-400 mb-8">{category.type}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.projects.map((project) => (
                <div key={project.title} className="group cursor-pointer">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold">{project.title}</h4>
                    <p className="text-gray-400">
                      {/* Type-safe display logic */}
                      {project.type === 'music-video' ? project.artist : project.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}