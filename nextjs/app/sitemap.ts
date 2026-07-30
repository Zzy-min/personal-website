import type { MetadataRoute } from 'next';
import { siteData } from '@/lib/data';
import { SITE_URL } from '@/lib/metadata';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/about/', '/projects/', '/blog/', '/timeline/', '/resume/'];
  const projects = siteData.projects.filter((project) => project.slug).map((project) => `/projects/${project.slug}/`);
  return [...routes, ...projects].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date('2026-07-30'),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.startsWith('/projects/') ? 0.8 : 0.7,
  }));
}
