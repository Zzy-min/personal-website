import { siteData } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { SiteLink } from "@/components/ui/SiteLink";

export function Hero() {
  return (
    <section data-home-section="hero" className="hero-field mx-auto max-w-7xl px-4 pb-16 pt-12 md:pb-24 md:pt-16">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.45fr)_minmax(19rem,0.55fr)] md:items-center md:gap-14">
        <div className="hero-copy">
          <div className="availability">
            <span aria-hidden="true" />
            正在寻找 AI Agent 开发实践机会
          </div>

          <h1 className="hero-title" aria-label={siteData.profile.headline}>
            <span className="hero-title-lead">把想法做成</span>
            <span className="hero-title-focus">能运行、能验证的项目</span>
          </h1>

          <p className="hero-positioning">{siteData.profile.positioning}</p>

          <div className="hero-actions">
            <Button href={siteData.site.resume} download>下载 PDF 简历</Button>
            <Button href="/resume" variant="secondary">在线预览</Button>
            <SiteLink href="/projects" className="text-link">查看项目 <span aria-hidden="true">↗</span></SiteLink>
          </div>
        </div>

        <aside className="hero-note" aria-label="个人简介">
          <div className="flex items-center justify-between border-b border-line/80 pb-3">
            <p className="section-kicker">ABOUT</p>
            <span className="font-mono text-xs text-zinc-500 font-semibold">2026</span>
          </div>
          <p>{siteData.profile.intro}</p>
          <dl>
            <div>
              <dt>位置</dt>
              <dd>{siteData.profile.location}</dd>
            </div>
            <div>
              <dt>方向</dt>
              <dd>AI Agent / 应用开发</dd>
            </div>
            <div>
              <dt>常用语言</dt>
              <dd>Java · Python · C</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
