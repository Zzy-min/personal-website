import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/metadata';
export const metadata = createPageMetadata('项目案例', '轻·棋局、轻灵与轻青等可运行、可验证的开发项目。', '/projects');
export default function Layout({ children }: { children: ReactNode }) { return children; }
