import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/metadata';
export const metadata = createPageMetadata('成长时间线', '张子阳的项目迭代、技术写作与学习记录。', '/timeline');
export default function Layout({ children }: { children: ReactNode }) { return children; }
