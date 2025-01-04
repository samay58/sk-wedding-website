import React from 'react';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';

export function Travel() {
  return (
    <div>
      <Hero
        title="Hotels & Travel"
        description="You need a plan, Stan! We can help. View all the deets about the rest of the wedding weekend, where to stay, and how to get here."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Section title="Where to Stay">
          <div className="space-y-8">
            <h3 className="text-3xl font-serif">Wedding Block Hotels</h3>
            <p className="text-lg text-gray-700">
              For our guests' convenience, we have secured two different discounted hotel options
              near our wedding venue, under the "Samay/Kamya Wedding Room Block".
            </p>
            
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h4 className="text-2xl font-serif mb-4">Le Méridien</h4>
              <ul className="space-y-4 text-lg text-gray-700">
                <li>
                  <strong>Block Rate:</strong> $219
                </li>
                <li>
                  <strong>Location:</strong> Central Square (1.5 mi from venue)
                </li>
              </ul>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}