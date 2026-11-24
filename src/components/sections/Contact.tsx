'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <section id="contact" className="bg-[var(--paper-bright)] px-5 py-20 sm:px-8 md:py-28 lg:px-14">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-10 border-t border-[var(--line)] pt-10 md:flex-row md:items-end md:justify-between md:pt-14">
        <div className="max-w-3xl">
          <span className="eyebrow mb-5">05 / Start a conversation</span>
          <h2 className="text-[clamp(3rem,7vw,7rem)] font-medium leading-[.9] tracking-[-.075em] text-[var(--ink)]">
            Have a project<br/><span className="font-serif font-normal italic text-[var(--accent)]">in mind?</span>
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-[var(--muted)] md:text-base">
            Tell us what you are planning. We would be glad to hear about your film, photography assignment or creative production.
          </p>
        </div>
        <button type="button" onClick={() => setOpen(true)} className="btn-primary w-fit">Tell us about it <span aria-hidden="true">↗</span></button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }} className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-[rgba(20,21,18,.78)] p-4 backdrop-blur-sm">
            <motion.div role="dialog" aria-modal="true" aria-labelledby="contact-title" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }} className="relative my-6 w-full max-w-2xl bg-[var(--paper-bright)] p-6 sm:p-10">
              <button type="button" onClick={() => setOpen(false)} aria-label="Close enquiry form" className="absolute right-5 top-5 text-2xl text-[var(--muted)] hover:text-[var(--ink)]">×</button>
              <span className="eyebrow">Project enquiry</span>
              <h3 id="contact-title" className="mb-8 mt-3 text-3xl font-semibold tracking-[-.05em] text-[var(--ink)]">Tell us what you have in mind.</h3>
              <ContactForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
