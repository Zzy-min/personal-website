import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/metadata';
export const metadata = createPageMetadata('简历', '张子阳 AI 应用开发实习生简历预览与 PDF 下载。', '/resume');
export default function Layout({ children }: { children: ReactNode }) { return children; }
