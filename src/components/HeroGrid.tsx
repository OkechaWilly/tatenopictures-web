"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroGridItem {
  title: string;
  src: string; // Thumbnail image
  category: string;
}

const items: HeroGridItem[] = [
  { title: "Cinematography", src: "/images/cinema-still.jpg", category: "Reels" },
  { title: "Directing", src: "/images/directing-still.jpg", category: "Reels" },
  { title: "Photography", src: "/images/photo-still.jpg", category: "Commercial" },
  { title: "Editing", src: "/images/editing-still.jpg", category: "Academy" },
];

export default function HeroGrid() {
  return (
    <section className="w-full bg-black text-white py-20 px-8">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={item.src}
              alt={item.title}
              width={800}
              height={600}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl font-semibold">{item.title}</h2>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
