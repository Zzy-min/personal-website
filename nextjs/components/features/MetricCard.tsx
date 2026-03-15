import type { Metric } from '@/lib/data';

interface MetricCardProps {
  metric: Metric;
}

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <div className="min-w-[120px] rounded-[20px] border border-line bg-paper px-4 py-4">
      <strong className="block font-serif text-[1.75rem] text-text">{metric.value}</strong>
      <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-muted">{metric.label}</span>
    </div>
  );
}
