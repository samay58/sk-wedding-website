import React from 'react';
import { ImageSection } from '../components/LandingPage/ImageSection';
import { ContentSection } from '../components/LandingPage/ContentSection';

export function LandingPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <ImageSection />
      <ContentSection />
    </div>
  );
}