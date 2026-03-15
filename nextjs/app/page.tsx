import { Hero } from '@/components/features/Hero';
import { siteData } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SiteLink } from '@/components/ui/SiteLink';
import { formatDate, sortByDateDesc } from '@/lib/utils';

export default function HomePage() {
  const featuredProjects = siteData.projects
    .filter((project) => project.featured)
    .sort((left, right) => (left.featuredOrder ?? 99) - (right.featuredOrder ?? 99));
  const flagshipProject = featuredProjects[0];
  const supportingProjects = featuredProjects.slice(1);
  const featuredPosts = sortByDateDesc(
    siteData.posts.filter((post) => post.featured),
    'publishedAt'
  ).slice(0, 3);
  const timelinePreview = sortByDateDesc(siteData.timeline, 'date').slice(0, 4);

  return (
    <div className="min-h-screen">
      <Hero />

      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-6 flex-wrap">
          <div className="max-w-2xl">
            <Badge>代表项目</Badge>
            <h2 className="text-3xl font-bold mt-3">先看已经做出来的东西</h2>
            <p className="text-muted mt-3">
              我把最能说明问题理解、实现深度和表达能力的项目放在最前面，而不是先讲泛化的自我介绍。
            </p>
          </div>
          <SiteLink href="/projects" className="text-muted hover:text-text transition-colors">
            查看全部项目 →
          </SiteLink>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.9fr] gap-6">
          <article className="bg-panel border border-line rounded-card p-6 shadow-card">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <Badge>{flagshipProject.status}</Badge>
              <span className="text-xs uppercase tracking-[0.2em] text-muted">
                Updated {flagshipProject.updatedAt}
              </span>
            </div>
            <h3 className="text-3xl font-bold mt-4">{flagshipProject.title}</h3>
            <p className="text-lg mt-4">{flagshipProject.summary}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="rounded-card border border-line bg-paper p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-muted">问题定义</div>
                <p className="mt-3 leading-7">{flagshipProject.problem}</p>
              </div>
              <div className="rounded-card border border-line bg-paper p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-muted">结果与价值</div>
                <p className="mt-3 leading-7">{flagshipProject.outcome}</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-xs uppercase tracking-[0.18em] text-muted">关键亮点</div>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                {flagshipProject.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-card border border-line bg-paper-soft px-4 py-4"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {flagshipProject.stack.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <Button href={flagshipProject.githubUrl} external>
                查看源码
              </Button>
              <Button href={flagshipProject.demoUrl} variant="secondary" external>
                打开演示
              </Button>
            </div>
          </article>

          <div className="space-y-4">
            {supportingProjects.map((project) => (
              <article
                key={project.title}
                className="bg-panel border border-line rounded-card p-5 shadow-card"
              >
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <Badge variant="outline">{project.status}</Badge>
                  <span className="text-xs uppercase tracking-[0.18em] text-muted">
                    {project.updatedAt}
                  </span>
                </div>
                <h3 className="text-xl font-bold mt-3">{project.title}</h3>
                <p className="text-muted mt-3">{project.problem}</p>
                <p className="mt-3">{project.outcome}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button href={project.githubUrl} external>
                    查看源码
                  </Button>
                  <Button href={project.demoUrl} variant="secondary" external>
                    打开链接
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="max-w-2xl mb-6">
          <Badge>能力证据</Badge>
          <h2 className="text-3xl font-bold mt-3">我希望被看到的不只是会什么，而是怎么持续变强</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <article className="bg-panel border border-line rounded-card p-6 shadow-card">
            <div className="text-xs uppercase tracking-[0.18em] text-muted">项目实践</div>
            <strong className="block text-4xl mt-4">{siteData.metrics[1].value}</strong>
            <p className="text-muted mt-3">
              代表项目覆盖规则实现、界面交互、研究实验和个人站搭建，不停留在单一练习题层面。
            </p>
          </article>
          <article className="bg-panel border border-line rounded-card p-6 shadow-card">
            <div className="text-xs uppercase tracking-[0.18em] text-muted">持续输出</div>
            <strong className="block text-4xl mt-4">{siteData.metrics[0].value}</strong>
            <p className="text-muted mt-3">
              我把做过的内容重新写成文章，让学习过程可以被复查、被理解，也能反过来强化自己。
            </p>
          </article>
          <article className="bg-panel border border-line rounded-card p-6 shadow-card">
            <div className="text-xs uppercase tracking-[0.18em] text-muted">当前重点</div>
            <ul className="space-y-3 mt-4">
              {siteData.profile.currentFocus.map((focus) => (
                <li key={focus} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{focus}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-6 flex-wrap">
          <div className="max-w-2xl">
            <Badge>精选文章</Badge>
            <h2 className="text-3xl font-bold mt-3">文章不是附属品，而是第二层能力证据</h2>
          </div>
          <SiteLink href="/blog" className="text-muted hover:text-text transition-colors">
            查看全部文章 →
          </SiteLink>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {featuredPosts.map((post) => (
            <article
              key={post.title}
              className="bg-panel border border-line rounded-card p-6 shadow-card"
            >
              <div className="flex items-center justify-between gap-4">
                <Badge variant="outline">{post.tags.join(' · ')}</Badge>
                <span className="text-sm text-muted">{formatDate(post.publishedAt)}</span>
              </div>
              <h3 className="text-xl font-bold mt-4">{post.title}</h3>
              <p className="text-muted mt-3">{post.summary}</p>
              <p className="mt-4 leading-7">{post.featuredReason ?? '这篇文章对应我当前阶段的重要学习节点。'}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="mt-6">
                <Button href={post.sourceUrl} external>
                  阅读原文
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-6 flex-wrap">
          <div className="max-w-2xl">
            <Badge>成长轨迹</Badge>
            <h2 className="text-3xl font-bold mt-3">我想让别人看见的是稳定上升，而不是一次性展示</h2>
          </div>
          <SiteLink href="/timeline" className="text-muted hover:text-text transition-colors">
            查看完整时间线 →
          </SiteLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {timelinePreview.map((item) => (
            <article
              key={`${item.date}-${item.title}`}
              className="bg-panel border border-line rounded-card p-6 shadow-card"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-muted">
                {formatDate(item.date)} · {item.type}
              </div>
              <h3 className="text-xl font-bold mt-3">{item.title}</h3>
              <p className="text-muted mt-3">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="bg-panel border border-line rounded-card p-6 shadow-card">
            <Badge>联系我</Badge>
            <h2 className="text-3xl font-bold mt-3">欢迎直接看项目、看文章，再来找我交流</h2>
            <p className="text-muted mt-4 leading-7">
              如果你想讨论 Java 学习路径、项目实践、内容输出方法，或者希望进一步了解我的代表作品，可以通过下面的入口联系我。
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Button href={`mailto:${siteData.profile.email.user}@${siteData.profile.email.domain}`}>
                发送邮件
              </Button>
              <Button href={siteData.site.github} variant="secondary" external>
                GitHub
              </Button>
              <Button href={siteData.site.blog} variant="secondary" external>
                CSDN
              </Button>
            </div>
          </article>

          <article className="bg-panel border border-line rounded-card p-6 shadow-card">
            <Badge>下一步</Badge>
            <h2 className="text-3xl font-bold mt-3">接下来我会继续把证据链补完整</h2>
            <ul className="space-y-3 mt-4">
              <li>补充更多能体现实现细节的项目说明，而不只展示标题和链接。</li>
              <li>继续整理 Java 与基础编程文章，让内容输出和项目实践彼此支撑。</li>
              <li>持续迭代这个个人站，让它更像一个可信的长期成长记录，而不是一次性的包装页。</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
