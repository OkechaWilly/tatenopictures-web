'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function AcademyTeaser() {
  return (
    <section id="academy" className="bg-[#E9E6DE] px-5 py-20 sm:px-8 md:py-28 lg:px-14">
      <div className="mx-auto grid max-w-[1500px] items-center gap-10 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
        <div className="relative aspect-[1.15] overflow-hidden bg-[#D2CEC4]">
          <Image src="/images/directing-still.jpg" alt="A practical moment on a production set" fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" />
        </div>
        <div className="max-w-2xl">
          
          <h2 className="text-[clamp(2.7rem,5vw,5rem)] font-medium leading-[.98] tracking-[-.07em] text-[var(--ink)]">
            Sharing the craft. Making room for others.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-8 text-[var(--muted)] md:text-base">
            Since 2023, we have been helping young people in our community develop practical skills in graphic design, camera work, photography and video editing — with opportunities to experience real productions.
          </p>
          <Link href="/academy" className="btn-outline mt-8">Explore the Academy</Link>
        </div>
      </div>
    </section>
  );
}
