// src/components/MasonryGrid.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MasonryItem {
  id: string;
  src: string;
  title?: string;
  category?: string;
}

interface MasonryGridProps {
  items: MasonryItem[];
  columns?: number;
}

export default function MasonryGrid({ items, columns = 3 }: MasonryGridProps) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => new Set(prev).add(id));
  };

  return (
    <div className="w-full">
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-4`}>
        {items.map((item, index) => (
          <Link
            key={item.id}
            href={`/stills/${item.id}`}
            className="block transform transition-transform duration-700 hover:scale-105 masonry-entrance"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden rounded-lg group bg-gray-200">
              
              {/* Image container */}
              <div className="relative w-full h-64">
                <Image
                  src={item.src}
                  alt={item.title || 'Photo'}
                  fill
                  className="object-cover rounded-lg transition-opacity duration-300"
                  style={{ 
                    opacity: loadedImages.has(item.id) ? 1 : 0 
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onLoad={() => handleImageLoad(item.id)}
                  onError={(e) => console.error('❌ Image failed:', item.src, e)}
                />
                
                {/* Loading skeleton - only shows while image is loading */}
                {!loadedImages.has(item.id) && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg"></div>
                )}
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <div className="p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
                  {item.title && (
                    <h3 className="text-white font-semibold text-sm truncate">{item.title}</h3>
                  )}
                  {item.category && (
                    <p className="text-gray-200 text-xs">{item.category}</p>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}