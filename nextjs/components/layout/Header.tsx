'use client';

import { useState, useEffect } from 'react';
import { siteData } from '@/lib/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-20 backdrop-blur-md bg-bg/90 border-b border-line">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between gap-4 py-4">
            <Link
              href="/"
              className="flex items-center gap-3.5 hover:opacity-80 transition-opacity"
            >
              <span className="w-12 h-12 rounded-16px inline-flex items-center justify-center bg-gradient-to-br from-accent-blue/20 to-accent-purple/25 text-primary-strong border border-accent-purple/20 font-bold">
                {siteData.profile.name[0].toUpperCase()}
              </span>
              <div>
                <strong className="text-sm block">{siteData.profile.name}</strong>
                <div className="text-muted text-xs">{siteData.profile.role}</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-3.5" aria-label="主导航">
              {siteData.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3.5 py-2 rounded-full text-muted hover:text-text hover:bg-accent-blue/15 transition-all duration-200 ${
                      isActive ? 'text-text bg-accent-blue/12' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="md:hidden border-0 bg-accent-blue/10 text-text px-3 py-3 rounded-14px hover:bg-accent-blue/15 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="菜单"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <div
          className={`md:hidden pb-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <nav className="container mx-auto px-4 max-w-7xl" aria-label="移动导航">
            {siteData.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-14px text-muted hover:text-text hover:bg-accent-blue/12 transition-all duration-200 ${
                    isActive ? 'text-text bg-accent-blue/12' : ''
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
