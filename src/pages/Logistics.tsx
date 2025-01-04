import React from 'react';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';

export function Logistics() {
  return (
    <div>
      <Hero
        title="Logistics"
        description="Everything you need to know about accommodations, travel, and the wedding weekend."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Section title="Accommodations">
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl font-serif mb-4">Hotel Blocks</h3>
              <p className="text-lg text-gray-700">
                We've secured special rates at select hotels near the venue.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Travel">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-serif mb-4">Getting Here</h3>
            <p className="text-lg text-gray-700">
              Information about airports, transportation, and getting around Barcelona.
            </p>
          </div>
        </Section>

        <Section title="Registry">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-serif mb-4">Gift Registry</h3>
            <p className="text-lg text-gray-700">
              Your presence at our wedding is the greatest gift of all. However, for those who wish to give a gift, we've created a registry.
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}