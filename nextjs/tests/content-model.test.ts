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
      expect(project.contributions?.length).toBeGreaterThanOrEqual(2);
      expect(project.aiContribution?.owned.length).toBeGreaterThanOrEqual(1);
      expect(project.architecture?.alt.trim()).not.toBe('');
      expect(project.challenges?.length).toBeGreaterThanOrEqual(1);
      expect(project.screenshots?.length).toBeGreaterThanOrEqual(1);
      for (const screenshot of project.screenshots ?? []) {
        expect(screenshot.src).toMatch(/^\/projects\//);
        expect(screenshot.alt.length).toBeGreaterThan(8);
      }
      for (const evidence of project.verification ?? []) {
        expect(evidence.label.trim()).not.toBe('');
        expect(() => new URL(evidence.url)).not.toThrow();
      }
    }
  });

  it('provides six complete onsite article summaries', () => {
    const summaries = siteData.posts.filter((post) => post.slug);
    expect(summaries).toHaveLength(6);
    expect(new Set(summaries.map((post) => post.slug)).size).toBe(6);
    for (const post of summaries) {
      expect(post.takeaways?.length).toBeGreaterThanOrEqual(3);
      expect(post.sections?.length).toBeGreaterThanOrEqual(2);
      expect(() => new URL(post.sourceUrl)).not.toThrow();
    }
  });
});
