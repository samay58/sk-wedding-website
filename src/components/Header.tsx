import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './Link';
import { NavLink } from './Header/NavLink';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[rgb(229,222,219)] shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-4xl font-playfair font-bold text-gray-900">
              Samay & Kamya
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-between flex-1 max-w-3xl ml-12">
            {/* Main Navigation Links */}
            <div className="flex justify-center space-x-12">
              <NavLink href="/story">Our Story</NavLink>
              <NavLink href="/timeline">Events Timeline</NavLink>
              <NavLink href="/logistics">Logistics</NavLink>
            </div>

            {/* RSVP Button */}
            <Link
              href="/rsvp"
              className="bg-[#29485c] font-playfair text-white px-6 py-2 rounded hover:bg-[#cc7e68]/90 hover:text-[#2e2b2a] hover:font-bold transition-colors ml-15"
            >
              RSVP
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <NavLink href="/story">Our Story</NavLink>
              <NavLink href="/timeline">Events Timeline</NavLink>
              <NavLink href="/logistics">Logistics</NavLink>
              <div className="flex flex-col space-y-2">
                <Link
                  href="/rsvp"
                  className="bg-[#29485c] text-white font-playfair px-6 py-2 rounded text-center hover:bg-[#cc7e68]/90 transition-colors"
                >
                  RSVP
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}