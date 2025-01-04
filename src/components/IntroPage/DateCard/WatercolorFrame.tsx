import React from 'react';

interface WatercolorFrameProps {
  children: React.ReactNode;
}

export function WatercolorFrame({ children }: WatercolorFrameProps) {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-200/40 via-purple-200/40 to-blue-200/40 blur-3xl transform -rotate-3" />
      <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
        {children}
      </div>
    </div>
  );
}