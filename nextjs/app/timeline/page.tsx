import { siteData } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';
import { SiteLink } from '@/components/ui/SiteLink';
import { formatDate, sortByDateDesc } from '@/lib/utils';

const typeLabels: Record<(typeof siteData.timeline)[number]['type'], string> = {
  blog: '内容输出',
  learning: '学习推进',
  project: '项目实战',
  website: '站点迭代',
};

export default function TimelinePage() {
  const timeline = sortByDateDesc(siteData.timeline, 'date');

  return (
    <div className="min-h-screen px-4 py-12">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <Badge>成长证明</Badge>
          <h1 className="mt-4 text-4xl font-bold">成长证明</h1>
          <p className="mt-4 text-lg text-muted">
            把阶段性节点串起来，才能看见真正的上升曲线。我不想只展示最后的成果，也希望别人看到每个阶段我在补什么、做什么、把什么真正留下来了。
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {timeline.map((item) => (
            <article
              key={`${item.date}-${item.title}`}
              className="grid gap-4 rounded-card border border-line bg-panel p-6 shadow-card md:grid-cols-[180px_1fr]"
            >
              <div>
                <div className="font-mono text-sm uppercase tracking-[0.16em] text-muted">
                  {formatDate(item.date)}
                </div>
                <div className="mt-3">
                  <Badge variant="outline">{typeLabels[item.type]}</Badge>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <div className="mt-3 text-xs uppercase tracking-[0.16em] text-muted">阶段意义</div>
                <p className="mt-3 leading-8 text-muted">{item.description}</p>
                {item.evidence ? (
                  <div className="mt-5 border-t border-line pt-4">
                    <div className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                      可核验证据
                    </div>
                    {item.sourceUrl ? (
                      <SiteLink
                        href={item.sourceUrl}
                        external
                        className="mt-2 inline-flex min-h-11 items-center text-sm underline decoration-1 underline-offset-4"
                      >
                        {item.evidence} ↗
                      </SiteLink>
                    ) : (
                      <p className="mt-2 text-sm">{item.evidence}</p>
                    )}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
