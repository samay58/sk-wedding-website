import React from 'react';
import { Link } from '../Link';
import { useLocation } from 'react-router-dom';
import { useHeaderContext } from './HeaderContext';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === href;
  const { closeMenu } = useHeaderContext();

  return (
    <Link 
      href={href}
      onClick={closeMenu}
      className={`
        relative text-gray-700 text-2xl font-playfair px-4 py-2 rounded-md 
        hover:bg-[#cc7e68]/10 hover:text-[#cc7e68] transition-all duration-200
        ${isActive ? 'font-bold' : ''}
      `}
    >
      {children}
      {/* Active indicator line */}
      <div
        className={`
          absolute bottom-0 left-0 w-full h-0.5 
          bg-[#29485c] transform origin-left transition-all duration-300
          ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}
        `}
      />
    </Link>
  );
}