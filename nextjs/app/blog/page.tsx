'use client';

import { useState, useMemo } from 'react';
import { siteData } from '@/lib/data';
import { PostCard } from '@/components/features/PostCard';
import { Badge } from '@/components/ui/Badge';
import { Search } from 'lucide-react';
import { sortByDateDesc } from '@/lib/utils';

export default function BlogPage() {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const uniqueTags = useMemo(() => {
    const tags = new Set<string>();
    siteData.posts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags);
  }, []);

  const filteredPosts = useMemo(() => {
    let posts = sortByDateDesc(siteData.posts, 'publishedAt');

    // Filter by tag
    if (filter !== 'all') {
      posts = posts.filter((p) => p.tags.includes(filter));
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.summary.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query))
      );
    }

    return posts;
  }, [filter, searchQuery]);

  return (
    <div className="min-h-screen py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <Badge>全部文章</Badge>
        <h1 className="text-4xl font-bold mt-4 mb-6">博客文章</h1>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
          <input
            type="text"
            placeholder="搜索文章..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-14px bg-panel border border-line text-text placeholder:text-muted focus:outline-none focus:border-accent-blue/30 transition-colors"
          />
        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full transition-all duration-200 ${
              filter === 'all'
                ? 'text-text bg-accent-blue/12'
                : 'text-muted hover:text-text hover:bg-accent-blue/8'
            }`}
          >
            全部
          </button>
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                filter === tag
                  ? 'text-text bg-accent-blue/12'
                  : 'text-muted hover:text-text hover:bg-accent-blue/8'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12 text-muted">
          没有找到相关文章
        </div>
      )}
    </div>
  );
}
