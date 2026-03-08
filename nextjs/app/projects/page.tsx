'use client';

import { useState, useMemo } from 'react';
import { siteData } from '@/lib/data';
import { ProjectCard } from '@/components/features/ProjectCard';
import { Badge } from '@/components/ui/Badge';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>('all');
  const uniqueStacks = useMemo(() => {
    const stacks = new Set<string>();
    siteData.projects.forEach((p) => p.stack.forEach((s) => stacks.add(s)));
    return Array.from(stacks);
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return siteData.projects;
    return siteData.projects.filter((p) => p.stack.includes(filter));
  }, [filter]);

  return (
    <div className="min-h-screen py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <Badge>全部项目</Badge>
        <h1 className="text-4xl font-bold mt-4 mb-6">项目展示</h1>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full transition-all duration-200 ${
              filter === 'all'
                ? 'text-text bg-accent-blue/12'
                : 'text-muted hover:text-text hover:bg-accent-blue/8'
            }`}
          >
            全部
          </button>
          {uniqueStacks.map((stack) => (
            <button
              key={stack}
              onClick={() => setFilter(stack)}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                filter === stack
                  ? 'text-text bg-accent-blue/12'
                  : 'text-muted hover:text-text hover:bg-accent-blue/8'
              }`}
            >
              {stack}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-muted">
          没有找到相关项目
        </div>
      )}
    </div>
  );
}
