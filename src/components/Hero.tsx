"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video with fallback poster */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/africans.jpg" // fallback still image
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-reel.mp4" type="video/mp4" />
        {/* If video can't load at all, show fallback text */}
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Animated Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Crafting Cinematic Stories
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl max-w-2xl"
        >
          From cinematography to storytelling, we bring visions to life with
          precision and creativity.
        </motion.p>
      </div>
    </section>
  );
}
