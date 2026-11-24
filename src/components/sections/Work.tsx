'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projectsData } from '@/lib/projects';

export default function Work({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState('all');
  const filters = [
    { label: 'All work', value: 'all' },
    { label: 'Documentary & film', value: 'narrative' },
    { label: 'Music & production', value: 'branded' },
    { label: 'Weddings & events', value: 'events' },
  ];
  const filtered = projectsData.filter((project) => filter === 'all' || project.category === filter);
  const visible = typeof limit === 'number' ? filtered.slice(0, limit) : filtered;

  return (
    <section id="work" className="bg-[var(--paper-bright)] px-5 py-20 sm:px-8 md:py-28 lg:px-14">
      <div className="mx-auto max-w-[1500px]">
        {typeof limit === 'number' && (
          <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
            <div>
              <span className="eyebrow mb-4">01 / Selected work</span>
              <h2 className="display-lg text-[var(--ink)]">Made to be seen.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[var(--muted)] md:text-base">
              A selection of film, music video, documentary and event work from the studio.
            </p>
          </div>
        )}

        {!limit && (
          <div className="mb-9 flex gap-7 overflow-x-auto border-b border-[var(--line)]">
            {filters.map((item) => (
              <button key={item.value} type="button" onClick={() => setFilter(item.value)} className={`filter-tab ${filter === item.value ? 'active' : ''}`}>
                {item.label}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-12 md:gap-x-7 md:gap-y-14">
          {visible.map((project, index) => {
            const featured = index === 0 || index === 3;
            return (
              <motion.article key={project.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .55, delay: (index % 2) * .08 }} className={`group ${featured ? 'md:col-span-7' : 'md:col-span-5'} ${index % 2 === 1 ? 'md:mt-16' : ''}`}>
                <Link href={`/work/${project.slug}`} className="block">
                  <div className={`relative overflow-hidden bg-[#E5E2D9] ${featured ? 'aspect-[1.2]' : 'aspect-[.98]'}`}>
                    <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 60vw" priority={index === 0} className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                    <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--paper-bright)] text-lg text-[var(--ink)] opacity-0 transition-all duration-300 group-hover:opacity-100">↗</span>
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4 border-b border-[var(--line)] pb-4">
                    <div>
                      <span className="eyebrow text-[10px]">{project.categoryLabel}</span>
                      <h3 className="mt-2 text-xl font-semibold tracking-[-.045em] text-[var(--ink)] sm:text-2xl">{project.title}</h3>
                    </div>
                    <span className="mt-5 text-xs text-[var(--muted)]">0{index + 1}</span>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {typeof limit === 'number' && projectsData.length > limit && (
          <div className="mt-14 flex justify-center">
            <Link href="/work" className="btn-outline">View all film & video work <span aria-hidden="true">↗</span></Link>
          </div>
        )}
      </div>
    </section>
  );
}
