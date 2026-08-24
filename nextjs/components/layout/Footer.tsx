import { siteData } from "@/lib/data";
import { SiteLink } from "@/components/ui/SiteLink";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-line/80 bg-paper-soft/40">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-muted">
        <p>© {currentYear} {siteData.profile.name} · 以实战工程和代码证据驱动</p>
        <div className="flex flex-wrap gap-5 font-medium">
          {siteData.socials.map((item) => (
            <SiteLink
              key={item.href}
              href={item.href}
              external={item.href.startsWith("http")}
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </SiteLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
