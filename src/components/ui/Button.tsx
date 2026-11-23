import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'saffron' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ComponentType<{ className?: string }>;
  iconPosition?: 'left' | 'right';
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  href,
  variant = 'saffron',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  target,
  rel,
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 active:scale-[0.98] select-none whitespace-nowrap';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  };

  const variantStyles = {
    saffron:
      'bg-saffron text-ink hover:bg-saffron-hover shadow-[0_2px_10px_rgba(242,163,58,0.28)] hover:shadow-[0_4px_16px_rgba(242,163,58,0.38)]',
    outline:
      'bg-white text-ink border border-borderSubtle hover:border-ink/30 hover:bg-paper-alt shadow-sm',
    ghost: 'text-ink hover:text-accent hover:bg-sage/40',
    dark: 'bg-ink text-paper hover:bg-ink-soft shadow-md',
  };

  const combined = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 flex-shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a href={href} target={target} rel={rel} className={`group ${combined}`} onClick={onClick}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`group ${combined}`} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`group ${combined}`}>
      {content}
    </button>
  );
}
