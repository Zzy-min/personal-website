import { siteData } from '@/lib/data';
import { Hero } from '@/components/features/Hero';
import { ProjectCard } from '@/components/features/ProjectCard';
import { PostCard } from '@/components/features/PostCard';
import { MetricCard } from '@/components/features/MetricCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function HomePage() {
  const featuredProjects = siteData.projects.filter((p) => p.featured);
  const latestPosts = siteData.posts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Featured Projects Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <Badge>精选项目</Badge>
            <h2 className="text-3xl font-bold mt-2">用项目展示成长速度</h2>
          </div>
          <Link href="/projects" className="text-muted hover:text-text transition-colors">
            查看全部项目 →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Skills & Strengths Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-panel border border-line rounded-card p-6 shadow-card">
            <Badge>技术关键词</Badge>
            <h2 className="text-2xl font-bold mt-2 mb-4">当前技能栈</h2>
            <p className="text-muted mb-4">
              我更关注"边学边做"的节奏：先理解核心概念，再通过项目把知识落地为成果。
            </p>
            <div className="flex flex-wrap gap-2">
              {siteData.profile.skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-panel border border-line rounded-card p-6 shadow-card">
            <Badge>能力特点</Badge>
            <h2 className="text-2xl font-bold mt-2 mb-4">我的工作方式</h2>
            <ul className="space-y-2">
              {siteData.profile.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <Badge>最新文章</Badge>
            <h2 className="text-3xl font-bold mt-2">博客是我的第二作品集</h2>
          </div>
          <Link href="/blog" className="text-muted hover:text-text transition-colors">
            查看全部文章 →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {latestPosts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
      </section>

      {/* Contact & Next Steps Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-panel border border-line rounded-card p-6 shadow-card">
            <Badge>联系我</Badge>
            <h2 className="text-2xl font-bold mt-2 mb-4">欢迎交流项目、学习方法与技术成长</h2>
            <p className="text-muted mb-6">
              如果你想讨论 Java 学习路径、项目实践，或者想进一步了解我的内容输出，可以通过下面的方式联系我。
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href={`mailto:${siteData.profile.email.user}@${siteData.profile.email.domain}`}>
                发送邮件
              </Button>
              <Button href={siteData.site.github} variant="secondary" external>
                GitHub 主页
              </Button>
              <Button href={siteData.site.blog} variant="secondary" external>
                CSDN 博客
              </Button>
            </div>
          </div>

          <div className="bg-panel border border-line rounded-card p-6 shadow-card">
            <Badge>成长记录</Badge>
            <h2 className="text-2xl font-bold mt-2 mb-4">接下来会继续完善什么</h2>
            <ul className="space-y-2">
              <li>持续补充代表性项目，逐步扩充到更完整的作品集。</li>
              <li>继续同步博客元信息，让个人站成为统一入口。</li>
              <li>添加更多交互功能，如搜索、筛选、动画等。</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
