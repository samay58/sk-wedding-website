import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { IntroPage } from './pages/IntroPage';
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { Story } from './pages/Story';
import { Timeline } from './pages/Timeline';
import { Logistics } from './pages/Logistics';
import { RSVP } from './pages/RSVP';
import { HeaderProvider } from './components/Header/HeaderContext';

export default function App() {
  return (
    <HeaderProvider>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/story" element={<Story />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/rsvp" element={<RSVP />} />
        </Route>
        {/* Catch all route - redirect to intro page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HeaderProvider>
  );
}