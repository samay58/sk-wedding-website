import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-16">
      <h2 className="text-4xl font-playfair font-bold mb-8">{title}</h2>
      {children}
    </section>
  );
}