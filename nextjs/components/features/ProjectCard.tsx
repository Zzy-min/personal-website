'use client';

import type { Project } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';
import { Github, ExternalLink } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-panel border border-line rounded-card p-6 shadow-card hover:-translate-y-0.5 transition-transform duration-200">
      <div className="flex justify-between gap-4 items-center mb-4">
        <Badge>{project.status}</Badge>
        <span className="text-muted text-sm">{project.updatedAt}</span>
      </div>
      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
      <p className="mb-4">{project.summary}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {project.stack.map((tech) => (
          <Badge key={tech} variant="outline">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="flex gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3 rounded-14px border border-transparent bg-gradient-to-br from-primary-blue to-primary-strong text-bg font-bold hover:-translate-y-0.5 transition-transform duration-200"
        >
          <Github size={16} />
          <span>查看项目</span>
        </a>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3 rounded-14px border border-line bg-white/2 hover:-translate-y-0.5 hover:bg-white/5 transition-transform duration-200"
        >
          <ExternalLink size={16} />
          <span>打开链接</span>
        </a>
      </div>
    </article>
  );
}
