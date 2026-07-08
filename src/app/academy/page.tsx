'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Course {
  slug: string;
  title: string;
  duration: string;
  level: string;
  instructor: string;
  description: string;
  curriculum: string[];
  equipment: string;
  price: string;
}

const coursesData: Course[] = [
  {
    slug: 'cinematography-masterclass',
    title: 'Cinematography Masterclass',
    duration: '6 Weeks',
    level: 'Beginner to Intermediate',
    instructor: 'Willy Okecha',
    description: 'Master the art of camera operations, scene lighting, and visual tone. This hands-on course takes you from basic manual camera functions to staging and shooting complex cinematic scenes on professional digital sensors.',
    curriculum: [
      'Understanding Exposure, Aperture, & Shutter Angles',
      'Sculpting Light: Three-Point Lighting & Contrast Ratios',
      'Camera Support: Gimbal Operation, Sliders, & Shoulder Rigs',
      'Scene Blocking: Translating Scripts into Shot Lists',
      'Color Space: Log, RAW, & Color Space Transforms'
    ],
    equipment: 'RED Komodo 6K, Sony FX3, Arri Amira, Aputure COB Lights, Cooke/Zeiss Primes',
    price: '$650 USD'
  },
  {
    slug: 'davinci-resolve-color-grading',
    title: 'DaVinci Resolve Color Grading',
    duration: '4 Weeks',
    level: 'Intermediate to Advanced',
    instructor: 'Color Team Lead',
    description: 'Learn the industry-standard color correction software. From balancing multi-camera setups to manipulating tones, managing color spaces, and designing distinct cinematic look tables (LUTs) for feature films.',
    curriculum: [
      'DaVinci Resolve Node Tree Architecture & Management',
      'Primary & Secondary Color Corrections',
      'HDR Grading & Log Color Workspace Management',
      'Film Emulation, Grain Texturing, & Halation Effects',
      'Conforming, Mastering, and Final Delivery Specs'
    ],
    equipment: 'DaVinci Resolve Studio, DaVinci Micro Panels, Eizo Color-Calibrated Displays',
    price: '$450 USD'
  },
  {
    slug: 'directing-visual-narratives',
    title: 'Directing & Visual Narratives',
    duration: '8 Weeks',
    level: 'All Levels',
    instructor: 'Guest Director & Willy Okecha',
    description: 'Break down scripts, collaborate with actors, and design visually compelling stories. Learn the complete workflow of a director, from initial project pitches and financing to post-production and distribution.',
    curriculum: [
      'Visual Script Analysis & Creative Prep',
      'Director-Actor Communication & Scene Staging',
      'Department Coordination (Cinematography, Sound, Production Design)',
      'Editorial Pacing, Audio Design, & Scoring Direction',
      'Film Festival Submissions & Distribution Strategy'
    ],
    equipment: 'Professional Soundstage, Wireless Monitors, Director Comm Rigs',
    price: '$800 USD'
  }
];

export default function AcademyPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [enrollFormStatus, setEnrollFormStatus] = useState<string | null>(null);
  const [isEnrolling, setIsEnrolling] = useState(false);

  const handleEnrollSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEnrolling(true);
    setTimeout(() => {
      setIsEnrolling(false);
      setEnrollFormStatus('Thank you. Your application has been received. Our registrar team will reach out shortly.');
      e.currentTarget.reset();
    }, 1500);
  };

  return (
    <main className="w-full bg-[#060608] min-h-screen text-[#F0EBE3] pb-24">
      {/* Header Spacer */}
      <div className="h-24" />

      {/* Cinematic Academy Intro Hero */}
      <section className="relative w-full py-24 md:py-36 page-pad overflow-hidden border-b border-[rgba(201,168,76,0.1)] bg-gradient-to-b from-[#0A090D] to-[#060608]">
        {/* Subtle glowing elements */}
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-[rgba(201,168,76,0.03)] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-white/[0.01] blur-[150px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center relative z-10">
          <span className="label-gold mb-6 block">Tateno Film Academy</span>
          <h1 className="display-lg uppercase leading-none text-[#F0EBE3] mb-6">
            Nurturing the Next <br />
            <span className="italic text-[var(--gold)] font-serif font-light lowercase">generation of</span> filmmakers
          </h1>
          <p className="text-[var(--text-secondary)] font-sans font-light text-base md:text-lg max-w-2xl leading-relaxed">
            Gain industry-ready, hands-on experience in visual storytelling. We offer intensive training modules led by working cinematographers and directors, utilizing professional-grade equipment.
          </p>
        </div>
      </section>

      {/* Course Listing */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <div 
              key={course.slug} 
              className="bg-[#0D0C0F] border border-[rgba(201,168,76,0.1)] p-8 rounded-sm flex flex-col justify-between h-full group hover:border-[rgba(201,168,76,0.25)] transition-colors duration-500"
            >
              <div>
                <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4 font-mono text-[9px] uppercase tracking-widest text-[var(--text-secondary)]">
                  <span>{course.duration}</span>
                  <span className="text-[var(--gold)]">{course.level}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-serif font-light text-[#F0EBE3] mb-4 group-hover:text-[var(--gold)] transition-colors duration-300">
                  {course.title}
                </h3>

                <p className="text-[var(--text-secondary)] font-sans font-light text-xs leading-relaxed mb-6">
                  {course.description}
                </p>

                <div className="mb-6 font-mono text-[9px] tracking-widest text-[#4A4540] uppercase">
                  <span>Led by: {course.instructor}</span>
                </div>

                <div className="mb-8">
                  <h4 className="text-[9px] font-mono tracking-[0.2em] text-[var(--gold)] uppercase mb-3">Curriculum Focus</h4>
                  <ul className="space-y-2.5">
                    {course.curriculum.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start text-[11px] text-[var(--text-secondary)] font-light leading-relaxed">
                        <span className="text-[var(--gold)] mr-2 font-mono">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                    <li className="text-[10px] text-[#4A4540] font-mono uppercase tracking-widest pl-4">
                      + And more curriculum modules
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-white/5">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-[var(--text-secondary)]">
                  <span>TUITION</span>
                  <span className="text-[#F0EBE3] font-semibold">{course.price}</span>
                </div>
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="btn-outline w-full justify-center mt-2 cursor-pointer"
                >
                  Apply / Course Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Private Training Statement */}
      <section className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="bg-[#0D0C0F] border border-[rgba(201,168,76,0.1)] p-8 sm:p-12 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-left">
            <span className="label-gold mb-2 block">Custom Mentorship</span>
            <h3 className="text-xl md:text-2xl font-serif font-light text-[#F0EBE3] tracking-wide uppercase mb-3">
              Corporate & 1-on-1 private training
            </h3>
            <p className="text-[var(--text-secondary)] text-sm font-light leading-relaxed">
              We structure custom visual workshops, private DaVinci color grading courses, or university guest lecture modules tailored to your organization&apos;s goals and schedules.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-gold whitespace-nowrap"
          >
            <span>Inquire About Custom Mentorship</span>
          </button>
        </div>
      </section>

      {/* Course Detail Modal & Application Form */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#060608]/96 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => {
              setSelectedCourse(null);
              setEnrollFormStatus(null);
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl bg-[#0D0C0F] border border-[rgba(201,168,76,0.15)] shadow-2xl p-8 sm:p-12 rounded-sm my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setSelectedCourse(null);
                  setEnrollFormStatus(null);
                }}
                className="absolute top-6 right-6 text-[var(--text-secondary)] hover:text-[#F0EBE3] font-mono text-xs uppercase tracking-widest"
              >
                Close ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                
                {/* Course Details (Left) */}
                <div className="flex flex-col gap-6 text-left">
                  <div>
                    <span className="label-gold mb-2 block">{selectedCourse.duration} • {selectedCourse.level}</span>
                    <h3 className="text-2xl font-serif font-light text-[#F0EBE3] tracking-wide uppercase">
                      {selectedCourse.title}
                    </h3>
                    <span className="text-[10px] text-[#4A4540] font-mono tracking-widest uppercase block mt-1">
                      Instructor: {selectedCourse.instructor}
                    </span>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                    {selectedCourse.description}
                  </p>

                  <div>
                    <span className="text-[9px] font-mono tracking-[0.25em] text-[var(--gold)] uppercase block mb-3">Complete Curriculum</span>
                    <ul className="flex flex-col gap-2.5">
                      {selectedCourse.curriculum.map((item, idx) => (
                        <li key={idx} className="flex items-start text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                          <span className="text-[var(--gold)] mr-2 font-mono">{idx + 1}.</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-white/5 pt-4 text-[9px] font-mono uppercase tracking-widest text-[#4A4540]">
                    <span className="block text-[8px] text-[var(--gold)] mb-1">Production Equipment</span>
                    <span className="text-[var(--text-secondary)]">{selectedCourse.equipment}</span>
                  </div>
                </div>

                {/* Enrollment Application Form (Right) */}
                <div className="bg-[#080709] border border-white/5 p-6 sm:p-8 rounded-sm">
                  <div className="mb-6 text-center">
                    <span className="label-gold text-[9px] mb-1 block">Course Application</span>
                    <h4 className="text-sm font-mono tracking-widest uppercase text-[#F0EBE3]">Join Waitlist</h4>
                  </div>

                  {enrollFormStatus ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center p-6 border border-emerald-500/20 bg-emerald-500/[0.02] rounded-sm"
                    >
                      <span className="text-emerald-400 font-sans text-xs font-medium leading-relaxed block">
                        {enrollFormStatus}
                      </span>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleEnrollSubmit} className="flex flex-col gap-4 font-sans text-left">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[9px] font-mono tracking-wider text-gray-500 uppercase">Full Name</label>
                        <input
                          type="text"
                          required
                          className="w-full bg-[#0D0C0F] border border-gray-800 focus:border-[var(--gold)] text-white px-3 py-2 rounded-sm outline-none text-xs transition-colors placeholder-gray-600 focus:ring-1 focus:ring-[var(--gold-bright)]/10"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[9px] font-mono tracking-wider text-gray-500 uppercase">Email Address</label>
                        <input
                          type="email"
                          required
                          className="w-full bg-[#0D0C0F] border border-gray-800 focus:border-[var(--gold)] text-white px-3 py-2 rounded-sm outline-none text-xs transition-colors placeholder-gray-600 focus:ring-1 focus:ring-[var(--gold-bright)]/10"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[9px] font-mono tracking-wider text-gray-500 uppercase">Filmmaking Experience</label>
                        <select className="w-full bg-[#0D0C0F] border border-gray-800 focus:border-[var(--gold)] text-white px-3 py-2 rounded-sm outline-none text-xs transition-colors appearance-none cursor-pointer">
                          <option value="beginner">Beginner (No experience)</option>
                          <option value="intermediate">Intermediate (Active shooter/hobbyist)</option>
                          <option value="advanced">Advanced (Working professional)</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[9px] font-mono tracking-wider text-gray-500 uppercase">Why do you want to join?</label>
                        <textarea
                          rows={3}
                          required
                          placeholder="Tell us about your learning objectives..."
                          className="w-full bg-[#0D0C0F] border border-gray-800 focus:border-[var(--gold)] text-white px-3 py-2 rounded-sm outline-none text-xs transition-colors placeholder-gray-600 resize-none focus:ring-1 focus:ring-[var(--gold-bright)]/10"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isEnrolling}
                        className="btn-gold w-full justify-center py-2.5 text-xs mt-2"
                      >
                        {isEnrolling ? 'Submitting...' : 'Submit Application'}
                      </button>
                    </form>
                  )}
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
