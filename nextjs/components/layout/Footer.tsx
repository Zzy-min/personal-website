import { siteData } from '@/lib/data';
import { SiteLink } from '@/components/ui/SiteLink';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-7xl border-t border-line px-4 py-8">
      <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
        <p>© {currentYear} {siteData.profile.name}</p>
        <div className="flex flex-wrap gap-5">
          {siteData.socials.map((item) => <SiteLink key={item.href} href={item.href} external={item.href.startsWith('http')} className="transition-colors hover:text-text">{item.label}</SiteLink>)}
        </div>
      </div>
    </footer>
  );
}
