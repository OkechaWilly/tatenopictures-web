"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CommercialProject {
  title: string;
  client: string;
  year: string;
  description: string;
  category: string;
  image: string;
}

const commercialProjects: CommercialProject[] = [
  {
    title: "The Peak Explorer",
    client: "Peak Outdoors",
    year: "2024",
    description: "A high-action, rugged commercial spot highlighting durable waterproof performance gear in extreme weather.",
    category: "Commercial Film",
    image: "/images/boat.JPG"
  },
  {
    title: "Dawn of Nexus",
    client: "Nexus Tech",
    year: "2024",
    description: "Sleek, product-focused commercial showcasing next-generation mobile devices with premium lighting and macro lenses.",
    category: "Product Launch",
    image: "/images/music/sda.png"
  },
  {
    title: "Aura Spring Collection",
    client: "Aura Fashion",
    year: "2023",
    description: "An elegant, cinematic fashion film capturing soft colors, fabric movement, and natural sunlight editing.",
    category: "Fashion Film",
    image: "/images/films/newneighbor3.png"
  },
  {
    title: "Luxe Horizon",
    client: "Luxe Hotels & Resorts",
    year: "2023",
    description: "An immersive lifestyle commercial telling a story of serenity, luxury architecture, and fine dining.",
    category: "Brand Campaign",
    image: "/images/films/newneighbor2.png"
  }
];

const clientBrands = [
  "Nexus Tech",
  "Peak Outdoors",
  "Aura Fashion",
  "Luxe Hotels",
  "Oasis Drinks",
  "Apex Athletics",
  "Vanguard Auto",
  "Crown Jewelry"
];

export default function Branded() {
  return (
    <section className="min-h-screen py-24 bg-neutral-900 relative overflow-hidden flex items-center">
      {/* Textured grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-white bg-clip-text text-transparent"
          >
            Branded Content & Commercials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            We help progressive brands build strong identities through high-fidelity commercial cinematography and motion design.
          </motion.p>
        </div>

        {/* Brand Marquee Ticker */}
        <div className="mb-20 relative w-full overflow-hidden bg-neutral-950/60 backdrop-blur border-y border-white/5 py-8">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-900 to-transparent z-10" />
          
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            className="flex gap-16 w-max items-center"
          >
            {/* Loop 1 */}
            {clientBrands.map((brand, idx) => (
              <span key={`b1-${idx}`} className="text-sm font-bold tracking-widest uppercase text-gray-500 hover:text-amber-400 transition-colors duration-300 select-none">
                {brand}
              </span>
            ))}
            {/* Loop 2 (Duplicated for seamless transition) */}
            {clientBrands.map((brand, idx) => (
              <span key={`b2-${idx}`} className="text-sm font-bold tracking-widest uppercase text-gray-500 hover:text-amber-400 transition-colors duration-300 select-none">
                {brand}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Commercial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {commercialProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative h-96 rounded-2xl overflow-hidden bg-neutral-850 border border-white/5 flex flex-col justify-end p-8 cursor-pointer"
            >
              {/* Background Cover */}
              <div className="absolute inset-0 bg-neutral-950" />
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-30 group-hover:opacity-50"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent z-10" />

              {/* Text info inside cards */}
              <div className="relative z-20">
                <span className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {project.category}
                </span>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-400 font-mono">
                    {project.client} &bull; {project.year}
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors max-w-xl">
                  {project.description}
                </p>
              </div>

              {/* Top hover indicator */}
              <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-amber-600 p-2.5 rounded-full text-white shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View commercial reels */}
        <div className="text-center mt-16">
          <Link
            href="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-transparent hover:bg-white/5 border border-white/10 hover:border-white/30 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            Explore Brand Portfolio
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}