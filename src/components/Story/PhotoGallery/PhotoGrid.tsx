import React from 'react';
import { PhotoThumbnail } from './PhotoThumbnail';

interface PhotoGridProps {
  photos: Array<{ url: string; caption: string }>;
  onPhotoClick: (photo: { url: string; caption: string }) => void;
}

export function PhotoGrid({ photos, onPhotoClick }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {photos.map((photo, index) => (
        <PhotoThumbnail
          key={index}
          photo={photo}
          onClick={() => onPhotoClick(photo)}
        />
      ))}
    </div>
  );
}