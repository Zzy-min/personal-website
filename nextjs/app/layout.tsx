import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono, Noto_Sans_SC, Noto_Serif_SC } from 'next/font/google';
import { siteData } from '@/lib/data';
import '@/app/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const sans = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const serif = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: siteData.profile.name + ' 的个人网站',
    template: `%s | ${siteData.profile.name} 的个人网站`,
  },
  description: siteData.profile.positioning,
  metadataBase: new URL(siteData.site.domain),
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
  themeColor: '#f5efe5',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-theme="paper">
      <body
        className={`${sans.variable} ${serif.variable} ${mono.variable} min-h-screen bg-bg font-sans text-text antialiased`}
      >
        <div className="shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
