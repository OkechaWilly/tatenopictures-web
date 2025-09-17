// src/components/sections/Stills.tsx
"use client";

import { motion } from "framer-motion";
import MasonryGrid from "@/components/MasonryGrid";

// Make sure your images are in the public folder
// Example: public/images/weddings/portrait-1.jpg
const weddingPhotos = [
  {
    id: "1",
    src: "/images/weddings/still-01.jpeg", // ← Check this path exists
    title: "Bride & Groom",
    category: "Portrait"
  },
  {
    id: "2", 
    src: "/images/music/sda.png", // ← Check this path exists
    title: " Setup",
    category: "Landscape"
  },
  {
    id: "3",
    src: "/images/weddings/still-02.jpeg", // ← Check this path exists
    title: "Vows Exchange",
    category: "Portrait"
  },
  {
    id: "4",
    src: "/images/music/Binyumira-BashySmith4.png", // ← Check this path exists
    title: "Reception Decor", 
    category: "Landscape"
  },
  {
    id: "5",
    src: "/images/boat.JPG", // ← Check this path exists
    title: "First Dance",
    category: "Square"
  },
  {
    id: "6",
    src: "/images/weddings/still-03.jpeg", // ← Check this path exists
    title: "Family Portrait",
    category: "Portrait"
  },
];

export default function Stills() {
  return (
    <section className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Wedding & Event Photography
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Capturing life's most precious moments with artistry and emotion
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <MasonryGrid items={weddingPhotos} columns={3} />
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg transition-colors duration-300">
            View Full Gallery
          </button>
        </motion.div>
      </div>
    </section>
  );
}