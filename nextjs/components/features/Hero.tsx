'use client';

import { siteData } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { MetricCard } from '@/components/features/MetricCard';
import { Badge } from '@/components/ui/Badge';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1.3fr_0.9fr] gap-6">
        {/* Hero Copy */}
        <div className="bg-panel border border-line rounded-card p-6 shadow-card">
          <Badge>个人品牌站 · 作品集 · 博客聚合</Badge>
          <h1 className="text-[clamp(2.3rem,6vw,4.4rem)] font-bold leading-tight mt-4 mb-4">
            {siteData.profile.headline}
          </h1>
          <p className="text-muted mb-7">{siteData.profile.intro}</p>
          <div className="flex flex-wrap gap-3">
            <Button href="/projects">查看项目</Button>
            <Button href="/blog" variant="secondary">
              浏览博客
            </Button>
          </div>
          <p className="text-muted mt-4 text-sm">
            以中文内容为主，聚焦 Java、Web 开发与学习成长记录。
          </p>
        </div>

        {/* Hero Aside */}
        <aside className="bg-panel border border-line rounded-card p-6 shadow-card">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-12 h-12 rounded-16px inline-flex items-center justify-center bg-gradient-to-br from-accent-blue/20 to-accent-purple/25 text-primary-strong border border-accent-purple/20 font-bold">
              {siteData.profile.name[0].toUpperCase()}
            </span>
            <div>
              <strong className="text-sm block">{siteData.profile.name}</strong>
              <div className="text-muted text-xs">{siteData.profile.role}</div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {siteData.metrics.map((metric, index) => (
              <MetricCard key={index} metric={metric} />
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3 mt-5">
            <Link
              href={siteData.site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-14px border border-line hover:-translate-y-0.5 hover:bg-accent-blue/12 transition-all duration-200"
            >
              <Github size={18} />
              <span>GitHub</span>
            </Link>
            <Link
              href={siteData.site.blog}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-14px border border-line hover:-translate-y-0.5 hover:bg-accent-blue/12 transition-all duration-200"
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
