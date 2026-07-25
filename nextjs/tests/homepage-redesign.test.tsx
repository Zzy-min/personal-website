import React from 'react';
import fs from 'node:fs';
import path from 'node:path';
import { render, screen, within } from '@testing-library/react';
import HomePage from '@/app/page';
import { Header } from '@/components/layout/Header';
import { siteData } from '@/lib/data';

describe('homepage redesign plan', () => {
  test('featured projects expose case-study evidence fields', () => {
    const featuredProjects = siteData.projects.filter((project) => project.featured);

    expect(featuredProjects.length).toBeGreaterThan(0);

    featuredProjects.forEach((project) => {
      expect(project).toMatchObject({
        problem: expect.any(String),
        outcome: expect.any(String),
        highlights: expect.any(Array),
        featuredOrder: expect.any(Number),
      });
      expect(project.highlights.length).toBeGreaterThanOrEqual(2);
    });
  });

  test('homepage contains exactly four focused sections', () => {
    const { container } = render(<HomePage />);

    expect(
      screen.getByRole('heading', {
        name: '把想法做成能运行、能验证的项目',
      })
    ).toBeInTheDocument();

    const sections = [...container.querySelectorAll('[data-home-section]')];
    expect(sections.map((section) => section.getAttribute('data-home-section'))).toEqual([
      'hero',
      'projects',
      'writing',
      'contact',
    ]);
    expect(screen.getByRole('heading', { name: '精选项目' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '最近文章' })).toBeInTheDocument();
    expect(screen.queryByText('我的能力')).not.toBeInTheDocument();
    expect(screen.queryByText('成长轨迹')).not.toBeInTheDocument();
    expect(screen.queryByText('下一步')).not.toBeInTheDocument();
  });

  test('hero offers both direct PDF download and an online preview', () => {
    render(<HomePage />);

    const resumeLink = screen.getByRole('link', { name: '下载 PDF 简历' });
    expect(resumeLink).toHaveAttribute('href', siteData.site.resume);
    expect(resumeLink).toHaveAttribute('download');
    expect(screen.getByRole('link', { name: '在线预览' })).toHaveAttribute('href', '/resume');
  });

  test('homepage header uses the updated personal name and removes the hero eyebrow copy', () => {
    render(
      <>
        <Header />
        <HomePage />
      </>
    );

    expect(screen.getByText('张子阳')).toBeInTheDocument();
    expect(screen.getByText('AI 应用开发者')).toBeInTheDocument();
    expect(screen.queryByText('面向招聘方的证据型主页')).not.toBeInTheDocument();
  });

  test('homepage project rows expose outbound project links', () => {
    render(<HomePage />);

    const supportingProject = siteData.projects
      .filter((project) => project.featured)
      .sort((left, right) => (left.featuredOrder ?? 99) - (right.featuredOrder ?? 99))[1];

    expect(supportingProject).toBeDefined();

    const cardHeading = screen.getByRole('heading', { name: supportingProject!.title });
    const card = cardHeading.closest('article');

    expect(card).not.toBeNull();
    expect(within(card!).getByRole('link', { name: '源码' })).toHaveAttribute(
      'href',
      supportingProject!.githubUrl
    );
    expect(within(card!).getByRole('link', { name: '项目链接' })).toHaveAttribute(
      'href',
      supportingProject!.demoUrl
    );
  });

  test('header keeps exactly five requested navigation destinations', () => {
    render(<Header />);

    const navigation = screen.getByRole('navigation', { name: '主导航' });
    expect(within(navigation).getAllByRole('link').map((link) => link.textContent)).toEqual([
      '首页',
      '项目',
      '博客',
      '时间线',
      '简历',
    ]);
    expect(within(navigation).queryByRole('link', { name: '关于我' })).not.toBeInTheDocument();
  });

  test('static export navigation avoids next/link imports', () => {
    const files = [
      'app/page.tsx',
      'components/features/Hero.tsx',
      'components/layout/Footer.tsx',
      'components/layout/Header.tsx',
      'components/ui/Button.tsx',
    ];

    files.forEach((relativePath) => {
      const absolutePath = path.join(process.cwd(), relativePath);
      const source = fs.readFileSync(absolutePath, 'utf8');

      expect(source).not.toContain("from 'next/link'");
    });
  });
});
