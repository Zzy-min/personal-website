import type { Metric } from '@/lib/data';

interface MetricCardProps {
  metric: Metric;
}

export function MetricCard({ metric }: MetricCardProps) {
  const value = metric.key === 'posts'
    ? String(15) // 直接使用文章数量
    : metric.value;

  return (
    <div className="flex-1 min-w-[140px] px-5 py-4 rounded-20px bg-white/2 border border-accent-blue/20">
      <strong className="block text-[1.6rem] mb-1">{value}</strong>
      <span className="text-sm text-muted">{metric.label}</span>
    </div>
  );
}
