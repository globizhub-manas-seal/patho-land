import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverLift?: boolean;
}

export default function Card({
  children,
  className = '',
  hoverLift = true,
}: CardProps) {
  return (
    <div
      className={`bg-white border border-borderSubtle rounded-card p-6 md:p-8 shadow-subtle ${
        hoverLift ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:border-accent/40' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
