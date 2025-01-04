import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

export function HomeButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/home')}
      className="fixed top-6 left-6 z-50 p-3 bg-white/20 backdrop-blur-sm rounded-full 
                 hover:bg-white/30 transition-colors duration-300 group"
      aria-label="Skip to home page"
    >
      <Home className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
    </button>
  );
}