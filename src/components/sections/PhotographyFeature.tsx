'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface PhotoItem {
  id: string;
  src: string;
  title: string;
  category: string;
}

const photographyWorks: PhotoItem[] = [
  { id: '1', src: '/images/weddings/still-01.jpeg', title: 'Wedding moments', category: 'Weddings' },
  { id: '2', src: '/images/weddings/still-02.jpeg', title: 'Wedding details', category: 'Weddings' },
  { id: '3', src: '/images/photo-still.jpg', title: 'A frame from the field', category: 'Visual stories' },
  { id: '4', src: '/images/weddings/still-03.jpeg', title: 'Celebration', category: 'Weddings' },
  { id: '5', src: '/images/weddings/still-04.jpeg', title: 'Together', category: 'Weddings' },
  { id: '6', src: '/images/directing-still.jpg', title: 'On set', category: 'Behind the scenes' },
  { id: '7', src: '/images/weddings/still-05.jpeg', title: 'The evening light', category: 'Weddings' },
  { id: '8', src: '/images/boat.JPG', title: 'On the water', category: 'Places' },
];

export default function PhotographyFeature({ limit }: { limit?: number }) {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const visiblePhotos = typeof limit === 'number' ? photographyWorks.slice(0, limit) : photographyWorks;

  return (
    <section id="stills" className="border-t border-white/5 bg-[#060608] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <span className="label-gold mb-3 inline-block">The still image collection</span>
            <h2 className="display-lg text-[#F0EBE3]">Photography</h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-7 text-[#8C867F]">
            People, places, celebrations and moments, seen through our lens.
          </p>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {visiblePhotos.map((photo, idx) => (
            <motion.button
              key={photo.id}
              type="button"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: Math.min(idx * 0.04, 0.2) }}
              onClick={() => setSelectedPhoto(photo)}
              aria-label={`View photograph: ${photo.title}`}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-sm bg-[#111014] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A84C]"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                width={1000}
                height={1300}
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.025] group-hover:brightness-90"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 p-4 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
                <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-[#D5B65E]">{photo.category}</span>
                <span className="mt-1 block text-sm font-light text-white">{photo.title}</span>
              </span>
            </motion.button>
          ))}
        </div>

        {typeof limit === 'number' && photographyWorks.length > limit && (
          <div className="mt-12 flex justify-center">
            <Link href="/photography" className="inline-flex items-center gap-3 border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.16em] text-[#F0EBE3] transition-colors hover:border-[#C9A84C] hover:text-[#C9A84C]">
              View all photography <span aria-hidden="true">↗</span>
            </Link>
          </div>
        )}

        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(event) => {
                if (event.target === event.currentTarget) setSelectedPhoto(null);
              }}
              onKeyDown={(event) => {
                if (event.key === 'Escape') setSelectedPhoto(null);
              }}
              className="fixed inset-0 z-[70] flex cursor-zoom-out items-center justify-center bg-[#060608]/95 p-4 backdrop-blur-md md:p-8"
            >
              <div className="absolute right-5 top-5 flex gap-3">
                <button type="button" onClick={() => setSelectedPhoto(null)} className="border border-white/20 px-4 py-2 text-xs uppercase tracking-widest text-white hover:border-[#C9A84C]" aria-label="Close photograph">
                  Close <span aria-hidden="true">×</span>
                </button>
              </div>
              <motion.div
                initial={{ scale: 0.97, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.97, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex max-h-[86vh] max-w-6xl flex-col items-center"
              >
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  width={1800}
                  height={1400}
                  className="max-h-[78vh] w-auto max-w-full rounded-sm object-contain"
                  sizes="90vw"
                />
                <div className="mt-4 text-center">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#C9A84C]">{selectedPhoto.category}</span>
                  <h3 className="mt-1 font-serif text-xl font-light text-[#F0EBE3]">{selectedPhoto.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
