import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { useDelayedAppear } from '../../hooks/useDelayedAppear';

interface EnterButtonProps {
  onClick: () => void;
}

export function EnterButton({ onClick }: EnterButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const isVisible = useDelayedAppear();

  const createWatercolorConfetti = () => {
    const colors = ['#f9d5e5', '#eeac99', '#e06377', '#c83349', '#d6cbd3'];
    
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ['circle'],
      colors
    };

    confetti({
      ...defaults,
      particleCount: 50,
      scalar: 2,
      origin: { x: 0.3, y: 0.6 }
    });

    confetti({
      ...defaults,
      particleCount: 50,
      scalar: 2,
      origin: { x: 0.7, y: 0.6 }
    });
  };

  const handleClick = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    createWatercolorConfetti();

    setTimeout(() => {
      onClick();
      setIsLoading(false);
    }, 1500);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={`
        relative px-8 md:px-12 py-4 md:py-5 bg-white/90 text-gray-800 rounded-full 
        overflow-hidden shadow-lg group disabled:opacity-50
        transition-all duration-1000 ease-out
        ${isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
        }
      `}
    >
      <span className="relative z-10 font-serif text-lg md:text-xl font-medium tracking-wide flex items-center gap-3">
        {isLoading ? (
          <>
            <span className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
            Loading...
          </>
        ) : (
          <>
            Enter the wedding website
            <span className="transform group-hover:rotate-12 transition-transform duration-300">
              🎉
            </span>
          </>
        )}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 via-purple-100/50 to-blue-100/50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
    </button>
  );
}