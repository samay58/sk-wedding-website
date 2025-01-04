import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselSlide } from './CarouselSlide';
import { images } from './images';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative h-full group">
      <Swiper
        modules={[EffectFade, Autoplay, Navigation]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            <CarouselSlide image={image} isActive={index === activeIndex} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full 
                   bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity 
                   duration-300 hover:bg-white/20"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full 
                   bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity 
                   duration-300 hover:bg-white/20"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? 'w-6 bg-white' 
                : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}