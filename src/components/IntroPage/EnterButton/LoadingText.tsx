import React, { useState, useEffect } from 'react';

const phrases = [
  "Get Ready...",
  "Loading Magic...",
  "Here We Go!"
];

export function LoadingText() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((current) => (current + 1) % phrases.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="animate-fade-in">
      {phrases[phraseIndex]}
    </span>
  );
}