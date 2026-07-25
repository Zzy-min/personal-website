import type { Metadata, Viewport } from 'next';
import { siteData } from '@/lib/data';
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteData.profile.name + ' 的个人网站',
    description: siteData.profile.positioning,
    url: siteData.site.domain,
    siteName: siteData.profile.name + ' 的个人网站',
    locale: 'zh_CN',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#f6f6f1',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-theme="paper">
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
