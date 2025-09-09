// src/components/ScrollSection.tsx
"use client";

import { ReactNode } from 'react';

interface ScrollSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function ScrollSection({ id, children, className = '' }: ScrollSectionProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}