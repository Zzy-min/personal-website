import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { expect, test } from 'vitest';

import { siteData } from './data.ts';

const currentDir = dirname(fileURLToPath(import.meta.url));

test('featured project copy reflects the current XiangqiArena direction', () => {
  const primaryProject = siteData.projects[0];

  expect(primaryProject.title).toMatch(/XiangqiArena|三棋/);
  expect(primaryProject.summary).toMatch(/象棋|五子棋/);
  expect(primaryProject.githubUrl).toBe('https://github.com/Zzy-min/Chinese-chess');
  expect(primaryProject.demoUrl).toBe('https://www.xiangqiarena.com/');
});

test('homepage metrics match the currently public evidence counts', () => {
  expect(siteData.metrics).toEqual([
    { label: '博客文章', value: '48', key: 'posts' },
    { label: '我的项目', value: '3' },
    { label: '掌握语言', value: '3' }
  ]);
});

test('metric card does not hardcode the blog-post count', () => {
  const metricCardSource = readFileSync(resolve(currentDir, '../components/features/MetricCard.tsx'), 'utf8');

  expect(metricCardSource).not.toMatch(/String\(15\)/);
});

test('recruiter-facing profile keeps the honest skill boundary and current contact details', () => {
  expect(siteData.profile.name).toBe('张子阳');
  expect(siteData.site.name).toBe('张子阳的个人网站');
  expect(siteData.profile.email).toEqual({
    user: '2293822701',
    domain: 'qq.com'
  });
  expect(siteData.profile.additionalEmails).toEqual(['zzy19812007@gmail.com']);
  expect(siteData.profile.skills).toEqual(['Java', 'C', 'Python', 'AI Agent 开发', '调试与测试']);
  expect(siteData.site.resume).toBe('/张子阳-AI-Agent实习生-20260725.pdf');
  expect(siteData.site.domain).toBe('https://qling.it.com');
});

test('latest CSDN article is included with its public metadata', () => {
  expect(siteData.posts).toHaveLength(48);
  expect(new Set(siteData.posts.map((post) => post.sourceUrl)).size).toBe(48);
  expect(siteData.posts[0]).toMatchObject({
    title: 'MySQL 学习笔记 01：从概念到约束，搭好库表骨架',
    publishedAt: '2026-07-24',
    sourceUrl: 'https://blog.csdn.net/Zzydzyg0618/article/details/163161740'
  });
});

test('the three flagship projects describe my concrete responsibilities and validation work', () => {
  const featuredProjects = siteData.projects
    .filter((project) => project.featured)
    .sort((left, right) => (left.featuredOrder ?? 99) - (right.featuredOrder ?? 99))
    .slice(0, 3);

  expect(featuredProjects.map((project) => project.title)).toEqual([
    '轻·棋局 XiangqiArena',
    '轻灵 Qling',
    '轻青 Qingqing'
  ]);
  featuredProjects.forEach((project) => {
    expect(project.outcome.length).toBeGreaterThan(30);
    expect(project.slug).toMatch(/^[a-z0-9-]+$/);
    expect(project.role).toMatch(/^我负责/);
    expect(project.verification.length).toBeGreaterThanOrEqual(2);
  });
});

test('recent timeline entries distinguish claims from verifiable evidence', () => {
  const recentEntries = siteData.timeline.filter((item) => item.date >= '2026-07-01');

  expect(recentEntries.length).toBeGreaterThanOrEqual(4);
  recentEntries.forEach((item) => {
    expect(item.evidence).toBeTruthy();
    expect(item.sourceUrl).toMatch(
      /^https:\/\/(github\.com\/Zzy-min\/|blog\.csdn\.net\/Zzydzyg0618\/)/,
    );
  });
});
