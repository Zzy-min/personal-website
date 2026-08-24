import type { Metadata, Viewport } from 'next';
import { siteData } from '@/lib/data';
import { OG_IMAGE } from '@/lib/metadata';
import '@/app/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: siteData.profile.name + ' 的个人网站',
    template: `%s | ${siteData.profile.name} 的个人网站`,
  },
  description: siteData.profile.positioning,
  metadataBase: new URL(siteData.site.domain),
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: siteData.profile.name + ' 的个人网站',
    description: siteData.profile.positioning,
    url: siteData.site.domain,
    siteName: siteData.profile.name + ' 的个人网站',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: '张子阳的开发者作品集' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteData.site.name,
    description: siteData.profile.positioning,
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: "#fafaf9",
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: siteData.profile.name,
      url: siteData.site.domain,
      jobTitle: 'AI 应用开发者',
      sameAs: [siteData.site.github, siteData.site.blog],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteData.site.name,
      url: siteData.site.domain,
      inLanguage: 'zh-CN',
    },
  ];
  return (
    <html lang="zh-CN" data-theme="paper">
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
          type="application/ld+json"
        />
      </head>
      <body
        className="min-h-screen bg-bg font-sans text-text antialiased"
      >
        <div className="shell">
          <Header />
          <a className="skip-link" href="#main-content">跳到主要内容</a>
          <main id="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
