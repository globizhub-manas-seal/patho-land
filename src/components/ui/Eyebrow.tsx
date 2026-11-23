import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  variant?: 'sage' | 'paper' | 'dark' | 'orange' | 'saffron';
  className?: string;
}

export default function Eyebrow({
  children,
  icon: Icon,
  variant = 'sage',
  className = '',
}: EyebrowProps) {
  const variantStyles = {
    sage: 'bg-sage/70 text-ink border-sage-deep/60',
    paper: 'bg-paper-alt text-ink border-borderSubtle',
    dark: 'bg-ink-soft/80 text-sage border-accent/40',
    orange: 'bg-saffron/20 text-[#B85E0E] border-saffron/40 font-bold',
    saffron: 'bg-saffron/20 text-[#B85E0E] border-saffron/40 font-bold',
  };

  const iconStyles = {
    sage: 'text-accent',
    paper: 'text-accent',
    dark: 'text-sage',
    orange: 'text-[#B85E0E]',
    saffron: 'text-[#B85E0E]',
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border shadow-sm transition-all ${variantStyles[variant]} ${className}`}
    >
      {Icon && <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${iconStyles[variant]}`} />}
      <span>{children}</span>
    </div>
  );
}
