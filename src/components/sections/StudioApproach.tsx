'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const stages = [
  {
    number: '01',
    title: 'Understand the brief',
    description: 'We start with the story, audience, purpose and practical needs behind your project.',
  },
  {
    number: '02',
    title: 'Shape the approach',
    description: 'We work through the creative direction, scope, schedule and production requirements together.',
  },
  {
    number: '03',
    title: 'Make the work',
    description: 'We bring the right people and production elements together to capture the work with care.',
  },
  {
    number: '04',
    title: 'Finish & deliver',
    description: 'We shape the final piece through editing, colour and a considered delivery of the agreed outputs.',
  },
];

export default function StudioApproach() {
  return (
    <section className="bg-[var(--paper-bright)] px-5 py-20 sm:px-8 md:py-28 lg:px-14">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-8 border-b border-[var(--line)] pb-10 md:grid-cols-[.9fr_1.1fr] md:items-end md:pb-14">
          <div>
            
            <h2 className="display-lg max-w-2xl">Good work starts with a clear process.</h2>
          </div>
          <div className="max-w-xl md:justify-self-end">
            <p className="text-sm leading-8 text-[var(--muted)] md:text-base">
              Every project is different. We keep the process collaborative and practical — aligning on what needs to be made, how we will make it and what the finished work needs to do.
            </p>
            <Link href="/#contact" className="btn-outline mt-6">Discuss a project</Link>
          </div>
        </div>

        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage, index) => (
            <motion.article
              key={stage.number}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="border-b border-[var(--line)] py-7 sm:pr-7 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              
              <h3 className="mt-8 text-xl font-semibold tracking-[-.045em] text-[var(--ink)]">{stage.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-[var(--muted)]">{stage.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
