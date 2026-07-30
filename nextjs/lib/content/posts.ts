import { sourceData } from '@/lib/content/source';

export const posts = sourceData.posts;
export const featuredPosts = posts.filter((post) => post.featured);
