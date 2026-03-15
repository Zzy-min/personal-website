'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { siteData } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FilterGroup } from '@/components/ui/FilterGroup';
import { formatDate, sortByDateDesc } from '@/lib/utils';

export default function BlogPage() {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const featuredPosts = useMemo(
    () => sortByDateDesc(siteData.posts.filter((post) => post.featured), 'publishedAt').slice(0, 3),
    []
  );

  const uniqueTags = useMemo(() => {
    const tags = new Set<string>();
    siteData.posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }, []);

  const filteredPosts = useMemo(() => {
    let posts = sortByDateDesc(siteData.posts, 'publishedAt');

    if (filter !== 'all') {
      posts = posts.filter((post) => post.tags.includes(filter));
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.summary.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return posts;
  }, [filter, searchQuery]);

  return (
    <div className="min-h-screen px-4 py-12">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <Badge>精选文章</Badge>
          <h1 className="mt-4 text-4xl font-bold">写作是我复盘和表达技术理解的方式</h1>
          <p className="mt-4 text-lg text-muted">
            这些文章不是简单的笔记归档，而是我把项目实践、基础知识和学习方法重新组织后的公开证据。
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <article
              key={post.title}
              className="rounded-card border border-line bg-panel p-6 shadow-card"
            >
              <div className="flex items-center justify-between gap-4">
                <Badge variant="outline">{post.tags.join(' · ')}</Badge>
                <span className="text-sm text-muted">{formatDate(post.publishedAt)}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold">{post.title}</h2>
              <p className="mt-3 text-muted">{post.summary}</p>
              <p className="mt-4 leading-7">{post.featuredReason ?? '这篇文章对应当前阶段的重要学习节点。'}</p>
              <div className="mt-6">
                <Button href={post.sourceUrl} external>
                  阅读原文
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-7xl">
        <div className="max-w-3xl">
          <Badge variant="outline">全部文章</Badge>
          <h2 className="mt-4 text-3xl font-bold">继续查看完整写作档案</h2>
          <p className="mt-3 text-muted">
            保留搜索和标签筛选，方便快速定位你更关心的主题。
          </p>
        </div>

        <div className="relative mt-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
          <input
            type="text"
            placeholder="搜索文章..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="w-full rounded-[20px] border border-line bg-panel py-3 pl-11 pr-4 text-text outline-none transition-colors placeholder:text-muted focus:border-primary/35 focus-visible:ring-2 focus-visible:ring-primary/20"
          />
        </div>

        <FilterGroup
          items={uniqueTags}
          activeItem={filter}
          onChange={setFilter}
          moreLabel="更多标签"
          lessLabel="收起标签"
        />

        <div className="mt-6 space-y-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article
                key={post.title}
                className="rounded-card border border-line bg-panel p-5 shadow-card"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <span className="text-sm text-muted">{formatDate(post.publishedAt)}</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold">{post.title}</h3>
                <p className="mt-3 text-muted">{post.summary}</p>
                <div className="mt-5">
                  <Button href={post.sourceUrl} external variant="secondary">
                    阅读原文
                  </Button>
                </div>
              </article>
            ))
          ) : (
            <article className="rounded-card border border-dashed border-line bg-panel p-6 shadow-card">
              <h3 className="text-2xl font-bold">没有找到相关文章</h3>
              <p className="mt-3 text-muted">
                可以换一个关键词，或者直接浏览精选文章了解我的主要输出方向。
              </p>
            </article>
          )}
        </div>
      </section>
    </div>
  );
}
