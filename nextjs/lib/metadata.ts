import type { Metadata } from 'next';
import { siteData } from '@/lib/data';

export const SITE_URL = siteData.site.domain.replace(/\/$/, '');
export const OG_IMAGE = '/og-card.svg';

export function createPageMetadata(title: string, description: string, path = '/'): Metadata {
  const canonical = path === '/' ? '/' : `${path.replace(/\/$/, '')}/`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title, description, url: canonical, siteName: siteData.site.name, locale: 'zh_CN', type: 'website',
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${siteData.profile.name}的开发者作品集` }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [OG_IMAGE] },
  };
}
