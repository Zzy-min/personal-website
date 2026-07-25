import { siteData } from '@/lib/data';
import { SiteLink } from '@/components/ui/SiteLink';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-7xl px-4 py-12">
      <div className="rounded-card border border-line bg-panel px-6 py-8 shadow-card">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.18em] text-muted">Personal projects and notes</div>
            <p className="mt-3 font-serif text-2xl text-text">
              我是{siteData.profile.name}，这里记录我的项目、文章和持续更新。
            </p>
            <p className="mt-3 text-muted">
              © {currentYear} {siteData.profile.name}. 持续学习，持续开发。
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            {siteData.socials.map((item) => (
              <SiteLink
                key={item.href}
                href={item.href}
                external={item.href.startsWith('http')}
                className="text-muted transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25"
              >
                {item.label}
              </SiteLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
