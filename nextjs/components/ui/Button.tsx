import { cn } from "@/lib/utils";
import { SiteLink } from "@/components/ui/SiteLink";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
  onClick?: () => void;
  download?: boolean | string;
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  external = false,
  className,
  onClick,
  download,
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex min-h-11 items-center justify-center rounded-button border px-5 py-2.5 text-sm font-semibold tracking-[0.01em] focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:translate-y-px active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 transition-all duration-200 ease-out";

  const variantStyles = {
    primary:
      "border-zinc-900 bg-zinc-900 text-white shadow-card hover:-translate-y-0.5 hover:bg-black hover:shadow-glow active:shadow-card",
    secondary:
      "border-zinc-300 bg-white text-zinc-800 shadow-subtle hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-50 hover:text-black hover:shadow-card active:shadow-subtle",
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
