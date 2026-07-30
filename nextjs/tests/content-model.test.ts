import { describe, expect, it } from 'vitest';
import { siteData } from '@/lib/data';

describe('portfolio content model', () => {
  const featured = siteData.projects.filter((project) => project.featured);

  it('derives public counts from content arrays', () => {
    expect(siteData.metrics.find((metric) => metric.key === 'posts')?.value).toBe(String(siteData.posts.length));
    expect(siteData.metrics.find((metric) => metric.label === '我的项目')?.value).toBe(String(featured.length));
  });

  it('uses unique slugs and valid evidence links for representative projects', () => {
    const slugs = featured.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(featured.length);
    for (const project of featured) {
      expect(project.slug).toMatch(/^[a-z0-9-]+$/);
      expect(project.verification?.length).toBeGreaterThanOrEqual(2);
      for (const evidence of project.verification ?? []) {
        expect(evidence.label.trim()).not.toBe('');
        expect(() => new URL(evidence.url)).not.toThrow();
      }
    }
  });
});
