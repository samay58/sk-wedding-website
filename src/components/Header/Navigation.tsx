import { Link } from '../Link';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface NavigationProps {
  onLinkClick?: () => void;
}

export function Navigation({ onLinkClick }: NavigationProps) {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();
  
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const links = [
    { href: "/story", text: "Our Story" },
    { href: "/wedding", text: "The Wedding" },
    { href: "/logistics", text: "Logistics" },
  ];

  return (
    <nav className="flex md:items-center md:space-x-6 flex-col md:flex-row">
      {links.map(({ href, text }) => (
        <Link
          key={href}
          href={href}
          className={`px-3 py-2 text-base font-playfair font-medium tracking-wide rounded-md transition-colors
            ${activeLink === href 
              ? 'bg-blue-50 text-blue-900' 
              : 'text-gray-600 hover:text-gray-900'
            }
          `}
          onClick={onLinkClick}
        >
          {text}
        </Link>
      ))}
    </nav>
  );
}