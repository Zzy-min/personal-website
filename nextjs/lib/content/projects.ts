import { sourceData } from '@/lib/content/source';

export const projects = sourceData.projects;
export const featuredProjects = projects
  .filter((project) => project.featured && project.slug)
  .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
