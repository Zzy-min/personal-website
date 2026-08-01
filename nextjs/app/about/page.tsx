import { MapPin, Mail } from 'lucide-react';
import { siteData } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <article className="content-card p-6 md:p-8">
            <Badge>关于我</Badge>
            <h1 className="mt-4 text-4xl font-bold">我正在成为什么样的开发者</h1>
            <p className="mt-4 text-lg">{siteData.profile.positioning}</p>
            <p className="mt-4 leading-8 text-muted">{siteData.profile.intro}</p>
          </article>

          <article className="content-card p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.16em] text-muted">基础信息</div>
            <div className="mt-4 space-y-4">
              <div>
                <div className="text-xs uppercase tracking-[0.14em] text-muted">角色</div>
                <div className="mt-1 text-lg">{siteData.profile.role}</div>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <MapPin aria-hidden="true" size={17} strokeWidth={1.75} />
                <span>{siteData.profile.location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <Mail aria-hidden="true" size={17} strokeWidth={1.75} />
                <div className="flex flex-col gap-1">
                  <a className="hover:text-foreground" href={`mailto:${siteData.profile.email.user}@${siteData.profile.email.domain}`}>
                    {siteData.profile.email.user}@{siteData.profile.email.domain}
                  </a>
                  {siteData.profile.additionalEmails?.map((email) => (
                    <a className="hover:text-foreground" href={`mailto:${email}`} key={email}>
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl md:mt-20">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="content-card p-6 md:p-7">
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

          <article className="content-card p-6 md:p-7">
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

          <article className="content-card p-6 md:p-7">
            <Badge variant="outline">为什么做这个站</Badge>
            <h2 className="mt-4 text-3xl font-bold">为什么做这个站</h2>
            <p className="mt-4">我在这里集中介绍自己的项目、文章和学习经历。</p>
            <p className="mt-4 leading-8 text-muted">
              我把分散在 GitHub、CSDN 和不同阶段项目里的内容整理到一起，方便你了解我正在做什么、做过什么，以及我接下来想继续深入的方向。
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
