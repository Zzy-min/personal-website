import { sourceData } from '@/lib/content/source';
import { onsiteSummaries } from '@/lib/content/summaries';

export const posts = [...onsiteSummaries, ...sourceData.posts];
export const featuredPosts = posts.filter((post) => post.featured);
