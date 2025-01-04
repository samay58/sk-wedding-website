import React, { useState } from 'react';
import { useDelayedAppear } from '../../../hooks/useDelayedAppear';
import { useSound } from '../../../hooks/useSound';
import { HeartLoader } from './HeartLoader';
import { LoadingText } from './LoadingText';
import { createSparkleConfetti } from './confettiEffects';

interface EnterButtonProps {
  onClick: () => void;
}

export function EnterButton({ onClick }: EnterButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const isVisible = useDelayedAppear();
  const playChime = useSound('https://res.cloudinary.com/dapwx5nno/video/upload/v1735003563/sparkle_ting3.mp3');

  const handleClick = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    playChime();
    createSparkleConfetti();

    // Start the loading sequence
    setTimeout(() => {
      onClick();
      setIsLoading(false);
    }, 4500); // Increased to allow for all loading text phrases
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={`
        relative px-8 md:px-12 py-4 md:py-5 
        ${isLoading ? 'bg-white/95' : 'bg-white/90'} 
        text-gray-800 rounded-full overflow-hidden 
        shadow-lg group disabled:opacity-50
        transition-all duration-1000 ease-out
        ${isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
        }
        ${isLoading ? 'glow' : ''}
      `}
    >
      <span className="relative z-10 font-serif text-lg md:text-xl font-medium tracking-wide flex items-center gap-3">
        {isLoading ? (
          <>
            <HeartLoader />
            <LoadingText />
          </>
        ) : (
          <>
            Enter the wedding website
            <span className="transform group-hover:rotate-12 transition-transform duration-300">
              💝
            </span>
          </>
        )}
      </span>
      <div 
        className={`
          absolute inset-0 bg-gradient-to-r from-pink-100/50 via-purple-100/50 to-blue-100/50 
          transform transition-all duration-500
          ${isLoading ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'}
        `}
      />
    </button>
  );
}