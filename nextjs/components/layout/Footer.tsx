import { siteData } from '@/lib/data';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 max-w-7xl mx-auto border-t border-line">
      <div className="flex justify-between gap-4 flex-wrap">
        <span className="text-muted">
          © {currentYear} {siteData.profile.name}. Built for portfolio and learning.
        </span>
        <div className="flex gap-4 flex-wrap">
          {siteData.socials.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-text transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
