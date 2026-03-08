import type { Metadata } from 'next';
import { siteData } from '@/lib/data';
import '@/app/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: siteData.profile.name + ' 的个人网站',
    template: `%s | ${siteData.profile.name} 的个人网站`,
  },
  description: siteData.profile.headline,
  metadataBase: new URL(siteData.site.domain),
  openGraph: {
    title: siteData.profile.name + ' 的个人网站',
    description: siteData.profile.headline,
    url: siteData.site.domain,
    siteName: siteData.profile.name + ' 的个人网站',
    locale: 'zh_CN',
    type: 'website',
  },
  themeColor: '#07111f',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-theme="dark">
      <body className="min-h-screen bg-bg text-text antialiased">
        <div className="shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
