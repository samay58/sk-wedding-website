import React from 'react';
import { Background } from './Background';
import { Content } from './Content';

interface HeroProps {
  title: string;
  description: string;
}

export function Hero({ title, description }: HeroProps) {
  return (
    <div className="relative overflow-hidden h-[40vh]">
      <Background />
      <Content title={title} description={description} />
    </div>
  );
}