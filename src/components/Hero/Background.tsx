import React from 'react';

export function Background() {
  return (
    <div className="absolute inset-0">
      {/* Background Image with blur effect */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.midjourney.com/b60c7d79-52de-499d-a109-6c9d35cd908b/0_0.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-[2px]"
        />
      </div>

      {/* Multiple overlays for depth and frosted effect */}
      <div className="absolute inset-0 bg-black/40" /> {/* Darkening layer */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" /> {/* Frosted glass effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" /> {/* Gradient vignette */}
      <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-20" /> {/* Noise texture */}
    </div>
  );
}