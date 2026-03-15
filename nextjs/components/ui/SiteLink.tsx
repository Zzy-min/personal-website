import { cn } from '@/lib/utils';

interface SiteLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

export function SiteLink({
  children,
  href,
  className,
  external = false,
  onClick,
}: SiteLinkProps) {
  // Static export does not serve RSC payloads for client navigation, so use anchors.
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={cn(className)}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
