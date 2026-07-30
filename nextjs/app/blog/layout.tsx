import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/metadata';
export const metadata = createPageMetadata('技术博客', '张子阳的技术文章、项目复盘与学习笔记。', '/blog');
export default function Layout({ children }: { children: ReactNode }) { return children; }
