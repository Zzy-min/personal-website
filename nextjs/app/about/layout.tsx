import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/metadata';
export const metadata = createPageMetadata('关于我', '了解张子阳的开发方向、实践方法与联系方式。', '/about');
export default function Layout({ children }: { children: ReactNode }) { return children; }
