import React from 'react';
import { Hero } from '../components/Hero';
import { EventCard } from '../components/Timeline/EventCard';

const events = [
  {
    day: "THURSDAY, SEPTEMBER 25, 2024",
    time: "7:30 PM onwards",
    title: "VENI – Welcome Reception",
    emoji: "🏙",
    description: "Kick off Samay & Kamya's wedding weekend with a relaxed rooftop gathering. Enjoy good food, good vibes, and the glow of city lights as we ease into the celebrations.",
    colors: [
      { hex: '#FAD6A5', name: 'Champagne' },
      { hex: '#ECCFCF', name: 'Rose Gold' },
      { hex: '#FFD700', name: 'Gold' },
      { hex: '#000000', name: 'Black' }
    ],
    attireNote: "Indowestern / Western / Cocktail"
  },
  {
    day: "FRIDAY, SEPTEMBER 26, 2024",
    time: "6:00 PM onwards",
    title: "VIDI – Sangeet",
    emoji: "🍃",
    description: "Warm up those dancing shoes! Join us for an evening of music, mingling, and a nod to our shared heritage in a serene hideaway beyond the city buzz.",
    colors: [
      { hex: '#800080', name: 'Deep Purple' },
      { hex: '#E81D53', name: 'Fuchsia' },
      { hex: '#FF5722', name: 'Vibrant Orange' },
      { hex: '#008B8B', name: 'Teal' }
    ],
    attireNote: "Indian / Indowestern - Vibrant, bright colors"
  },
  {
    day: "SATURDAY, SEPTEMBER 27, 2024",
    time: "5:00 PM onwards",
    title: "VICI – Wedding Ceremony & Afterparty",
    emoji: "🏰",
    description: "Come witness Samay & Kamya's big moment in a fairytale-like setting. We'll toast their \"I dos,\" feast with friends and family, and keep the party going well into the night.",
    colors: [
      { hex: '#FFDCDC', name: 'Pale Pink' },
      { hex: '#E6F7FF', name: 'Baby Blue' },
      { hex: '#F3E7FF', name: 'Light Lavender' },
      { hex: '#FFFBE7', name: 'Pastel Cream' }
    ],
    attireNote: "Traditional Indian - Neutrals and pastels (TBD)"
  }
];

export function Timeline() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Hero
        title="Events Timeline"
        description="Join us for three days of celebration, each day representing a part of our journey together."
      />

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
}