import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import manifest from '@/app/manifest';
import robots from '@/app/robots';
import sitemap from '@/app/sitemap';

const publicDir = path.resolve(process.cwd(), 'public');

describe('SEO endpoints', () => {
  it('advertises the production sitemap', () => {
    expect(robots().sitemap).toBe('https://qling.it.com/sitemap.xml');
  });

  it('includes every primary route and representative project', () => {
    const urls = sitemap().map((entry) => entry.url);
    for (const route of [
      '/',
      '/about/',
      '/projects/',
      '/projects/xiangqi-arena/',
      '/projects/qling/',
      '/projects/qingqing/',
      '/blog/',
      '/timeline/',
      '/resume/',
    ]) {
      expect(urls).toContain(`https://qling.it.com${route}`);
    }
  });

  it('provides an installable site manifest', () => {
    expect(manifest()).toMatchObject({
      start_url: '/',
      display: 'standalone',
      lang: 'zh-CN',
    });
  });
});

describe('public resume assets', () => {
  it('keeps only the current resume and preview', () => {
    const names = fs.readdirSync(publicDir);
    expect(names).toContain('张子阳-AI-Agent实习生-20260725-v3.pdf');
    expect(names).toContain('张子阳-AI-Agent实习生-20260725-v3-preview.png');
    expect(names.some((name) => name.includes('MagicCV'))).toBe(false);
    expect(names.filter((name) => name.endsWith('.pdf'))).toEqual([
      '张子阳-AI-Agent实习生-20260725-v3.pdf',
    ]);
  });
});
