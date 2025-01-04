import React from 'react';
import { FormData } from '../../types/rsvp';

interface RSVPDisplayProps {
  rsvp: FormData;
  onNewRSVP: () => void;
  onUpdateRSVP: (rsvp: FormData) => void;
}

export function RSVPDisplay({ rsvp, onNewRSVP, onUpdateRSVP }: RSVPDisplayProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-serif mb-6 text-center">Your RSVP Details</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-medium text-gray-700">Name</h3>
          <p className="text-lg">{rsvp.name}</p>
        </div>

        <div>
          <h3 className="font-medium text-gray-700">Status</h3>
          <p className="text-lg">
            {rsvp.attending ? (
              <span className="text-green-600">Attending</span>
            ) : (
              <span className="text-red-600">Not Attending</span>
            )}
          </p>
        </div>

        {rsvp.attending && (
          <>
            <div>
              <h3 className="font-medium text-gray-700">Additional Guests</h3>
              <p className="text-lg">{rsvp.guests}</p>
            </div>

            {rsvp.dietary_restrictions && (
              <div>
                <h3 className="font-medium text-gray-700">Dietary Restrictions</h3>
                <p className="text-lg">{rsvp.dietary_restrictions}</p>
              </div>
            )}
          </>
        )}

        {rsvp.message && (
          <div>
            <h3 className="font-medium text-gray-700">Message</h3>
            <p className="text-lg italic">"{rsvp.message}"</p>
          </div>
        )}
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={() => onUpdateRSVP(rsvp)}
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Update RSVP
        </button>
        <button
          onClick={onNewRSVP}
          className="text-[#7a6e5a] hover:text-[#7a6e5a]/80 underline"
        >
          Submit a new RSVP
        </button>
      </div>
    </div>
  );
}