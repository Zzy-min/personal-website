'use client';

import type { Post } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';
import { ExternalLink } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-panel border border-line rounded-card p-6 shadow-card hover:-translate-y-0.5 transition-transform duration-200">
      <div className="flex justify-between gap-4 items-center mb-4">
        <Badge variant="outline">{post.tags.join(' · ')}</Badge>
        <span className="text-muted text-sm">{formatDate(post.publishedAt)}</span>
      </div>
      <h3 className="text-xl font-bold mb-3">{post.title}</h3>
      <p className="mb-4">{post.summary}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
      <div>
        <a
          href={post.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3 rounded-14px border border-transparent bg-gradient-to-br from-primary-blue to-primary-strong text-bg font-bold hover:-translate-y-0.5 transition-transform duration-200"
        >
          <ExternalLink size={16} />
          <span>阅读原文</span>
        </a>
      </div>
    </article>
  );
}
