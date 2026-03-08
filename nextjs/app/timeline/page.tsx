import { siteData } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';
import { Calendar } from 'lucide-react';
import { formatDate, sortByDateDesc } from '@/lib/utils';

export default function TimelinePage() {
  const timeline = sortByDateDesc(siteData.timeline, 'date');

  return (
    <div className="min-h-screen py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <Badge>时间线</Badge>
        <h1 className="text-4xl font-bold mt-4">成长轨迹</h1>
      </div>

      <div className="space-y-4.5">
        {timeline.map((item) => {
          const typeColors = {
            blog: 'text-accent-blue',
            learning: 'text-accent-purple',
            project: 'text-primary',
            website: 'text-primary-strong',
          };

          return (
            <article key={item.title} className="grid grid-cols-[180px_1fr] gap-4 items-start">
              <div className={`${typeColors[item.type]} pt-4`}>
                <Calendar size={18} className="inline-block" />
                <span className="ml-2">{formatDate(item.date)}</span>
              </div>
              <div className="bg-panel border border-line rounded-card p-6 shadow-card">
                <Badge variant="outline">{item.type}</Badge>
                <h3 className="text-xl font-bold mt-2 mb-2">{item.title}</h3>
                <p className="text-muted">{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
