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
        'inline-flex items-center px-2.75 py-1.4 rounded-badge text-b7eeff border border-accent-purple/12 text-sm uppercase tracking-wider',
        variant === 'outline'
          ? 'bg-accent-purple/8'
          : 'bg-accent-purple/10',
        className
      )}
    >
      {children}
    </span>
  );
}
