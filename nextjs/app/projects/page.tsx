'use client';

import { useMemo, useState } from 'react';
import { siteData } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FilterGroup } from '@/components/ui/FilterGroup';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>('all');

  const featuredProjects = useMemo(
    () =>
      siteData.projects
        .filter((project) => project.featured)
        .sort((left, right) => (left.featuredOrder ?? 99) - (right.featuredOrder ?? 99)),
    []
  );

  const uniqueStacks = useMemo(() => {
    const stacks = new Set<string>();
    siteData.projects.forEach((project) => project.stack.forEach((stack) => stacks.add(stack)));
    return Array.from(stacks);
  }, []);

  const archiveProjects = useMemo(() => {
    const projects = [...siteData.projects].sort(
      (left, right) => new Date(right.updatedAt).getTime() - new Date(left.updatedAt).getTime()
    );

    if (filter === 'all') return projects;
    return projects.filter((project) => project.stack.includes(filter));
  }, [filter]);

  return (
    <div className="min-h-screen px-4 py-12">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <Badge>代表案例</Badge>
          <h1 className="mt-4 text-4xl font-bold">项目不是列表，而是解决问题的证据</h1>
          <p className="mt-4 text-lg text-muted">
            我更在意一个项目能不能清楚回答三个问题：它解决了什么、我怎么做的、最后留下了什么证明。
          </p>
        </div>

        <div className="mt-8 space-y-6">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-card border border-line bg-panel p-6 shadow-card"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge>{project.status}</Badge>
                  <span className="text-xs uppercase tracking-[0.18em] text-muted">
                    {project.updatedAt}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((stack) => (
                    <Badge key={stack} variant="outline">
                      {stack}
                    </Badge>
                  ))}
                </div>
              </div>

              <h2 className="mt-5 text-3xl font-bold">{project.title}</h2>
              <p className="mt-3 text-lg">{project.summary}</p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-card border border-line bg-paper p-5">
                  <div className="text-xs uppercase tracking-[0.16em] text-muted">问题定义</div>
                  <p className="mt-3 leading-7">{project.problem}</p>
                </div>
                <div className="rounded-card border border-line bg-paper p-5">
                  <div className="text-xs uppercase tracking-[0.16em] text-muted">结果与价值</div>
                  <p className="mt-3 leading-7">{project.outcome}</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-xs uppercase tracking-[0.16em] text-muted">关键亮点</div>
                <ul className="mt-3 grid gap-3 md:grid-cols-3">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-[20px] border border-line bg-paper-soft px-4 py-4"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={project.githubUrl} external>
                  查看源码
                </Button>
                <Button href={project.demoUrl} variant="secondary" external>
                  打开链接
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-7xl">
        <div className="max-w-3xl">
          <Badge variant="outline">项目档案</Badge>
          <h2 className="mt-4 text-3xl font-bold">继续看完整项目谱系</h2>
          <p className="mt-3 text-muted">
            下面保留筛选能力，方便快速查看我涉及过的技术方向和项目类型。
          </p>
        </div>

        <FilterGroup
          items={uniqueStacks}
          activeItem={filter}
          onChange={setFilter}
          moreLabel="更多技术"
          lessLabel="收起技术"
        />

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {archiveProjects.length > 0 ? (
            archiveProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-card border border-line bg-panel p-5 shadow-card"
              >
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="outline">{project.status}</Badge>
                  <span className="text-xs uppercase tracking-[0.16em] text-muted">
                    {project.updatedAt}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>
                <p className="mt-3 text-muted">{project.summary}</p>

                <div className="mt-5 space-y-4">
                  <div className="rounded-[20px] border border-line bg-paper p-4">
                    <div className="text-xs uppercase tracking-[0.16em] text-muted">问题定义</div>
                    <p className="mt-3 leading-7">{project.problem}</p>
                  </div>
                  <div className="rounded-[20px] border border-line bg-paper-soft p-4">
                    <div className="text-xs uppercase tracking-[0.16em] text-muted">结果与价值</div>
                    <p className="mt-3 leading-7">{project.outcome}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((stack) => (
                    <Badge key={stack} variant="outline">
                      {stack}
                    </Badge>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Button href={project.githubUrl} external>
                    查看源码
                  </Button>
                  <Button href={project.demoUrl} external variant="secondary">
                    打开链接
                  </Button>
                </div>
              </article>
            ))
          ) : (
            <article className="rounded-card border border-dashed border-line bg-panel p-6 shadow-card md:col-span-2">
              <h3 className="text-2xl font-bold">当前筛选下还没有项目</h3>
              <p className="mt-3 text-muted">
                可以切换其它技术标签，或者先查看上面的代表案例了解我的主要项目方向。
              </p>
            </article>
          )}
        </div>
      </section>
    </div>
  );
}
