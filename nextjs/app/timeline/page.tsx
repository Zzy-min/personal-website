import { siteData } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { SiteLink } from "@/components/ui/SiteLink";
import { formatDate, sortByDateDesc } from "@/lib/utils";

const typeLabels: Record<(typeof siteData.timeline)[number]["type"], string> = {
  blog: "内容输出",
  learning: "学习推进",
  project: "项目实战",
  website: "站点迭代",
};

export default function TimelinePage() {
  const timeline = sortByDateDesc(siteData.timeline, "date");

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

        <div className="mt-12 space-y-5">
          {timeline.map((item) => (
            <article
              key={`${item.date}-${item.title}`}
              className="content-card grid gap-6 p-6 md:grid-cols-[180px_1fr] md:p-8"
            >
              <div className="border-b border-zinc-200 pb-4 md:border-b-0 md:border-r md:border-zinc-200 md:pb-0 md:pr-6">
                <div className="font-mono text-sm font-semibold uppercase tracking-[0.16em] text-zinc-600">
                  {formatDate(item.date)}
                </div>
                <div className="mt-3">
                  <Badge variant="outline">{typeLabels[item.type]}</Badge>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-950">{item.title}</h2>
                <div className="font-mono text-[0.72rem] font-bold uppercase tracking-[0.16em] text-zinc-600 mt-3">阶段意义</div>
                <p className="mt-2.5 leading-relaxed text-zinc-700">{item.description}</p>
                {item.evidence ? (
                  <div className="mt-5 rounded-button border border-zinc-200 bg-zinc-50 p-4">
                    <div className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.16em] text-zinc-600">
                      相关记录
                    </div>
                    {item.sourceUrl ? (
                      <SiteLink
                        href={item.sourceUrl}
                        external
                        className="mt-1.5 inline-flex min-h-11 items-center font-semibold text-sm text-zinc-900 hover:text-blue-600 underline decoration-1 underline-offset-4"
                      >
                        {item.evidence} ↗
                      </SiteLink>
                    ) : (
                      <p className="mt-1.5 text-sm text-zinc-900 font-semibold">{item.evidence}</p>
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
