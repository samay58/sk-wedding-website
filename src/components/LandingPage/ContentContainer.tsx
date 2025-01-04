import React from 'react';

interface ContentContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function ContentContainer({ children, className = '' }: ContentContainerProps) {
  return (
    <div className={`
      relative group
      before:absolute before:inset-0 before:-inset-x-16 before:-inset-y-8
      before:bg-white/1 before:backdrop-blur-xl before:rounded-[3rem]
      before:transform before:transition-all before:duration-500
      before:group-hover:bg-white/1
      ${className}
    `}>
      <div className="relative">
        {children}
      </div>
    </div>
  );
}