'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="w-full bg-[#060608] section-pad page-pad relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--gold-glow)] blur-[180px] pointer-events-none opacity-40" />

      <div className="max-w-[1200px] mx-auto relative z-10 text-center flex flex-col items-center justify-center min-h-[50vh]">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="label-gold mb-6 block"
        >
          Get In Touch
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="display-md text-[#F0EBE3] uppercase leading-tight mb-8"
        >
          Ready to create <br />
          <span className="italic text-[var(--gold)] font-serif font-light lowercase">something</span> unforgettable?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-3 font-mono text-sm tracking-widest text-[var(--text-secondary)] mb-12 uppercase"
        >
          <a href="mailto:info@tatenopictures.com" className="hover:text-[var(--gold)] transition-colors">
            info@tatenopictures.com
          </a>
          <a href="tel:+256700000000" className="hover:text-[var(--gold)] transition-colors">
            +256 (700) 000-000
          </a>
          <span>Kampala, Uganda</span>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          onClick={() => setIsModalOpen(true)}
          className="btn-gold"
        >
          <span>→ Start a Project</span>
        </motion.button>

        {/* Social media connections */}
        <div className="flex gap-8 mt-20 font-mono text-[9px] uppercase tracking-[0.25em] text-[#4A4540]">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold)] transition-colors">
            Instagram
          </a>
          <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold)] transition-colors">
            Vimeo
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold)] transition-colors">
            YouTube
          </a>
        </div>
      </div>

      {/* Modal with full ContactForm */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#060608]/95 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-[#0D0C0F] border border-[rgba(201,168,76,0.15)] shadow-2xl p-8 sm:p-12 rounded-sm"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gold border accent */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-[var(--text-secondary)] hover:text-[#F0EBE3] font-mono text-xs uppercase tracking-widest"
              >
                Close ✕
              </button>

              <div className="mb-10 text-center">
                <span className="label-gold block mb-2">Collaboration Brief</span>
                <h3 className="text-2xl font-serif font-light text-[#F0EBE3] tracking-wide uppercase">
                  Tell Us About Your Vision
                </h3>
              </div>

              <ContactForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}