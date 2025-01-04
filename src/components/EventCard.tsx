import React from 'react';

interface EventCardProps {
  title: string;
  time?: string;
  description: string;
  links?: Array<{
    text: string;
    href: string;
  }>;
}

export function EventCard({ title, time, description, links }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h3 className="text-2xl font-serif mb-4">{title}</h3>
      <p className="text-lg text-gray-700 mb-6">
        {time && <span className="font-semibold">{time}</span>} {description}
      </p>
      {links && (
        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className="bg-blue-50 text-blue-700 px-4 py-2 rounded-md hover:bg-blue-100 transition-colors"
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}