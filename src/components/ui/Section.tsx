import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'paper' | 'paperAlt' | 'surface' | 'dark';
}

export default function Section({
  id,
  className = '',
  children,
  background = 'paper',
}: SectionProps) {
  const bgStyles = {
    paper: 'bg-paper',
    paperAlt: 'bg-paper-alt',
    surface: 'bg-white',
    dark: 'bg-ink text-paper',
  };

  return (
    <section id={id} className={`py-20 lg:py-28 ${bgStyles[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
