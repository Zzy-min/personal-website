import { MapPin, Mail } from 'lucide-react';
import { siteData } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <div className="min-h-screen px-4 py-12">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-card border border-line bg-panel p-6 shadow-card">
            <Badge>关于我</Badge>
            <h1 className="mt-4 text-4xl font-bold">我正在成为什么样的开发者</h1>
            <p className="mt-4 text-lg">{siteData.profile.positioning}</p>
            <p className="mt-4 leading-8 text-muted">{siteData.profile.intro}</p>
          </article>

          <article className="rounded-card border border-line bg-panel p-6 shadow-card">
            <div className="text-xs uppercase tracking-[0.16em] text-muted">基础信息</div>
            <div className="mt-4 space-y-4">
              <div>
                <div className="text-xs uppercase tracking-[0.14em] text-muted">角色</div>
                <div className="mt-1 text-lg">{siteData.profile.role}</div>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <MapPin size={16} />
                <span>{siteData.profile.location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <Mail size={16} />
                <span>
                  {siteData.profile.email.user}@{siteData.profile.email.domain}
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-7xl">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-card border border-line bg-panel p-6 shadow-card">
            <Badge variant="outline">当前方向</Badge>
            <h2 className="mt-4 text-3xl font-bold">当前方向</h2>
            <p className="mt-4 text-muted">我正在把学习重心收束成几个清晰方向。</p>
            <ul className="mt-5 space-y-3">
              {siteData.profile.currentFocus.map((focus) => (
                <li key={focus} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span>{focus}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-card border border-line bg-panel p-6 shadow-card">
            <Badge variant="outline">我的方法</Badge>
            <h2 className="mt-4 text-3xl font-bold">我更相信边做边理解，而不是只堆概念</h2>
            <ul className="mt-5 space-y-3">
              {siteData.profile.strengths.map((strength) => (
                <li key={strength} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent-gold" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-card border border-line bg-panel p-6 shadow-card">
            <Badge variant="outline">为什么做这个站</Badge>
            <h2 className="mt-4 text-3xl font-bold">为什么做这个站</h2>
            <p className="mt-4">我希望别人先看到证据，再决定要不要继续了解我。</p>
            <p className="mt-4 leading-8 text-muted">
              这个站的意义不是包装，而是把分散在 GitHub、CSDN 和不同阶段项目里的内容重新组织，让招聘方和合作方可以更快判断我的潜力、方法和长期性。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={siteData.site.github} external>
                GitHub
              </Button>
              <Button href={siteData.site.blog} external variant="secondary">
                CSDN
              </Button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
