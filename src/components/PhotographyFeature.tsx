'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface StillPhoto {
  id: string;
  src: string;
  title: string;
  category: string;
  aspectRatio: string; // 'portrait' | 'landscape' | 'square'
}

const stillsData: StillPhoto[] = [
  {
    id: 'still-1',
    src: '/images/weddings/still-01.jpeg',
    title: 'Anamorphic Silhouette',
    category: 'Wedding Still',
    aspectRatio: 'portrait',
  },
  {
    id: 'still-2',
    src: '/images/weddings/still-04.jpeg',
    title: 'The Golden Hour Gaze',
    category: 'Fine Art Portrait',
    aspectRatio: 'landscape',
  },
  {
    id: 'still-3',
    src: '/images/music/sda.png',
    title: 'Live Production Sync',
    category: 'Event Still',
    aspectRatio: 'square',
  },
  {
    id: 'still-4',
    src: '/images/weddings/still-02.jpeg',
    title: 'Stolen Glance',
    category: 'Wedding Still',
    aspectRatio: 'portrait',
  },
  {
    id: 'still-5',
    src: '/images/photo-still.jpg',
    title: 'Monochrome Gaze',
    category: 'Editorial Stills',
    aspectRatio: 'square',
  },
  {
    id: 'still-6',
    src: '/images/boat.JPG',
    title: 'The Voyager\'s Drift',
    category: 'Narrative Still',
    aspectRatio: 'landscape',
  },
  {
    id: 'still-7',
    src: '/images/weddings/still-03.jpeg',
    title: 'Lace & Light',
    category: 'Bridal Portrait',
    aspectRatio: 'portrait',
  },
  {
    id: 'still-8',
    src: '/images/weddings/still-05.jpeg',
    title: 'Vows Whispered',
    category: 'Wedding Still',
    aspectRatio: 'landscape',
  }
];

export default function PhotographyFeature() {
  const [selectedPhoto, setSelectedPhoto] = useState<StillPhoto | null>(null);

  return (
    <section id="photography" className="w-full bg-[#060608] section-pad page-pad relative">
      {/* Divider */}
      <div className="gold-rule mb-24 opacity-25" />

      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="label-gold block mb-3">Stills & Fine Art</span>
            <h2 className="display-lg uppercase text-[var(--text-primary)]">
              Photography
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] font-sans font-light text-sm max-w-sm leading-relaxed">
            Capturing high-fidelity single frames that tell complete stories. Focused on cinematic lighting, authentic expressions, and high dynamic range texture.
          </p>
        </div>

        {/* Masonry-like Grid Column Layout */}
        <div className="masonry-grid w-full">
          {stillsData.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="masonry-item group"
              onClick={() => setSelectedPhoto(photo)}
            >
              {/* Image Frame */}
              <div className="relative overflow-hidden w-full bg-neutral-900 border border-white/5">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-90 group-hover:brightness-95 saturate-[0.8]"
                />

                {/* Ambient Overlay */}
                <div className="masonry-item-overlay">
                  <div className="flex flex-col gap-1 z-10 pointer-events-none transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="text-[8px] font-mono text-[var(--gold)] uppercase tracking-[0.2em]">
                      {photo.category}
                    </span>
                    <span className="text-sm font-serif font-light text-[#F0EBE3] tracking-wide">
                      {photo.title}
                    </span>
                  </div>
                </div>

                {/* Click action indicator */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-[#F0EBE3]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cinematic Lightbox Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 bg-[#060608]/98 z-50 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            >
              <button 
                className="absolute top-8 right-8 text-[#F0EBE3] opacity-60 hover:opacity-100 transition-opacity p-2 font-mono text-xs uppercase tracking-widest"
                onClick={() => setSelectedPhoto(null)}
              >
                Close ✕
              </button>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-[90vw] max-h-[80vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="max-w-full max-h-[75vh] object-contain border border-[rgba(201,168,76,0.15)] shadow-2xl"
                />

                <div className="absolute bottom-[-50px] left-0 right-0 text-center flex flex-col gap-1 font-mono text-xs uppercase">
                  <span className="text-[var(--gold)] tracking-widest">{selectedPhoto.category}</span>
                  <span className="text-[#F0EBE3] tracking-widest text-[10px]">{selectedPhoto.title}</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
