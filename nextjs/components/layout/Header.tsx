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
    <header className="sticky top-0 z-20 border-b border-line bg-bg/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <SiteLink href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 bg-primary/10 font-serif text-lg text-primary-strong">
            {siteData.profile.name[0].toUpperCase()}
          </span>
          <div>
            <strong className="block font-serif text-lg">{siteData.profile.name}</strong>
            <div className="text-xs uppercase tracking-[0.16em] text-muted">{siteData.profile.role}</div>
          </div>
        </SiteLink>

        <nav className="hidden items-center gap-2 md:flex" aria-label="主导航">
          {siteData.navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <SiteLink
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25 ${
                  isActive
                    ? 'bg-primary text-paper-inverse'
                    : 'text-muted hover:bg-paper-hover hover:text-text'
                }`}
              >
                {item.label}
              </SiteLink>
            );
          })}
        </nav>

        <button
          type="button"
          className="rounded-full border border-line bg-panel px-3 py-3 text-text transition-colors hover:bg-paper-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="菜单"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`px-4 pb-4 md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="mx-auto max-w-7xl" aria-label="移动导航">
          {siteData.navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <SiteLink
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`mt-2 block rounded-[18px] px-4 py-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25 ${
                  isActive
                    ? 'bg-primary text-paper-inverse'
                    : 'text-muted hover:bg-paper-hover hover:text-text'
                }`}
              >
                {item.label}
              </SiteLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
