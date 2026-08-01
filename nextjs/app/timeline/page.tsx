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
    <div className="page-shell">
      <section className="mx-auto max-w-7xl">
        <div className="page-intro">
          <Badge>我的时间线</Badge>
          <h1>我的学习与开发记录</h1>
          <p>
            我把每个阶段完成的项目、文章和学习内容记录下来，也会继续更新新的进展。
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {timeline.map((item) => (
            <article
              key={`${item.date}-${item.title}`}
              className="content-card grid gap-5 p-6 md:grid-cols-[180px_1fr] md:p-7"
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
                      相关记录
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
