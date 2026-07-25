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
    <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:py-5">
        <SiteLink href="/" className="group flex items-baseline gap-3 focus-visible:outline-none">
          <strong className="font-serif text-xl tracking-tight">{siteData.profile.name}</strong>
          <span className="hidden text-xs text-muted transition-colors group-hover:text-text sm:inline">AI 应用开发者</span>
        </SiteLink>

        <nav className="hidden items-center gap-7 md:flex" aria-label="主导航">
          {siteData.navigation.map((item) => {
            const isActive = pathname === item.href;
            return <SiteLink key={item.href} href={item.href} className={`nav-link ${isActive ? 'nav-link-active' : ''}`}>{item.label}</SiteLink>;
          })}
        </nav>

        <button type="button" className="menu-button md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation" aria-label={isMobileMenuOpen ? '关闭菜单' : '打开菜单'}>
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav id="mobile-navigation" className={`border-t border-line px-4 py-3 md:hidden ${isMobileMenuOpen ? 'grid' : 'hidden'}`} aria-label="移动导航">
        {siteData.navigation.map((item) => {
          const isActive = pathname === item.href;
          return <SiteLink key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link ${isActive ? 'text-primary' : ''}`}>{item.label}</SiteLink>;
        })}
      </nav>
    </header>
  );
}
