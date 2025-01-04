import React from 'react';

interface BlobSetProps {
  position: 'left' | 'right' | 'bottom' | 'center';
}

export function BlobSet({ position }: BlobSetProps) {
  const positionClasses = {
    left: 'rotate-90 -right-[48rem] -bottom-[5rem]',
    right: 'rotate-[270deg] -left-[48rem] -bottom-[5rem]',
    bottom: 'rotate-180 -top-[38rem]',
    center: ''
  };

  return (
    <div className={`absolute flex items-center justify-center h-full w-full ${positionClasses[position]}`}>
      <div className="absolute h-[22rem] w-[22rem]">
        {/* Blob images */}
        <img className="absolute h-full w-full filter contrast-[1.4] bottom-[10rem] left-[11rem]" src="/images/blob-09.svg" alt="" />
        <img className="absolute h-full w-full filter contrast-[1.4] bottom-[32rem] right-[20rem] scale-[1.7]" src="/images/blob-03.svg" alt="" />
        {/* Add more blob images as needed */}
      </div>
    </div>
  );
}