import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content" tabIndex={-1} className="h-screen">
        <Outlet />
      </main>
    </div>
  );
}