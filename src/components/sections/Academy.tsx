"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Course {
  title: string;
  duration: string;
  level: string;
  description: string;
  highlights: string[];
  instructor: string;
}

const courses: Course[] = [
  {
    title: "Cinematography Masterclass",
    duration: "6 Weeks",
    level: "Beginner to Intermediate",
    description: "Master the art of camera operations, scene lighting, and visual tone. Learn to shoot on professional cinema cameras.",
    highlights: ["Lighting Ratios & Quality", "Cinema Camera Workflows", "Framing & Composition", "Operating Gimbals & Rigs"],
    instructor: "Willy Okecha"
  },
  {
    title: "DaVinci Resolve Color Grading",
    duration: "4 Weeks",
    level: "Intermediate to Advanced",
    description: "Learn professional color workflows. Match multi-camera setups, manipulate tones, and craft distinct cinematic aesthetics.",
    highlights: ["Node Trees & Parallel Nodes", "Secondary Corrections", "HDR & Log Grading", "Film Grain & Emulation"],
    instructor: "Color Team Lead"
  },
  {
    title: "Directing & Visual Narratives",
    duration: "8 Weeks",
    level: "All Levels",
    description: "Break down scripts, block actors, and design complex shot lists. Learn what it takes to guide a film production crew.",
    highlights: ["Director's Prep & Pitching", "Staging & Blocking Actors", "Working with Crew Departments", "Pacing & Post-Prod Syncing"],
    instructor: "Guest Director"
  }
];

export default function Academy() {
  return (
    <section className="min-h-screen py-24 bg-black relative overflow-hidden flex items-center">
      {/* Light highlights */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-widest text-amber-500 font-bold mb-3 inline-block"
          >
            Tateno Film Academy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            Nurturing the Next Generation of Filmmakers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Learn industry-standard visual tools and techniques directly from active industry directors, cinematographers, and colorists.
          </motion.p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between bg-neutral-950 border border-white/5 p-8 rounded-2xl relative hover:border-amber-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/[0.02]"
            >
              {/* Top border decoration on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-t-2xl opacity-0 hover:opacity-100 transition-opacity" />

              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-xs font-semibold px-3 py-1 bg-white/5 border border-white/10 text-white rounded-full">
                    {course.duration}
                  </span>
                  <span className="text-xs text-amber-400 font-medium">
                    {course.level}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {course.title}
                </h3>
                
                <p className="text-xs text-gray-500 mb-6 italic">
                  Led by {course.instructor}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-8">
                  {course.description}
                </p>

                {/* Highlights list */}
                <div className="mb-8">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-300 mb-3.5">
                    What You&apos;ll Learn:
                  </h4>
                  <ul className="space-y-2.5">
                    {course.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center text-xs text-gray-400">
                        <svg className="w-4 h-4 mr-2 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <Link
                  href="#contact"
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-white/5 hover:bg-amber-600 text-white font-semibold text-sm border border-white/10 hover:border-transparent rounded-lg transition-all duration-300"
                >
                  Join Course Waitlist
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate / Special Workshops */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-16 bg-neutral-950 border border-white/5 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Custom Workshops & Private Training
            </h3>
            <p className="text-sm text-gray-400 max-w-2xl">
              Are you looking for corporate videography training, private university guest lectures, or custom 1-on-1 mentorship programs? Contact our team.
            </p>
          </div>
          <Link
            href="#contact"
            className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm rounded-lg transition-all duration-300 whitespace-nowrap"
          >
            Inquire About Custom Mentorship
          </Link>
        </motion.div>
      </div>
    </section>
  );
}