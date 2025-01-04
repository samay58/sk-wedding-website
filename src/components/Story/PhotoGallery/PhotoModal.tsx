import React from 'react';
import { X } from 'lucide-react';

interface PhotoModalProps {
  photo: { url: string; caption: string } | null;
  onClose: () => void;
}

export function PhotoModal({ photo, onClose }: PhotoModalProps) {
  if (!photo) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-7xl mx-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-4 p-2 text-white/80 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-8 h-8" />
        </button>
        
        {/* Image container */}
        <div className="flex flex-col items-center">
          <img
            src={photo.url}
            alt={photo.caption}
            className="max-h-[75vh] w-auto object-contain rounded-lg"
          />
          
          {/* Caption container - width matches the image */}
          <div className="mt-4 max-w-[100%] px-4">
            <p className="text-center font-playfair text-xl text-white/90">
              {photo.caption}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}