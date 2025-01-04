import React from 'react';

interface PhotoThumbnailProps {
  photo: {
    url: string;
    caption: string;
  };
  onClick: () => void;
}

export function PhotoThumbnail({ photo, onClick }: PhotoThumbnailProps) {
  return (
    <div 
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
        <img
          src={photo.url}
          alt={photo.caption}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-white text-sm line-clamp-2">
              {photo.caption}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}