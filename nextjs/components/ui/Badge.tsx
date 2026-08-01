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
        'inline-flex min-h-7 items-center rounded-badge border px-3 py-1 text-[0.68rem] font-semibold uppercase leading-none tracking-[0.14em]',
        variant === 'outline'
          ? 'border-line bg-paper-soft text-muted'
          : 'border-primary/20 bg-[#e6eee7] text-primary-strong',
        className
      )}
    >
      {children}
    </span>
  );
}
