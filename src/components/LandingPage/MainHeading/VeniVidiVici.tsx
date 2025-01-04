import React from 'react';

const words = ['Our Story', 'The Wedding', 'Logistics'];

export function VeniVidiVici() {
  return (
    <div className="flex flex-col items-center space-y-6">
      {words.map((word, index) => (
        <div
          key={word}
          className="relative group"
          style={{
            transform: `translateX(${index * 20}px)`,
            opacity: 0,
            animation: `fadeSlideIn 0.8s ease-out ${index * 0.2}s forwards`
          }}
        >
          <span className="relative text-black block font-['Herbert'] text-8xl md:text-9xl tracking-widest font-black">
            {/* Shadow effect */}
            <span className="absolute inset-0 blur-sm text-black/80">
              {word}
            </span>
            
            {/* Main text */}
            <span className="relative text-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              {word}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}