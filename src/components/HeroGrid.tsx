"use client";

import Image from "next/image";

interface HeroGridItem {
  title: string;
  src: string;
  category: string;
}

const items: HeroGridItem[] = [
  { title: "Cinematography", src: "/images/cinema-still.jpg", category: "Reels" },
  { title: "Directing", src: "/images/directing-still.jpg", category: "Reels" },
  { title: "Photography", src: "/images/photo-still.jpg", category: "Commercial" },
  { title: "Editing", src: "/images/editing-still.jpg", category: "Academy" },
];

// fallback if local image not found
const fallbackImages = [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  "https://images.unsplash.com/photo-1499084732479-de2c02d45fc4",
  "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb",
];

export default function HeroGrid() {
  return (
    <section className="py-12 bg-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500"
          >
            <Image
              src={item.src || fallbackImages[index]}
              alt={item.title}
              width={500}
              height={300}
              className="object-cover w-full h-60 group-hover:opacity-80 transition"
              onError={(e) => {
                (e.target as HTMLImageElement).src = fallbackImages[index];
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
