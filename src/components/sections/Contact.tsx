'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="bg-[#060608] section-pad page-pad border-t border-[rgba(201,168,76,0.05)] relative overflow-hidden flex items-center min-h-[75vh]">
      {/* Background radial glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[rgba(201,168,76,0.02)] rounded-full filter blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
        
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-gold mb-4 inline-block"
        >
          Collaboration
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl font-serif font-light text-[#F0EBE3] tracking-tight leading-tight mb-8"
        >
          Tell us about your <span className="italic text-[#C9A84C]">Vision</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#8C867F] font-sans font-light text-base leading-relaxed max-w-xl mx-auto mb-12"
        >
          Whether you want to discuss a feature film script, request a quote for commercial video production, or enroll in our next masterclass, we are ready to bring your ideas to life.
        </motion.p>

        {/* CTA Button to open Contact Modal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <button onClick={() => setIsModalOpen(true)} className="btn-gold px-10">
            Start a Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
          
          <a href="mailto:info@tatenopictures.com" className="btn-outline px-10">
            Direct Email
          </a>
        </motion.div>

        {/* Quick Contacts Footer Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-[rgba(201,168,76,0.08)] pt-12 text-center"
        >
          <div>
            <span className="text-[10px] font-mono text-[#C9A84C] uppercase tracking-widest block mb-1">Direct Line</span>
            <a href="tel:+25670000000" className="text-sm font-sans font-light text-[#F0EBE3] hover:text-[#C9A84C] transition-colors">
              +256 (700) 000-000
            </a>
          </div>
          <div>
            <span className="text-[10px] font-mono text-[#C9A84C] uppercase tracking-widest block mb-1">Studio Desk</span>
            <a href="mailto:info@tatenopictures.com" className="text-sm font-sans font-light text-[#F0EBE3] hover:text-[#C9A84C] transition-colors">
              info@tatenopictures.com
            </a>
          </div>
          <div>
            <span className="text-[10px] font-mono text-[#C9A84C] uppercase tracking-widest block mb-1">HQ Location</span>
            <span className="text-sm font-sans font-light text-[#F0EBE3]">
              Kampala, Uganda
            </span>
          </div>
        </motion.div>

      </div>

      {/* Full screen contact form modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#060608]/95 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0D0C0F] border border-[rgba(201,168,76,0.15)] p-6 sm:p-10 rounded max-w-xl w-full relative my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-[#8C867F] hover:text-[#F0EBE3] p-2"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="mb-6">
                <span className="label-gold mb-1 inline-block">Project Brief</span>
                <h3 className="text-2xl font-serif font-light text-[#F0EBE3]">Start your visual campaign</h3>
              </div>

              {/* Embedded Contact Form Component */}
              <ContactForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}