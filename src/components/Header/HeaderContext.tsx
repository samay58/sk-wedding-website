import React, { createContext, useContext, useState } from 'react';

interface HeaderContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  closeMenu: () => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <HeaderContext.Provider value={{ isMenuOpen, setIsMenuOpen, closeMenu }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeaderContext() {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error('useHeaderContext must be used within a HeaderProvider');
  }
  return context;
}