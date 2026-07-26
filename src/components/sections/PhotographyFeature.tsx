'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PhotoItem {
  id: string;
  src: string;
  title: string;
  category: string;
  aspect?: string;
}

const photographyWorks: PhotoItem[] = [
  { id: '1', src: '/images/weddings/still-01.jpeg', title: 'Emotional Portrait', category: 'Weddings' },
  { id: '2', src: '/images/weddings/still-02.jpeg', title: 'Groom Details', category: 'Weddings' },
  { id: '3', src: '/images/photo-still.jpg', title: 'Cinematic Frame', category: 'Narrative' },
  { id: '4', src: '/images/weddings/still-03.jpeg', title: 'The Toast', category: 'Weddings' },
  { id: '5', src: '/images/weddings/still-04.jpeg', title: 'Bride & Groom Dance', category: 'Weddings' },
  { id: '6', src: '/images/directing-still.jpg', title: 'Director Action', category: 'Editorial' },
  { id: '7', src: '/images/weddings/still-05.jpeg', title: 'Sunset Magic Hour', category: 'Weddings' },
  { id: '8', src: '/images/boat.JPG', title: 'Lake Crossing', category: 'Travel' },
];

export default function PhotographyFeature() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  return (
    <section id="stills" className="bg-[#060608] section-pad page-pad border-t border-[rgba(201,168,76,0.05)]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="label-gold mb-3 inline-block">Still Images</span>
            <h2 className="display-lg text-[#F0EBE3]">Photography</h2>
          </div>
          <p className="text-[#8C867F] font-sans font-light text-sm max-w-sm leading-relaxed">
            Capturing frozen moments of beauty, narrative frames, and real human emotion using medium format digital sensors and classic optics.
          </p>
        </div>

        {/* CSS Columns True Masonry Grid */}
        <div className="masonry-grid">
          {photographyWorks.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedPhoto(photo)}
              className="masonry-item rounded overflow-hidden"
            >
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
              />
              
              {/* Gold border layout decoration on hover */}
              <div className="absolute inset-0 border border-transparent hover:border-[rgba(201,168,76,0.2)] transition-colors duration-500 rounded pointer-events-none" />

              {/* Hover Text Info Overlay */}
              <div className="masonry-item-overlay">
                <div>
                  <span className="text-[9px] font-mono text-[#C9A84C] uppercase tracking-widest block mb-1">
                    {photo.category}
                  </span>
                  <h4 className="text-sm font-sans font-light text-[#F0EBE3]">
                    {photo.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cinematic Lightbox Modal (Click to view full screen) */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 z-50 bg-[#060608]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
              >
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="max-w-full max-h-[80vh] object-contain rounded border border-[rgba(201,168,76,0.1)] shadow-2xl"
                />
                <div className="mt-4 text-center">
                  <span className="text-[10px] font-mono text-[#C9A84C] uppercase tracking-widest block mb-1">
                    {selectedPhoto.category}
                  </span>
                  <h3 className="text-lg font-serif font-light text-[#F0EBE3]">
                    {selectedPhoto.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
