"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface EventPackage {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

const eventPackages: EventPackage[] = [
  {
    title: "Timeless Weddings",
    subtitle: "Cinematic Marriage Films",
    description: "Fine-art coverage focusing on authentic emotions, stolen glances, and local colors. We treat your special day like a theatrical feature film.",
    image: "/images/weddings/still-01.jpeg",
    features: ["Multi-Camera 4K", "Professional Sound Capture", "Drone Highlight Footage", "Teaser + Full Feature Cut"]
  },
  {
    title: "Corporate & Gala Events",
    subtitle: "Conferences & Brand Celebrations",
    description: "Sleek coverage for summits, award galas, and brand activations. Perfect for promotion, social media reels, and archiving milestones.",
    image: "/images/music/sda.png",
    features: ["High-Fidelity Audio", "Same-Day Teaser Editing", "Executive Interview Setups", "Social-Ready Reels"]
  },
  {
    title: "Live Shows & Festivals",
    subtitle: "Concert & Stage Production",
    description: "Capturing the energy of live performances, artist tours, and theater. We preserve the stage dynamics, lighting art, and crowd chemistry.",
    image: "/images/music/Binyumira-BashySmith4.png",
    features: ["Stage Audio Syncing", "Low-Light Optimized Sensors", "Crowd & Atmosphere Reels", "Multi-Angle Coverage"]
  }
];

export default function Events() {
  return (
    <section className="min-h-screen py-24 bg-neutral-950 relative overflow-hidden flex items-center">
      {/* Dynamic Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
      <div className="absolute -left-48 top-1/4 w-96 h-96 bg-amber-500/5 rounded-full filter blur-[100px]" />
      <div className="absolute -right-48 bottom-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-white bg-clip-text text-transparent"
          >
            Events & Wedding Cinematography
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Documenting life&apos;s grand celebrations and intimate stories with absolute visual excellence.
          </motion.p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {eventPackages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group flex flex-col justify-between h-full bg-neutral-900/60 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:border-amber-500/20 transition-all duration-500 hover:shadow-2xl hover:shadow-black/50"
            >
              {/* Card visual header */}
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-neutral-800">
                  {/* Subtle placeholder pattern or solid fallback */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/90 z-10" />
                  
                  {/* Image fallback if files don't load, adding styled text placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-950 p-6 text-center">
                    <span className="text-amber-500/20 font-bold text-5xl select-none uppercase tracking-widest font-mono">
                      {pkg.title.split(" ")[0]}
                    </span>
                  </div>
                  
                  {/* Real Image */}
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-85"
                    onError={(e) => {
                      // Fallback gracefully on image error
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  
                  <div className="absolute bottom-4 left-6 z-20">
                    <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
                      {pkg.subtitle}
                    </p>
                    <h3 className="text-2xl font-bold text-white">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="p-6">
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2.5">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-center text-xs text-gray-300">
                        <svg className="w-4 h-4 mr-2 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Call-to-action */}
              <div className="p-6 border-t border-white/5">
                <Link
                  href="#contact"
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-neutral-800 hover:bg-amber-600 text-white hover:text-white text-sm font-semibold rounded-lg transition-all duration-300 group-hover:bg-neutral-800/80 group-hover:hover:bg-amber-600"
                >
                  Book Event Coverage
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}