import React, { useCallback, useEffect, useRef } from 'react';

export function MainHeading() {
  const sparkleContainerRef = useRef<HTMLDivElement>(null);

  const createSparkle = useCallback((container: HTMLElement) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    // Random size between 4px and 8px
    const size = Math.random() * 4 + 4;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    
    // Random position within the container
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    sparkle.style.left = `${left}%`;
    sparkle.style.top = `${top}%`;
    
    // Random translation
    const tx = (Math.random() - 0.5) * 50;
    const ty = (Math.random() - 0.5) * 50;
    sparkle.style.setProperty('--tx', `${tx}px`);
    sparkle.style.setProperty('--ty', `${ty}px`);
    
    // Add animation
    sparkle.style.animation = `sparkleFloat ${Math.random() * 1 + 1}s ease-in-out forwards`;
    
    container.appendChild(sparkle);
    
    // Remove sparkle after animation
    setTimeout(() => {
      sparkle.remove();
    }, 2000);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!sparkleContainerRef.current) return;
    
    // Create 1-3 sparkles on each mouse move
    const sparkleCount = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < sparkleCount; i++) {
      createSparkle(sparkleContainerRef.current);
    }
  }, [createSparkle]);

  useEffect(() => {
    const container = sparkleContainerRef.current;
    if (!container) return;

    container.addEventListener('mousemove', handleMouseMove);
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div className="relative space-y-6">
      <div className="relative">
        {/* Decorative circle */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32">
          <div className="absolute inset-0 rounded-full border border-[#7a6e5a]/20 animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-2 rounded-full border border-[#7a6e5a]/15 animate-[spin_25s_linear_infinite_reverse]" />
          <div className="absolute inset-4 rounded-full border border-[#7a6e5a]/10 animate-[spin_30s_linear_infinite]" />
        </div>

        {/* Heading Container */}
        <div className="relative flex flex-col items-center" ref={sparkleContainerRef}>
          {['Veni', 'Vidi', 'Vici'].map((word, index) => (
            <div
              key={word}
              className="relative group"
              style={{
                transform: `translateX(${index * 40}px)`,
                opacity: 0,
                animation: `fadeSlideIn 0.8s ease-out ${index * 0.2}s forwards`
              }}
            >
              <span className="relative block text-black font-herbert text-7xl md:text-8xl tracking-wider">
                {/* Sparkle effect container */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-black-200/0 via-black-200/30 to-black-200/0 blur-md" />
                  <span className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-black/0 via-black/30 to-black/0 mix-blend-overlay blur-lg" />
                </span>

                {/* Background gradient text */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#141413] via-[#2e2e2b] to-[#383835] bg-clip-text text-transparent animate-gradient-x blur-sm">
                  {word}
                </span>
                {/* Foreground text */}
                <span className="relative text-black bg-gradient-to-r from-[#141413] via-[#2e2e2b] to-[#383835] bg-clip-text text-transparent animate-gradient-x group-hover:from-[#8d7f68] group-hover:via-[#b3a68c] group-hover:to-[#8d7f68] transition-all duration-500">
                  {word}
                </span>
              </span>
              
              {/* Decorative line */}
              <div 
                className="absolute -right-20 top-1/2 w-16 h-[1px] bg-gradient-to-r from-[#7a6e5a]/30 to-transparent"
                style={{ opacity: index === 2 ? 0 : 1 }}
              />
            </div>
          ))}
        </div>

        {/* Ambient glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8e1e6]/10 via-[#e8f1f5]/10 to-[#f5e6e8]/10 blur-3xl" />
      </div>

      {/* Bottom decorative element */}
      <div className="relative h-[2px] w-48 mx-auto overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7a6e5a]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse" />
      </div>
    </div>
  );
}