'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const dialog = dialogRef.current;
    const focusable = () => dialog?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ) ?? [];

    focusable()[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key === 'Tab') {
        const items = Array.from(focusable()).filter((item) => item.offsetParent !== null);
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      (previousFocus ?? triggerRef.current)?.focus();
    };
  }, [open]);

  return (
    <section id="contact" className="bg-[var(--paper-bright)] px-5 py-20 sm:px-8 md:py-28 lg:px-14">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-10 border-t border-[var(--line)] pt-10 md:flex-row md:items-end md:justify-between md:pt-14">
        <div className="max-w-3xl">
          <h2 className="text-[clamp(3rem,7vw,7rem)] font-medium leading-[.9] tracking-[-.075em] text-[var(--ink)]">
            Have a project<br/><span className="font-semibold text-[var(--ink)]">in mind?</span>
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-[var(--muted)] md:text-base">
            Tell us what you are planning. We would be glad to hear about your film, photography assignment or creative production.
          </p>
        </div>
        <button ref={triggerRef} type="button" onClick={() => setOpen(true)} className="btn-primary w-fit">Tell us about it</button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }} className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-[rgba(20,21,18,.78)] p-4 backdrop-blur-sm">
            <motion.div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="contact-title" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }} className="relative my-6 w-full max-w-2xl rounded-2xl bg-[var(--paper-bright)] p-6 shadow-2xl sm:p-10">
              <button type="button" onClick={() => setOpen(false)} aria-label="Close enquiry form" className="absolute right-5 top-5 rounded-full px-3 py-2 text-xl text-[var(--muted)] transition hover:bg-black/5 hover:text-[var(--ink)]">×</button>
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
