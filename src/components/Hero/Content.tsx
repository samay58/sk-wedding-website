import React from 'react';

interface ContentProps {
  title: string;
  description: string;
}

export function Content({ title, description }: ContentProps) {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl md:text-2xl font-playfair text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow">
          {description}
        </p>
      </div>
    </div>
  );
}