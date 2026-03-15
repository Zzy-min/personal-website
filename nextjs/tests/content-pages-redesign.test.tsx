import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import AboutPage from '@/app/about/page';
import BlogPage from '@/app/blog/page';
import ProjectsPage from '@/app/projects/page';
import TimelinePage from '@/app/timeline/page';
import { siteData } from '@/lib/data';

describe('content page redesign plan', () => {
  test('projects page presents featured case studies before the full archive', () => {
    const { container } = render(<ProjectsPage />);
    const text = container.textContent ?? '';

    expect(screen.getByRole('heading', { name: '项目不是列表，而是解决问题的证据' })).toBeInTheDocument();
    expect(text.indexOf('代表案例')).toBeGreaterThanOrEqual(0);
    expect(text.indexOf('项目档案')).toBeGreaterThan(text.indexOf('代表案例'));
    expect(text).toContain(siteData.projects[0].problem);
    expect(text).toContain(siteData.projects[0].outcome);
  });

  test('blog page highlights editorial picks with explanation before the searchable archive', () => {
    const { container } = render(<BlogPage />);
    const text = container.textContent ?? '';

    expect(screen.getByRole('heading', { name: '写作是我复盘和表达技术理解的方式' })).toBeInTheDocument();
    expect(text.indexOf('精选文章')).toBeGreaterThanOrEqual(0);
    expect(text.indexOf('全部文章')).toBeGreaterThan(text.indexOf('精选文章'));
    expect(text).toContain(siteData.posts[0].featuredReason ?? '');
    expect(screen.getByPlaceholderText('搜索文章...')).toBeInTheDocument();
  });

  test('project archive cards keep evidence details and outbound links for non-featured work', () => {
    render(<ProjectsPage />);

    const archiveProject = siteData.projects.find((project) => !project.featured);

    expect(archiveProject).toBeDefined();

    const cardHeading = screen.getByRole('heading', { name: archiveProject!.title });
    const card = cardHeading.closest('article');

    expect(card).not.toBeNull();
    expect(within(card!).getByText(archiveProject!.problem)).toBeInTheDocument();
    expect(within(card!).getByText(archiveProject!.outcome)).toBeInTheDocument();
    expect(within(card!).getByRole('link', { name: '查看源码' })).toHaveAttribute(
      'href',
      archiveProject!.githubUrl
    );
    expect(within(card!).getByRole('link', { name: '打开链接' })).toHaveAttribute(
      'href',
      archiveProject!.demoUrl
    );
  });

  test('projects page collapses long technology filter lists until expanded', () => {
    render(<ProjectsPage />);

    expect(screen.getByRole('button', { name: '更多技术' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Vercel' })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: '更多技术' }));

    expect(screen.getByRole('button', { name: 'Vercel' })).toBeInTheDocument();
  });

  test('blog archive entries keep article links and show an empty state for unmatched search', () => {
    render(<BlogPage />);

    const archivePost = siteData.posts.find((post) => !post.featured);

    expect(archivePost).toBeDefined();

    const cardHeading = screen.getByRole('heading', { name: archivePost!.title });
    const card = cardHeading.closest('article');

    expect(card).not.toBeNull();
    expect(within(card!).getByRole('link', { name: '阅读原文' })).toHaveAttribute(
      'href',
      archivePost!.sourceUrl
    );

    fireEvent.change(screen.getByPlaceholderText('搜索文章...'), {
      target: { value: '不存在的文章关键词' },
    });

    expect(screen.getByText('没有找到相关文章')).toBeInTheDocument();
    expect(
      screen.getByText('可以换一个关键词，或者直接浏览精选文章了解我的主要输出方向。')
    ).toBeInTheDocument();
  });

  test('blog page collapses long tag filter lists until expanded', () => {
    render(<BlogPage />);

    expect(screen.getByRole('button', { name: '更多标签' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'VSCode' })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: '更多标签' }));

    expect(screen.getByRole('button', { name: 'VSCode' })).toBeInTheDocument();
  });

  test('about page explains direction, method, and why the site exists', () => {
    render(<AboutPage />);

    expect(screen.getByRole('heading', { name: '我正在成为什么样的开发者' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '当前方向' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '为什么做这个站' })).toBeInTheDocument();
    expect(screen.getByText('Java / 技术探索者')).toBeInTheDocument();
    expect(screen.getByText('生日')).toBeInTheDocument();
    expect(screen.getByText('2007/5/4')).toBeInTheDocument();
  });

  test('timeline page frames milestones as growth evidence', () => {
    const { container } = render(<TimelinePage />);
    const text = container.textContent ?? '';

    expect(screen.getByRole('heading', { name: '成长证明' })).toBeInTheDocument();
    expect(text).toContain('阶段意义');
    expect(text).toContain(siteData.timeline[0].title);
  });

  test('projects and timeline pages surface locally discovered project evidence', () => {
    const { container: projectsContainer } = render(<ProjectsPage />);
    const projectsText = projectsContainer.textContent ?? '';

    expect(projectsText).toContain('XiangqiGame：Java 双端棋类平台');
    expect(projectsText).toContain('浏览器版 UI 重构（2026-03）');

    const { container: timelineContainer } = render(<TimelinePage />);
    const timelineText = timelineContainer.textContent ?? '';

    expect(timelineText).toContain('完成浏览器版 UI 重构');
    expect(timelineText).toContain('修复浏览器端 AI 队列稳定性');
  });
});
