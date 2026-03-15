import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-badge border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]',
        variant === 'outline'
          ? 'border-line bg-transparent text-muted'
          : 'border-primary/15 bg-primary/10 text-primary-strong',
        className
      )}
    >
      {children}
    </span>
  );
}
