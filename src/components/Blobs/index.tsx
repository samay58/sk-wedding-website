import React from 'react';
import { BlobSet } from './BlobSet';

export function Blobs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <BlobSet position="left" />
      <BlobSet position="right" />
      <BlobSet position="bottom" />
      <BlobSet position="center" />
      <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-40 bg-[rgba(0,0,0,0.5)]" />
    </div>
  );
}