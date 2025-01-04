import { Navigation } from './Navigation';
import { RSVPButton } from './RSVPButton';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const location = useLocation();

  useEffect(() => {
    onClose();
  }, [location, onClose]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const menu = document.getElementById('mobile-menu');
      if (menu && !menu.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="md:hidden">
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div 
        id="mobile-menu"
        className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform"
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex-1">
            <div className="flex flex-col gap-6">
              <Navigation onLinkClick={onClose} />
              <div className="pt-6 border-t border-gray-100">
                <RSVPButton onClick={onClose} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}