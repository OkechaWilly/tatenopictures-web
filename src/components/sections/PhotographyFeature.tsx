'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const photos = [
  { src: '/images/weddings/still-01.jpeg', alt: 'A moment from a wedding celebration', label: 'Weddings' },
  { src: '/images/photo-still.jpg', alt: 'A photographic study', label: 'Visual stories' },
  { src: '/images/weddings/still-02.jpeg', alt: 'A wedding portrait', label: 'Weddings' },
  { src: '/images/boat.JPG', alt: 'A scene on the water', label: 'Places' },
  { src: '/images/weddings/still-03.jpeg', alt: 'A moment during a celebration', label: 'Weddings' },
  { src: '/images/africans.jpg', alt: 'People in a shared moment', label: 'People' },
  { src: '/images/weddings/still-04.jpeg', alt: 'A wedding detail', label: 'Weddings' },
  { src: '/images/weddings/still-05.jpeg', alt: 'A wedding celebration', label: 'Weddings' },
];

const categories = ['All', 'Weddings', 'People', 'Places', 'Visual stories'];

export default function PhotographyFeature({ limit }: { limit?: number }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [category, setCategory] = useState('All');
  const viewerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeTriggerRef = useRef<HTMLButtonElement | null>(null);
  const visible = (typeof limit === 'number' ? photos.slice(0, limit) : photos)
    .filter((photo) => category === 'All' || photo.label === category);

  const closeViewer = useCallback(() => setSelected(null), []);
  const showPrevious = useCallback(() => {
    setSelected((current) => current === null ? null : (current - 1 + visible.length) % visible.length);
  }, [visible.length]);
  const showNext = useCallback(() => {
    setSelected((current) => current === null ? null : (current + 1) % visible.length);
  }, [visible.length]);

  useEffect(() => {
    if (selected === null) return;
    const previousOverflow = document.body.style.overflow;
    const focusable = () => Array.from(viewerRef.current?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
    ) ?? []).filter((item) => item.offsetParent !== null);

    closeButtonRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeViewer();
      }
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
      if (event.key === 'Tab') {
        const items = focusable();
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
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      activeTriggerRef.current?.focus();
    };
  }, [selected, closeViewer, showPrevious, showNext]);

  return (
    <section id="photography" className="bg-[var(--paper)] px-5 py-12 sm:px-8 md:py-20 lg:px-14">
      <div className="mx-auto max-w-[1500px]">
        {typeof limit === 'number' && (
          <div className="mb-9 flex flex-col justify-between gap-5 border-b border-[var(--line)] pb-6 sm:flex-row sm:items-end md:mb-12 md:pb-8">
            <div>
              
              <h2 className="display-lg max-w-3xl text-[var(--ink)]">People, places and the moments between.</h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--muted)] md:text-base">
                A closer look at the details, character and atmosphere that make every story worth remembering.
              </p>
            </div>
            <span className="pb-1 font-mono text-[10px] uppercase tracking-[.14em] text-[var(--muted)]">A growing visual archive</span>
          </div>
        )}
        {!limit && (
          <div className="mb-8 flex flex-col justify-between gap-6 border-b border-[var(--line)] pb-5 sm:flex-row sm:items-end">
            <div>
              <h2 className="display-md mb-3 font-semibold text-[var(--ink)]">A closer look.</h2>
              <p className="max-w-md text-sm leading-7 text-[var(--muted)]">A growing collection of people, places and moments, seen through our lens.</p>
            </div>
            <div className="flex gap-x-6 gap-y-3 overflow-x-auto" aria-label="Filter photographs">
              {categories.map((item) => (
                <button key={item} type="button" onClick={() => { setCategory(item); setSelected(null); }} aria-pressed={category === item} className={`filter-tab whitespace-nowrap ${category === item ? 'active' : ''}`}>
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="masonry-grid">
          {visible.map((photo, index) => (
            <motion.button
              key={photo.src}
              type="button"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .1 }}
              transition={{ duration: .5, delay: (index % 4) * .04 }}
              onClick={(event) => { activeTriggerRef.current = event.currentTarget; setSelected(index); }}
              aria-label={`Open photograph: ${photo.alt}`}
              className="masonry-item group block w-full cursor-zoom-in text-left"
            >
              <img src={photo.src} alt={photo.alt} loading={index < 4 ? 'eager' : 'lazy'} className="h-auto w-full" />
              <span className="masonry-item-overlay">
                <span className="text-[10px] font-medium uppercase tracking-[.15em] text-white">{photo.label}</span>
                
              </span>
            </motion.button>
          ))}
        </div>

        {visible.length === 0 && <p className="py-20 text-center text-sm text-[var(--muted)]">More photographs in this collection are coming soon.</p>}

        {typeof limit === 'number' && photos.length > limit && (
          <div className="mt-12 flex justify-center">
            <Link href="/photography" className="btn-outline">View photography archive</Link>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selected !== null && visible[selected] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(event) => { if (event.target === event.currentTarget) closeViewer(); }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(16,17,15,.97)] p-4 sm:p-8"
            ref={viewerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Photograph viewer"
          >
            <button ref={closeButtonRef} type="button" onClick={closeViewer} className="absolute right-5 top-5 z-10 rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-black">Close</button>
            <button type="button" onClick={showPrevious} aria-label="Previous photograph" className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-black sm:left-7">Previous</button>
            <div className="flex max-h-[88vh] max-w-6xl flex-col items-center">
              <img src={visible[selected].src} alt={visible[selected].alt} className="max-h-[78vh] max-w-full object-contain" />
              <p className="mt-4 text-center text-sm text-white/70">{visible[selected].label}</p>
            </div>
            <button type="button" onClick={showNext} aria-label="Next photograph" className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-black sm:right-7">Next</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
