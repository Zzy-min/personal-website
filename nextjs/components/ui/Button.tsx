import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = 'primary',
  external = false,
  className,
  onClick,
}: ButtonProps) {
  const baseStyles =
    'inline-flex min-h-11 items-center justify-center rounded-button border px-5 py-3 text-sm font-medium transition duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/25';

  const variantStyles = {
    primary: 'border-primary bg-primary text-paper-inverse shadow-card hover:bg-primary-strong',
    secondary: 'border-line bg-panel text-text hover:bg-paper-hover',
  };

  if (href) {
    return (
      <Link
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        className={cn(baseStyles, variantStyles[variant], className)}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={cn(baseStyles, variantStyles[variant], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
