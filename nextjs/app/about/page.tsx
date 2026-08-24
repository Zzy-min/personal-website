import { MapPin, Mail, Sparkles, BookOpen, Compass } from "lucide-react";
import { siteData } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <article className="content-card p-6 md:p-9">
            <Badge>关于我</Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 md:text-5xl">我正在成为什么样的开发者</h1>
            <p className="mt-4 text-lg font-semibold text-zinc-900 leading-relaxed">{siteData.profile.positioning}</p>
            <p className="mt-4 leading-8 text-zinc-700">{siteData.profile.intro}</p>
          </article>

          <article className="content-card p-6 md:p-9 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-zinc-600">基础信息</div>
              <div className="mt-5 space-y-4">
                <div className="rounded-button border border-zinc-200 bg-zinc-50 p-3.5">
                  <div className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.14em] text-zinc-500">角色</div>
                  <div className="mt-1 text-base font-bold text-zinc-950">{siteData.profile.role}</div>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-700 px-1">
                  <MapPin aria-hidden="true" size={17} strokeWidth={2} className="text-zinc-900 flex-shrink-0" />
                  <span className="font-semibold text-zinc-900">{siteData.profile.location}</span>
                </div>
                <div className="flex items-start gap-2.5 text-zinc-700 px-1">
                  <Mail aria-hidden="true" size={17} strokeWidth={2} className="text-zinc-900 mt-1 flex-shrink-0" />
                  <div className="flex flex-col gap-1 text-sm font-semibold">
                    <a className="hover:text-blue-600 transition-colors" href={`mailto:${siteData.profile.email.user}@${siteData.profile.email.domain}`}>
                      {siteData.profile.email.user}@{siteData.profile.email.domain}
                    </a>
                    {siteData.profile.additionalEmails?.map((email) => (
                      <a className="hover:text-blue-600 transition-colors" href={`mailto:${email}`} key={email}>
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl md:mt-24">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="content-card p-6 md:p-8">
            <div className="flex items-center gap-2">
              <Compass size={18} className="text-zinc-900" />
              <Badge variant="outline">当前方向</Badge>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-zinc-950">当前方向</h2>
            <p className="mt-3 text-sm text-zinc-600">我正在把学习重心收束成几个清晰方向。</p>
            <ul className="mt-5 space-y-3.5">
              {siteData.profile.currentFocus.map((focus) => (
                <li key={focus} className="flex items-start gap-3 text-sm">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-zinc-900" />
                  <span className="font-semibold text-zinc-900">{focus}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="content-card p-6 md:p-8">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-zinc-900" />
              <Badge variant="outline">我的方法</Badge>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-zinc-950">我更相信边做边理解，而不是只堆概念</h2>
            <ul className="mt-5 space-y-3.5">
              {siteData.profile.strengths.map((strength) => (
                <li key={strength} className="flex items-start gap-3 text-sm text-zinc-700">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-zinc-900" />
                  <span className="leading-relaxed font-medium">{strength}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="content-card p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-zinc-900" />
                <Badge variant="outline">为什么做这个站</Badge>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-zinc-950">为什么做这个站</h2>
              <p className="mt-3 text-sm font-semibold text-zinc-900">我在这里集中介绍自己的项目、文章和学习经历。</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                我把分散在 GitHub、CSDN 和不同阶段项目里的内容整理到一起，方便你了解我正在做什么、做过什么，以及我接下来想继续深入的方向。
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 border-t border-zinc-200 pt-5">
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
