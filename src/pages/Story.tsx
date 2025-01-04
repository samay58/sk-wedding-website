import React from 'react';
import { Hero } from '../components/Hero';
import { PhotoGallery } from '../components/Story/PhotoGallery';

export function Story() {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Our Story"
        description="This is our journey—moments we cherish, adventures we've embraced, and highlights we want to share with our loved ones."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PhotoGallery />
      </div>
    </div>
  );
}