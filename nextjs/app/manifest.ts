import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '张子阳的开发者作品集',
    short_name: '张子阳',
    description: '可运行、可验证的项目与技术复盘。',
    start_url: '/',
    display: 'standalone',
    background_color: '#f6f6f1',
    theme_color: '#285943',
    lang: 'zh-CN',
  };
}
