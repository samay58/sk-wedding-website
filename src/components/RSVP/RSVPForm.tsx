import React, { useState, useEffect } from 'react';
import { FormData } from '../../types/rsvp';

interface RSVPFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  isSubmitting: boolean;
  initialData?: FormData;
}

export function RSVPForm({ onSubmit, isSubmitting, initialData }: RSVPFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    attending: true,
    guests: 0,
    dietary_restrictions: '',
    message: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  const handleGuestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Convert to number and handle empty string
    const numValue = value === '' ? 0 : parseInt(value, 10);
    // Ensure value is not negative
    const validValue = Math.max(0, numValue);
    setFormData({ ...formData, guests: validValue });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7a6e5a] focus:ring-[#7a6e5a]"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          readOnly={!!initialData}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7a6e5a] focus:ring-[#7a6e5a] ${
            initialData ? 'bg-gray-100' : ''
          }`}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Will you be attending? *
        </label>
        <div className="mt-2 space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              checked={formData.attending}
              onChange={() => setFormData({ ...formData, attending: true })}
              className="text-[#7a6e5a] focus:ring-[#7a6e5a]"
            />
            <span className="ml-2">Yes, I'll be there!</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              checked={!formData.attending}
              onChange={() => setFormData({ ...formData, attending: false })}
              className="text-[#7a6e5a] focus:ring-[#7a6e5a]"
            />
            <span className="ml-2">Unfortunately, I can't make it</span>
          </label>
        </div>
      </div>

      {formData.attending && (
        <>
          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
              Number of Additional Guests
            </label>
            <input
              type="number"
              id="guests"
              min="0"
              value={formData.guests}
              onChange={handleGuestsChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7a6e5a] focus:ring-[#7a6e5a]"
            />
          </div>

          <div>
            <label htmlFor="dietary" className="block text-sm font-medium text-gray-700">
              Dietary Restrictions
            </label>
            <textarea
              id="dietary"
              value={formData.dietary_restrictions}
              onChange={(e) => setFormData({ ...formData, dietary_restrictions: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7a6e5a] focus:ring-[#7a6e5a]"
              rows={2}
            />
          </div>
        </>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message for the Couple
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7a6e5a] focus:ring-[#7a6e5a]"
          rows={4}
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 bg-[#7a6e5a] text-white rounded-full hover:bg-[#7a6e5a]/90 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : initialData ? 'Update RSVP' : 'Submit RSVP'}
        </button>
      </div>
    </form>
  );
}