import { cn } from '@/lib/utils';
import { SiteLink } from '@/components/ui/SiteLink';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  external?: boolean;
  className?: string;
  onClick?: () => void;
  download?: boolean | string;
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = 'primary',
  external = false,
  className,
  onClick,
  download,
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    'inline-flex min-h-11 items-center justify-center rounded-button border px-5 py-2.5 text-sm font-semibold tracking-[0.01em] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:translate-y-px disabled:pointer-events-none disabled:opacity-50';

  const variantStyles = {
    primary: 'border-primary bg-primary text-paper-inverse shadow-card transition-[transform,background-color,box-shadow] duration-200 ease-out hover:-translate-y-px hover:bg-primary-strong hover:shadow-glow active:shadow-card',
    secondary: 'border-line bg-panel text-text shadow-card transition-[transform,border-color,background-color] duration-200 ease-out hover:-translate-y-px hover:border-primary/30 hover:bg-paper-hover',
  };

  if (href) {
    return (
      <SiteLink
        href={href}
        external={external}
        className={cn(baseStyles, variantStyles[variant], className)}
        onClick={onClick}
        download={download}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
      >
        {children}
      </SiteLink>
    );
  }

  return (
    <button
      type="button"
      className={cn(baseStyles, variantStyles[variant], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
