import React from 'react';
import { CarouselSlideProps } from './types';

export function CarouselSlide({ image, isActive }: CarouselSlideProps) {
  return (
    <div className="relative h-full w-full">
      <img
        src={image.url}
        alt={image.alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      
      {/* Content Overlay */}
      <div 
        className={`absolute inset-0 flex flex-col justify-end p-8 transition-opacity duration-500
          ${isActive ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="text-white space-y-2">
          {image.title && (
            <h3 
              className="font-serif text-3xl transform transition-all duration-700"
              style={{ 
                transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                opacity: isActive ? 1 : 0 
              }}
            >
              {image.title}
            </h3>
          )}
          {image.location && (
            <p 
              className="text-lg text-white/90 transform transition-all duration-700 delay-100"
              style={{ 
                transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                opacity: isActive ? 1 : 0 
              }}
            >
              {image.location}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}