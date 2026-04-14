import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { expect, test } from 'vitest';

import { siteData } from './data.ts';

const currentDir = dirname(fileURLToPath(import.meta.url));

test('featured project copy reflects the current qingju web direction', () => {
  const primaryProject = siteData.projects[0];

  expect(primaryProject.title).toMatch(/轻·棋局|Chinese-chess/);
  expect(primaryProject.summary).toMatch(/中国象棋/);
  expect(primaryProject.summary).toMatch(/五子棋/);
  expect(primaryProject.summary).toMatch(/围棋|三棋/);
  expect(primaryProject.githubUrl).toBe('https://github.com/Zzy-min/Chinese-chess');
});

test('homepage metrics match the currently public evidence counts', () => {
  expect(siteData.metrics).toEqual([
    { label: '博客文章', value: '18', key: 'posts' },
    { label: '精选项目', value: '5' },
    { label: '主攻方向', value: 'Java' }
  ]);
});

test('metric card does not hardcode the blog-post count', () => {
  const metricCardSource = readFileSync(resolve(currentDir, '../components/features/MetricCard.tsx'), 'utf8');

  expect(metricCardSource).not.toMatch(/String\(15\)/);
});
