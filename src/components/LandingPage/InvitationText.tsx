import React from 'react';
import { Link } from '../Link';

export function InvitationText() {
  return (
    <div className="space-y-8">
      <p className="relative font-playfair text-xl text-black font-bold max-w-md mx-auto leading-relaxed italic">
        <span className="absolute -left-6 top-0 text-3xl text-black/20">❝</span>
        Join us for an unforgettable celebration of love in the heart of Barcelona
        <span className="absolute -right-6 bottom-0 text-3xl text-black/20">❞</span>
      </p>

      <div className="space-y-4">
        <Link 
          href="/rsvp" 
          className="relative inline-block group"
        >
          <span className="relative z-10 font-playfair text-lg font-bold text-black px-12 py-4 bg-white/40 backdrop-blur-sm rounded-full block transform group-hover:scale-105 transition-all duration-300">
            RSVP  ✉️
          </span>
          <div className="absolute inset-0 bg-white/50 rounded-full blur-md transform group-hover:scale-110 transition-transform duration-300" />
        </Link>

        <div className="relative text-sm text-black font-playfair">
          <span className="relative inline-block animate-pulse">
            By February 10th
            <div className="absolute -bottom-1 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-black/30 to-transparent" />
          </span>
        </div>
      </div>
    </div>
  );
}