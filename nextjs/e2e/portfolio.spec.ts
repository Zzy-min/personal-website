import { expect, test as base } from '@playwright/test';

const test = base.extend<{ consoleErrors: string[] }>({
  consoleErrors: [async ({ page }, use) => {
    const errors: string[] = [];
    page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
    page.on('pageerror', (error) => errors.push(error.message));
    await use(errors);
    expect(errors).toEqual([]);
  }, { auto: true }],
});

test('首页可进入三个证据案例且没有横向滚动', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: '下载 PDF 简历' })).toBeVisible();
  for (const slug of ['xiangqi-arena', 'qling', 'qingqing']) {
    const link = page.locator(`a[href="/projects/${slug}"]`).first();
    await expect(link).toBeVisible();
    await link.click();
    await expect(page.getByRole('heading', { level: 2, name: '验证证据' })).toBeVisible();
    await page.goBack();
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
});

test('项目外链使用安全属性', async ({ page }) => {
  await page.goto('/projects/qling/');
  for (const link of await page.locator('a[target="_blank"]').all()) {
    await expect(link).toHaveAttribute('rel', /noreferrer/);
  }
});

test('博客支持搜索、空状态与站内摘要', async ({ page }) => {
  await page.goto('/blog/');
  await page.getByPlaceholder('搜索文章...').fill('记忆系统');
  await expect(page.getByRole('heading', { name: /轻灵记忆系统/ })).toBeVisible();
  await page.getByRole('link', { name: '阅读摘要' }).first().click();
  await expect(page.getByRole('heading', { name: '关键收获' })).toBeVisible();
  await page.goto('/blog/');
  await page.getByPlaceholder('搜索文章...').fill('完全不存在的关键词');
  await expect(page.getByText('没有找到相关文章')).toBeVisible();
});

test('简历可预览并下载', async ({ page }) => {
  await page.goto('/resume/');
  await expect(page.getByAltText(/简历预览/)).toBeVisible();
  await expect(page.getByRole('link', { name: '下载 PDF 简历' })).toHaveAttribute('href', /v3\.pdf$/);
});

test('手机菜单可打开', async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.startsWith('mobile'));
  await page.goto('/');
  await page.getByRole('button', { name: /菜单/ }).click();
  await expect(page.getByRole('link', { name: '项目', exact: true })).toBeVisible();
});
