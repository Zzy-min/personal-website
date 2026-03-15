import React from 'react';
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

  test('homepage follows the evidence-first narrative order', () => {
    const { container } = render(<HomePage />);

    expect(
      screen.getByRole('heading', {
        name: '用项目证明学习速度与工程潜力',
      })
    ).toBeInTheDocument();

    const text = container.textContent ?? '';
    const narrativeAnchors = ['代表项目', '能力证据', '精选文章', '成长轨迹', '联系我'];
    const positions = narrativeAnchors.map((anchor) => text.indexOf(anchor));

    expect(positions.every((position) => position >= 0)).toBe(true);
    expect(positions).toEqual([...positions].sort((left, right) => left - right));
  });

  test('homepage header uses the updated personal name and removes the hero eyebrow copy', () => {
    render(
      <>
        <Header />
        <HomePage />
      </>
    );

    expect(screen.getByText('子阳')).toBeInTheDocument();
    expect(screen.getByText('Java / 技术探索者')).toBeInTheDocument();
    expect(screen.queryByText('面向招聘方的证据型主页')).not.toBeInTheDocument();
  });

  test('homepage supporting project cards still expose outbound project links', () => {
    render(<HomePage />);

    const supportingProject = siteData.projects
      .filter((project) => project.featured)
      .sort((left, right) => (left.featuredOrder ?? 99) - (right.featuredOrder ?? 99))[1];

    expect(supportingProject).toBeDefined();

    const cardHeading = screen.getByRole('heading', { name: supportingProject!.title });
    const card = cardHeading.closest('article');

    expect(card).not.toBeNull();
    expect(within(card!).getByRole('link', { name: '查看源码' })).toHaveAttribute(
      'href',
      supportingProject!.githubUrl
    );
    expect(within(card!).getByRole('link', { name: '打开链接' })).toHaveAttribute(
      'href',
      supportingProject!.demoUrl
    );
  });
});
