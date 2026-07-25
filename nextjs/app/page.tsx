import { Hero } from '@/components/features/Hero';
import { siteData } from '@/lib/data';
import { SiteLink } from '@/components/ui/SiteLink';
import { formatDate, sortByDateDesc } from '@/lib/utils';

export default function HomePage() {
  const projects = siteData.projects
    .filter((project) => project.featured)
    .sort((left, right) => (left.featuredOrder ?? 99) - (right.featuredOrder ?? 99))
    .slice(0, 3);
  const posts = sortByDateDesc(siteData.posts, 'publishedAt').slice(0, 3);

  return (
    <div className="min-h-screen">
      <Hero />

      <section data-home-section="projects" className="home-section mx-auto max-w-7xl px-4">
        <div className="section-heading">
          <div>
            <p className="section-kicker">01 / PROJECTS</p>
            <h2>精选项目</h2>
          </div>
          <SiteLink href="/projects" className="text-link">全部项目 <span aria-hidden="true">↗</span></SiteLink>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <article key={project.title} className="project-row">
              <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
              <div className="project-body">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3>{project.title}</h3>
                  <span className="project-status">{project.status}</span>
                </div>
                <p>{project.outcome}</p>
                <ul className="tag-list" aria-label={`${project.title} 技术标签`}>
                  {project.stack.slice(0, 4).map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div className="project-actions">
                <SiteLink href={project.githubUrl} external>源码</SiteLink>
                <SiteLink href={project.demoUrl} external>项目链接</SiteLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section data-home-section="writing" className="home-section mx-auto max-w-7xl px-4">
        <div className="section-heading">
          <div>
            <p className="section-kicker">02 / WRITING</p>
            <h2>最近文章</h2>
          </div>
          <SiteLink href="/blog" className="text-link">全部文章 <span aria-hidden="true">↗</span></SiteLink>
        </div>

        <div className="article-list">
          {posts.map((post) => (
            <article key={post.title} className="article-row">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <div>
                <h3><SiteLink href={post.sourceUrl} external>{post.title}</SiteLink></h3>
                <p>{post.summary}</p>
              </div>
              <span className="article-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section data-home-section="contact" className="home-section mx-auto max-w-7xl px-4 pb-24 md:pb-32">
        <div className="contact-block">
          <p className="section-kicker">03 / CONTACT</p>
          <h2>如果我的项目与你正在做的事情有关，欢迎联系我。</h2>
          <p>我目前在寻找 AI Agent 开发相关的实习与项目实践机会。</p>
          <div className="contact-links">
            <SiteLink href={`mailto:${siteData.profile.email.user}@${siteData.profile.email.domain}`}>QQ 邮箱</SiteLink>
            {siteData.profile.additionalEmails?.map((email) => <SiteLink href={`mailto:${email}`} key={email}>Gmail</SiteLink>)}
            <SiteLink href={siteData.site.github} external>GitHub</SiteLink>
            <SiteLink href={siteData.site.blog} external>CSDN</SiteLink>
          </div>
        </div>
      </section>
    </div>
  );
}
