import React from 'react';
import { VeniVidiVici } from './VeniVidiVici';

export function MainHeading() {
  return (
    <div className="relative">
      {/* Decorative circle */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32">
        <div className="absolute inset-0 rounded-full border border-white/20 animate-[spin_20s_linear_infinite]" />
        <div className="absolute inset-2 rounded-full border border-white/15 animate-[spin_25s_linear_infinite_reverse]" />
        <div className="absolute inset-4 rounded-full border border-white/10 animate-[spin_30s_linear_infinite]" />
      </div>

      <VeniVidiVici />

      {/* Bottom decorative element */}
      <div className="relative h-[2px] w-48 mx-auto mt-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse" />
      </div>
    </div>
  );
}