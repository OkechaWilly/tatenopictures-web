'use client';

import { useState } from 'react';
import Image from 'next/image';
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

export default function PhotographyFeature({ limit }: { limit?: number }) {
  const [selected, setSelected] = useState<number | null>(null);
  const visible = typeof limit === 'number' ? photos.slice(0, limit) : photos;

  return (
    <section id="photography" className="bg-[var(--paper)] px-5 py-20 sm:px-8 md:py-28 lg:px-14">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
          <div>
            <span className="eyebrow mb-4">02 / The still image</span>
            <h2 className="display-lg text-[var(--ink)]">Photography.</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[var(--muted)] md:text-base">
            A collection of people, places and moments, observed with care.
          </p>
        </div>

        <div className="masonry-grid">
          {visible.map((photo, index) => (
            <motion.button key={photo.src} type="button" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .1 }} transition={{ duration: .5, delay: (index % 4) * .04 }} onClick={() => setSelected(index)} aria-label={`Open photograph: ${photo.alt}`} className="masonry-item group block w-full cursor-zoom-in text-left">
              <Image src={photo.src} alt={photo.alt} width={1100} height={1400} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="h-auto w-full object-cover" />
              <span className="masonry-item-overlay">
                <span className="text-[10px] font-medium uppercase tracking-[.15em] text-white">{photo.label}</span>
              </span>
            </motion.button>
          ))}
        </div>

        {typeof limit === 'number' && photos.length > limit && (
          <div className="mt-12 flex justify-center">
            <Link href="/photography" className="btn-outline">View the photography archive <span aria-hidden="true">↗</span></Link>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selected !== null && visible[selected] && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }} onKeyDown={(event) => { if (event.key === 'Escape') setSelected(null); }} className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(16,17,15,.96)] p-4 sm:p-8" role="dialog" aria-modal="true" aria-label="Photograph viewer">
            <button type="button" onClick={() => setSelected(null)} className="absolute right-5 top-5 border border-white/30 px-4 py-2 text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black">Close ×</button>
            <div className="flex max-h-[88vh] max-w-6xl flex-col items-center">
              <Image src={visible[selected].src} alt={visible[selected].alt} width={1800} height={1500} className="max-h-[78vh] w-auto max-w-full object-contain" sizes="92vw" />
              <p className="mt-4 text-center text-xs uppercase tracking-[.16em] text-white/65">{visible[selected].label}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
