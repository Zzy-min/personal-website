'use client';

import { Github, ExternalLink } from 'lucide-react';
import { siteData } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SiteLink } from '@/components/ui/SiteLink';

export function Hero() {
  const featuredProjects = siteData.projects
    .filter((project) => project.featured)
    .sort((left, right) => (left.featuredOrder ?? 99) - (right.featuredOrder ?? 99));
  const flagshipProject = featuredProjects[0];

  return (
    <section className="hero-field mx-auto max-w-7xl px-4 pb-16 pt-14 md:pb-24 md:pt-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-end">
        <div className="hero-copy">
          <div className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-primary">
            <span className="status-pulse" aria-hidden="true" />
            正在寻找 AI Agent 开发实践机会
          </div>
          <h1 className="text-[clamp(2.3rem,6vw,4.4rem)] font-bold leading-tight">
            {siteData.profile.headline}
          </h1>
          <p className="text-lg mt-4">{siteData.profile.positioning}</p>
          <p className="text-muted mt-4 leading-7">{siteData.profile.intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={siteData.site.resume} download>
              下载简历
            </Button>
            <SiteLink href="/projects" className="evidence-link">查看项目证据 <span aria-hidden="true">↗</span></SiteLink>
          </div>

          <div className="mt-7">
            <div className="text-xs uppercase tracking-[0.18em] text-muted">当前重点</div>
            <div className="flex flex-wrap gap-2 mt-3">
              {siteData.profile.currentFocus.map((focus) => (
                <Badge key={focus} variant="outline">
                  {focus}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <aside className="evidence-sheet">
          <div className="sheet-index">01 / CASE NOTE</div>
          <h2 className="text-2xl font-bold mt-4">{flagshipProject.title}</h2>
          <p className="text-muted mt-3">{flagshipProject.problem}</p>

          <div className="mt-6 border-t border-line pt-5">
            <div className="text-xs uppercase tracking-[0.18em] text-muted">最近证明</div>
            <p className="mt-3 leading-7">{flagshipProject.outcome}</p>
          </div>

          <div className="flex flex-wrap gap-3 mt-5">
            <SiteLink
              href={siteData.site.github}
              external
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:bg-paper-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25"
            >
              <Github size={18} />
              <span>GitHub</span>
            </SiteLink>
            <SiteLink
              href={siteData.site.blog}
              external
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:bg-paper-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25"
            >
              <ExternalLink size={18} />
              <span>CSDN</span>
            </SiteLink>
          </div>
        </aside>
      </div>
    </section>
  );
}
