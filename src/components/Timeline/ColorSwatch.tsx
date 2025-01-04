import React from 'react';

interface ColorSwatchProps {
  color: string;
  label: string;
}

export function ColorSwatch({ color, label }: ColorSwatchProps) {
  return (
    <div className="flex items-center gap-2">
      <span 
        className="w-3 h-3 inline-block rounded border border-gray-300"
        style={{ backgroundColor: color }}
      />
      <span className="text-gray-700">{label}</span>
    </div>
  );
}