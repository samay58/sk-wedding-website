import React from 'react';
import { ColorSwatch } from './ColorSwatch';

interface EventProps {
  day: string;
  time: string;
  title: string;
  emoji: string;
  description: string;
  colors?: Array<{ hex: string; name: string }>;
  attireNote?: string;
}

export function EventCard({ day, time, title, emoji, description, colors, attireNote }: EventProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <h3 className="font-serif text-lg text-gray-500 mb-1">{day}</h3>
          <div className="flex items-center text-gray-700">
            <span className="text-lg">{time}</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <h2 className="font-serif text-3xl text-gray-900 mb-1 flex items-center gap-3">
                {title} <span className="text-2xl">{emoji}</span>
              </h2>
            </div>
          </div>
          
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>

          {/* Attire Section */}
          {(colors || attireNote) && (
            <div className="pt-4 border-t border-gray-100">
              <h4 className="font-medium text-gray-700 mb-2">Suggested Attire</h4>
              {attireNote && (
                <p className="text-gray-600 mb-3">{attireNote}</p>
              )}
              {colors && (
                <div className="flex flex-wrap gap-4">
                  {colors.map((color) => (
                    <ColorSwatch 
                      key={color.hex}
                      color={color.hex}
                      label={color.name}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}