import React from 'react';

interface RSVPActionsProps {
  onNewRSVP: () => void;
  onCheckRSVP: () => void;
}

export function RSVPActions({ onNewRSVP, onCheckRSVP }: RSVPActionsProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <button
        onClick={onNewRSVP}
        className="w-full max-w-md px-8 py-4 bg-[#29485c] text-white font-playfair text-xl rounded-full 
                 hover:bg-[#29485c]/90 transform hover:scale-[1.02] transition-all duration-300 
                 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#29485c]/50"
        aria-label="Submit a new RSVP"
      >
        Submit a new RSVP
      </button>
      
      <button
        onClick={onCheckRSVP}
        className="text-gray-600 hover:text-[#29485c] text-sm font-medium underline-offset-4 
                 hover:underline transition-colors duration-200"
        aria-label="Check existing RSVP"
      >
        Already RSVP'd? Check your response
      </button>
    </div>
  );
}