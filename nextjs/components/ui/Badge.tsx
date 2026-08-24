import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center rounded-badge border px-3 py-1 font-mono text-[0.72rem] font-semibold uppercase leading-none tracking-[0.14em] transition-colors shadow-subtle",
        variant === "outline"
          ? "border-zinc-300 bg-white text-zinc-800 hover:border-zinc-400"
          : "border-zinc-300 bg-zinc-100 text-zinc-900",
        className
      )}
    >
      {children}
    </span>
  );
}
