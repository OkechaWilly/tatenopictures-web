'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="relative flex min-h-[65vh] items-center overflow-hidden border-t border-white/5 bg-[#060608] px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-[rgba(201,168,76,0.025)] blur-[150px]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-gold mb-5 inline-block"
        >
          Start a conversation
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-7 max-w-4xl font-serif text-4xl font-light leading-[1.08] tracking-tight text-[#F0EBE3] sm:text-6xl md:text-7xl"
        >
          Have a story to tell?
          <span className="block italic text-[#C9A84C]">Let’s make it visible.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto mb-10 max-w-2xl text-sm font-light leading-8 text-[#8C867F] md:text-base"
        >
          Tell us what you are planning. Whether it is a film, a photography assignment or a creative production, we would be glad to hear about it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="btn-gold px-10"
          >
            Discuss a project
            <span aria-hidden="true">↗</span>
          </button>
          <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#6F6962]">
            Kampala, Uganda · Available for selected projects
          </span>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) setIsModalOpen(false);
            }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#060608]/95 p-4 backdrop-blur-xl"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-brief-title"
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative my-8 w-full max-w-xl rounded border border-[rgba(201,168,76,0.15)] bg-[#0D0C0F] p-6 sm:p-10"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 p-2 text-[#8C867F] transition-colors hover:text-[#F0EBE3]"
                aria-label="Close project enquiry form"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="mb-6">
                <span className="label-gold mb-1 inline-block">Project enquiry</span>
                <h3 id="project-brief-title" className="font-serif text-2xl font-light text-[#F0EBE3]">
                  Tell us what you have in mind.
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
