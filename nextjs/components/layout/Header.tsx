'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { siteData } from '@/lib/data';
import { SiteLink } from '@/components/ui/SiteLink';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/95 shadow-[0_1px_0_rgba(32,36,31,0.025)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 md:min-h-[4.5rem]">
        <SiteLink href="/" className="group flex items-baseline gap-3 focus-visible:outline-none">
          <strong className="font-serif text-xl tracking-[-0.03em]">{siteData.profile.name}</strong>
          <span className="hidden text-xs tracking-[0.04em] text-muted transition-colors duration-200 group-hover:text-text sm:inline">AI 应用开发者</span>
        </SiteLink>

        <nav className="hidden items-center gap-6 md:flex" aria-label="主导航">
          {siteData.navigation.map((item) => {
            const isActive = pathname === item.href;
            return <SiteLink key={item.href} href={item.href} className={`nav-link ${isActive ? 'nav-link-active' : ''}`}>{item.label}</SiteLink>;
          })}
        </nav>

        <button type="button" className="menu-button md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation" aria-label={isMobileMenuOpen ? '关闭菜单' : '打开菜单'}>
          {isMobileMenuOpen ? <X aria-hidden="true" size={19} strokeWidth={1.8} /> : <Menu aria-hidden="true" size={19} strokeWidth={1.8} />}
        </button>
      </div>

      <nav id="mobile-navigation" className={`border-t border-line bg-panel px-4 py-2 shadow-card md:hidden ${isMobileMenuOpen ? 'grid animate-fade-in' : 'hidden'}`} aria-label="移动导航">
        {siteData.navigation.map((item) => {
          const isActive = pathname === item.href;
          return <SiteLink key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link ${isActive ? 'text-primary' : ''}`}>{item.label}</SiteLink>;
        })}
      </nav>
    </header>
  );
}
