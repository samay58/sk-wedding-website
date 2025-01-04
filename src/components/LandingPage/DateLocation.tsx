import React from 'react';

export function DateLocation() {
  return (
    <div className="transform transition-transform duration-300">
      {/* Date */}
      <div className="font-playfair text-lg text-black font-bold tracking-wide">
        <time className="relative inline-block">
          Saturday, September 27th, 2025
        </time>
      </div>

      {/* Location */}
      <div className="relative font-playfair text-base text-black">
        <span className="relative inline-block">
          Barcelona, España  
        </span>
      </div>
    </div>
  );
}