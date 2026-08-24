"use client";

import { useMemo, useState } from "react";
import { siteData } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FilterGroup } from "@/components/ui/FilterGroup";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("all");

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

    if (filter === "all") return projects;
    return projects.filter((project) => project.stack.includes(filter));
  }, [filter]);

  return (
    <div className="page-shell">
      <section className="mx-auto max-w-7xl">
        <div className="page-intro">
          <Badge>我的项目</Badge>
          <h1>我把想法做成可以运行的项目</h1>
          <p>
            我会介绍每个项目解决的问题、我承担的工作，以及目前已经完成的功能和验证。
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="content-card p-6 md:p-9"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge>{project.status}</Badge>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 font-semibold">
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

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">{project.title}</h2>
              <p className="mt-3.5 text-lg leading-relaxed text-zinc-700">{project.summary}</p>

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                <div className="rounded-card border border-zinc-200 bg-zinc-50/70 p-5 md:p-6 shadow-subtle">
                  <div className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-zinc-600">问题定义</div>
                  <p className="mt-3 leading-7 text-zinc-700">{project.problem}</p>
                </div>
                <div className="rounded-card border border-zinc-200 bg-zinc-50/70 p-5 md:p-6 shadow-subtle">
                  <div className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-zinc-600">结果与价值</div>
                  <p className="mt-3 leading-7 text-zinc-950 font-medium">{project.outcome}</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-zinc-600">关键亮点</div>
                <ul className="mt-3 grid gap-3 md:grid-cols-3">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-button border border-zinc-200 bg-white p-4 text-sm font-medium leading-relaxed text-zinc-800 shadow-subtle"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-3.5 border-t border-zinc-200 pt-6">
                {project.slug ? (
                  <Button href={`/projects/${project.slug}`}>
                    查看项目详情
                  </Button>
                ) : null}
                <Button href={project.githubUrl} external variant="secondary">
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

      <section className="mx-auto mt-20 max-w-7xl md:mt-28">
        <div className="max-w-3xl">
          <Badge variant="outline">项目档案</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">继续看完整项目谱系</h2>
          <p className="mt-3 text-zinc-600">
            你也可以按技术方向和项目类型浏览我的其他实践。
          </p>
        </div>

        <FilterGroup
          items={uniqueStacks}
          activeItem={filter}
          onChange={setFilter}
          moreLabel="更多技术"
          lessLabel="收起技术"
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {archiveProjects.length > 0 ? (
            archiveProjects.map((project) => (
              <article
                key={project.title}
                className="content-card flex flex-col justify-between p-6 md:p-7"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant="outline">{project.status}</Badge>
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500 font-semibold">
                      {project.updatedAt}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-zinc-950">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{project.summary}</p>

                  <div className="mt-5 space-y-3.5">
                    <div className="rounded-button border border-zinc-200 bg-zinc-50/70 p-4 text-sm shadow-subtle">
                      <div className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.16em] text-zinc-600">问题定义</div>
                      <p className="mt-2 leading-relaxed text-zinc-700">{project.problem}</p>
                    </div>
                    <div className="rounded-button border border-zinc-200 bg-zinc-50/70 p-4 text-sm shadow-subtle">
                      <div className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.16em] text-zinc-600">结果与价值</div>
                      <p className="mt-2 leading-relaxed text-zinc-950 font-medium">{project.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-zinc-200 pt-5">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.stack.map((stack) => (
                      <Badge key={stack} variant="outline">
                        {stack}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button href={project.githubUrl} external>
                      查看源码
                    </Button>
                    <Button href={project.demoUrl} external variant="secondary">
                      打开链接
                    </Button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <article className="rounded-card border border-dashed border-zinc-300 bg-white p-8 shadow-card md:col-span-2 text-center">
              <h3 className="text-2xl font-bold text-zinc-950">当前筛选下还没有项目</h3>
              <p className="mt-3 text-zinc-600 max-w-md mx-auto">
                可以切换其他技术标签，或者先查看上面的项目了解我当前的开发方向。
              </p>
            </article>
          )}
        </div>
      </section>
    </div>
  );
}
