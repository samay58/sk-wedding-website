import React from 'react';

export function ImageSection() {
  return (
    <div className="relative md:h-screen h-[70vh] md:w-1/2 w-full">
      {/* Container for image and overlays */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main image */}
        <img
          src="https://res.cloudinary.com/dapwx5nno/image/upload/v1734978188/eydvnppqktcyd7zofvlb.jpg"
          alt="Wedding couple"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
        />

        {/* Gradient overlays for visual cohesion */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        
        {/* Subtle blur overlay for mobile */}
        <div className="absolute inset-0 backdrop-blur-[1px] md:backdrop-blur-none bg-black/10 md:bg-transparent" />
      </div>
    </div>
  );
}