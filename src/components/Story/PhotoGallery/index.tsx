import React, { useState } from 'react';
import { PhotoGrid } from './PhotoGrid';
import { PhotoModal } from './PhotoModal';
import { photos } from './photos';

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <div className="space-y-8">
      <PhotoGrid photos={photos} onPhotoClick={setSelectedPhoto} />
      <PhotoModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </div>
  );
}