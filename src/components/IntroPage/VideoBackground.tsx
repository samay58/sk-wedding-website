import React from 'react';

export function VideoBackground() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 z-10" />
      
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient-x" />
      
      {/* Grain effect */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-noise" />
      </div>
    </div>
  );
}