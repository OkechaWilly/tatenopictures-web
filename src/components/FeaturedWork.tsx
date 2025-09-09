"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const featuredProjects = [
  {
    id: 1,
    title: "The Last Harvest",
    category: "Feature Film",
    description: "A compelling drama about resilience and tradition in modern Uganda",
    image: "/images/featured-1.jpg",
    fallback: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
    link: "/work/the-last-harvest"
  },
  {
    id: 2,
    title: "Kampala Nights",
    category: "Commercial",
    description: "Vibrant nightlife captured through cinematic storytelling",
    image: "/images/featured-2.jpg",
    fallback: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd",
    link: "/work/kampala-nights"
  },
  {
    id: 3,
    title: "Echoes of the Nile",
    category: "Documentary",
    description: "Exploring the cultural heritage along Africa's longest river",
    image: "/images/featured-3.jpg",
    fallback: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
    link: "/work/echoes-of-the-nile"
  }
];

export default function FeaturedWork() {
  return (
    <section id="featured-work" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our latest cinematic creations that showcase African storytelling at its finest
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Link href={project.link}>
                <div className="relative overflow-hidden rounded-xl">
                  {/* Image */}
                  <Image
                    src={project.image || project.fallback}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = project.fallback;
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-amber-400 text-sm font-medium">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors duration-300"
          >
            View Full Portfolio
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}