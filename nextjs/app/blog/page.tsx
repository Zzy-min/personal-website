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
          post.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          post.takeaways?.some((item) => item.toLowerCase().includes(query))
      );
    }

    return posts;
  }, [filter, searchQuery]);

  return (
    <div className="page-shell">
      <section className="mx-auto max-w-7xl">
        <div className="page-intro">
          <Badge>精选文章</Badge>
          <h1>写作是我复盘和表达技术理解的方式</h1>
          <p>
            我会整理项目实践、基础知识和学习方法，也用写作记录自己的理解和思考。
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <article
              key={post.title}
              className="content-card flex h-full flex-col p-6 md:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <Badge variant="outline">{post.tags.join(' · ')}</Badge>
                <span className="text-sm text-muted">{formatDate(post.publishedAt)}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold">{post.title}</h2>
              <p className="mt-3 text-muted">{post.summary}</p>
              {post.featuredReason ? (
                <p className="mt-4 leading-7">{post.featuredReason}</p>
              ) : null}
              <div className="mt-auto pt-7">
                <Button href={post.slug ? `/blog/${post.slug}` : post.sourceUrl} external={!post.slug}>
                  {post.slug ? '阅读摘要' : '阅读原文'}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl md:mt-24">
        <div className="max-w-3xl">
          <Badge variant="outline">全部文章</Badge>
          <h2 className="mt-4 text-3xl font-bold">继续查看完整写作档案</h2>
          <p className="mt-3 text-muted">
            保留搜索和标签筛选，方便快速定位你更关心的主题。
          </p>
        </div>

        <div className="relative mt-6">
          <Search aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} strokeWidth={1.75} />
          <input
            type="text"
            placeholder="搜索文章..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            aria-label="搜索文章"
            className="search-field"
          />
        </div>

        <FilterGroup
          items={uniqueTags}
          activeItem={filter}
          onChange={setFilter}
          moreLabel="更多标签"
          lessLabel="收起标签"
        />

        <div className="mt-8 space-y-5">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article
                key={post.title}
                className="content-card p-5 md:p-6"
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
                  <Button href={post.slug ? `/blog/${post.slug}` : post.sourceUrl} external={!post.slug} variant="secondary">
                    {post.slug ? '阅读摘要' : '阅读原文'}
                  </Button>
                </div>
              </article>
            ))
          ) : (
            <article className="rounded-card border border-dashed border-line bg-panel p-7">
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
