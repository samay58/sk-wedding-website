import React from 'react';
import { WatercolorFrame } from './WatercolorFrame';

export function DateCard() {
  return (
    <div className="space-y-8 md:space-y-12 w-full">
      {/* Video Card */}
      <WatercolorFrame>
        <div className="aspect-video w-full">
          <iframe 
            src="https://res.cloudinary.com/dapwx5nno/video/upload/v1734938326/u7innqwpy3rymasv4sv2.mp4?autoplay=1&mute=1"
            className="w-full h-full"
            allow="autoplay"
            style={{ border: 'none' }}
          />
        </div>
      </WatercolorFrame>

      {/* Date Card */}
      <WatercolorFrame>
        <div className="p-8 md:p-16">
          <img
            src="https://cdn.midjourney.com/68f64835-b9f7-45ad-ad72-3405e86d7a00/0_0.png"
            alt="Wedding Date"
            className="w-full max-w-2xl mx-auto h-auto object-contain transform hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </WatercolorFrame>
    </div>
  );
}