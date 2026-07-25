import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { siteData } from '@/lib/data';

export function generateStaticParams() {
  return siteData.projects
    .filter((project) => project.slug)
    .map((project) => ({ slug: project.slug! }));
}

export default async function ProjectCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = siteData.projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <article className="mx-auto min-h-screen max-w-5xl px-4 py-14">
      <div className="case-masthead">
        <Badge>{project.status}</Badge>
        <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Project case / {project.updatedAt}
        </p>
        <h1 className="mt-4 text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.05]">
          {project.title}
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-9">{project.summary}</p>
      </div>

      <section className="case-section">
        <div className="case-label">01 / 为什么做</div>
        <div>
          <h2 className="text-3xl font-bold">从真实问题开始</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{project.problem}</p>
        </div>
      </section>

      <section className="case-section">
        <div className="case-label">02 / 我的角色</div>
        <div>
          <h2 className="text-3xl font-bold">明确个人贡献，也明确 AI 的参与</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            {project.role ?? '我负责需求梳理、功能实现、调试验证与持续迭代。'}
          </p>
        </div>
      </section>

      <section className="case-section">
        <div className="case-label">03 / 做了什么</div>
        <ul className="case-list">
          {project.highlights.map((highlight, index) => (
            <li key={highlight}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{highlight}</strong>
            </li>
          ))}
        </ul>
      </section>

      <section className="case-section">
          <div className="case-label">04 / 我如何验证</div>
        <div>
          <p className="max-w-3xl text-lg leading-8">{project.outcome}</p>
          <ul className="mt-7 space-y-3">
            {(project.verification ?? ['公开源码', '构建与运行检查']).map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={project.githubUrl} external>查看源码</Button>
            <Button href={project.demoUrl} variant="secondary" external>打开项目</Button>
          </div>
        </div>
      </section>
    </article>
  );
}
