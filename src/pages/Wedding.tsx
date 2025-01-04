import React from 'react';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';

export function Wedding() {
  return (
    <div>
      <Hero
        title="The Wedding"
        description="Imagine an awesome party, at a lively, local spot, with amazing food and drinks, where two people you love just happen to be getting married."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Section title="When & Where">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-serif mb-4">Location</h3>
            <p className="text-lg text-gray-700 mb-6">
              The entire event — ceremony, cocktails, dinner, and dancing — will be held at one of our favorite spots in Barcelona,{' '}
              <a href="#" className="text-blue-700 hover:text-blue-800">
                Casa Vicens
              </a>
              . It's cozy and intimate with a whole lot of character, and the food and drinks will knock your socks off.
            </p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.0461098550483!2d2.1486799999999997!3d41.403889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2a029c27371%3A0x3a6b0a3d616a4d94!2sCasa%20Vicens!5e0!3m2!1sen!2ses!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}