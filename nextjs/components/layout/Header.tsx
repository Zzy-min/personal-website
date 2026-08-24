"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteData } from "@/lib/data";
import { SiteLink } from "@/components/ui/SiteLink";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-bg/90 shadow-[0_1px_0_rgba(0,0,0,0.03)] backdrop-blur-xl transition-all">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 md:min-h-[4.5rem]">
        <SiteLink href="/" className="group flex items-center gap-3 focus-visible:outline-none">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-900 font-mono text-sm font-bold text-white shadow-subtle transition-transform group-hover:scale-105">
            Z
          </span>
          <div className="flex items-baseline gap-2.5">
            <strong className="font-serif text-xl tracking-[-0.02em] text-text transition-colors group-hover:text-black">{siteData.profile.name}</strong>
            <span className="hidden text-xs tracking-[0.04em] text-muted transition-colors duration-200 group-hover:text-text sm:inline font-mono">AI 应用开发者</span>
          </div>
        </SiteLink>

        <nav className="hidden items-center gap-1.5 md:flex" aria-label="主导航">
          {siteData.navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <SiteLink
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? "nav-link-active" : ""}`}
              >
                {item.label}
              </SiteLink>
            );
          })}
        </nav>

        <button
          type="button"
          className="menu-button md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMobileMenuOpen ? "关闭菜单" : "打开菜单"}
        >
          {isMobileMenuOpen ? <X aria-hidden="true" size={19} strokeWidth={2} /> : <Menu aria-hidden="true" size={19} strokeWidth={2} />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`border-t border-line/80 bg-panel/95 backdrop-blur-xl px-4 py-3 shadow-card md:hidden ${isMobileMenuOpen ? "grid animate-fade-in gap-1" : "hidden"}`}
        aria-label="移动导航"
      >
        {siteData.navigation.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <SiteLink
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`mobile-nav-link ${isActive ? "text-text font-bold bg-zinc-100" : ""}`}
            >
              {item.label}
            </SiteLink>
          );
        })}
      </nav>
    </header>
  );
}
