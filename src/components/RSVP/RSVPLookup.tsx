import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { FormData } from '../../types/rsvp';

interface RSVPLookupProps {
  onExistingRSVP: (rsvp: FormData) => void;
  onUpdateRSVP: (rsvp: FormData) => void;
}

export function RSVPLookup({ onExistingRSVP, onUpdateRSVP }: RSVPLookupProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { data, error: lookupError } = await supabase
        .from('rsvps')
        .select('*')
        .eq('email', email)
        .single();

      if (lookupError) throw lookupError;
      if (!data) {
        setError('No RSVP found for this email');
        return;
      }

      onExistingRSVP(data as FormData);
    } catch (err) {
      setError('Error looking up RSVP');
      console.error('RSVP lookup error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-serif mb-6 text-center">Already RSVP'd?</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="lookup-email" className="block text-sm font-medium text-gray-700">
            Enter your email
          </label>
          <input
            type="email"
            id="lookup-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7a6e5a] focus:ring-[#7a6e5a]"
            required
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm">{error}</p>
        )}

        <div className="flex justify-center gap-4">
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Looking up...' : 'Check RSVP'}
          </button>
        </div>
      </form>
    </div>
  );
}