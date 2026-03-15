'use client';

import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import { siteData } from '@/lib/data';
import { MetricCard } from '@/components/features/MetricCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const featuredProjects = siteData.projects
    .filter((project) => project.featured)
    .sort((left, right) => (left.featuredOrder ?? 99) - (right.featuredOrder ?? 99));
  const flagshipProject = featuredProjects[0];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-6">
        <div className="bg-panel border border-line rounded-card p-6 shadow-card">
          <Badge>面向招聘方的证据型主页</Badge>
          <h1 className="text-[clamp(2.3rem,6vw,4.4rem)] font-bold leading-tight mt-4">
            {siteData.profile.headline}
          </h1>
          <p className="text-lg mt-4">{siteData.profile.positioning}</p>
          <p className="text-muted mt-4 leading-7">{siteData.profile.intro}</p>

          <div className="flex flex-wrap gap-3 mt-7">
            <Button href="/projects">查看代表项目</Button>
            <Button href="/blog" variant="secondary">
              浏览技术文章
            </Button>
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

        <aside className="bg-panel border border-line rounded-card p-6 shadow-card">
          <Badge variant="outline">证据面板</Badge>
          <h2 className="text-2xl font-bold mt-4">{flagshipProject.title}</h2>
          <p className="text-muted mt-3">{flagshipProject.problem}</p>

          <div className="mt-5 rounded-card border border-line bg-paper p-4">
            <div className="text-xs uppercase tracking-[0.18em] text-muted">结果与价值</div>
            <p className="mt-3 leading-7">{flagshipProject.outcome}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5">
            {siteData.metrics.map((metric, index) => (
              <MetricCard key={index} metric={metric} />
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-5">
            <Link
              href={siteData.site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:bg-paper-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25"
            >
              <Github size={18} />
              <span>GitHub</span>
            </Link>
            <Link
              href={siteData.site.blog}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:bg-paper-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25"
            >
              <ExternalLink size={18} />
              <span>CSDN</span>
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
