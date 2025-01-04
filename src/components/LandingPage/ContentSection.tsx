import React from 'react';
import { MainHeading } from './MainHeading';
import { DateLocation } from './DateLocation';
import { ContentContainer } from './ContentContainer';
import { Link } from '../Link';

export function ContentSection() {
  return (
    <div className="relative min-h-[30vh] md:min-h-screen md:w-1/2 w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.midjourney.com/b60c7d79-52de-499d-a109-6c9d35cd908b/0_0.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 py-12 md:py-0 max-w-2xl mx-auto">
        <ContentContainer>
          <div className="space-y-6 md:space-y-8">
            <MainHeading />
            <DateLocation />
            <div className="pt-4">
              <Link 
                href="/rsvp" 
                className="relative inline-block group"
              >
                <span className="relative z-10 font-playfair text-lg font-bold text-black px-8 md:px-12 py-3 md:py-4 bg-white/20 backdrop-blur-sm rounded-full block transform group-hover:scale-105 transition-all duration-300">
                  RSVP    ✉️
                </span>
                <div className="absolute inset-0 bg-white/30 rounded-full blur-md transform group-hover:scale-110 transition-transform duration-300" />
              </Link>
              <div className="mt-3 text-sm text-black font-playfair">
                <span className="relative inline-block">
                  by February 10th
                </span>
              </div>
            </div>
          </div>
        </ContentContainer>
      </div>
    </div>
  );
}