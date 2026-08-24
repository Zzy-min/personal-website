/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { siteData } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return siteData.projects.filter((project) => project.slug).map((project) => ({ slug: project.slug! }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = siteData.projects.find((item) => item.slug === slug);
  if (!project) return {};
  return createPageMetadata(project.title, project.summary, `/projects/${slug}`);
}

export default async function ProjectCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = siteData.projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${siteData.site.domain}/projects/${slug}/`,
    creator: { "@type": "Person", name: siteData.profile.name },
    dateModified: project.updatedAt,
    codeRepository: project.githubUrl,
  };

  return (
    <article className="mx-auto min-h-screen max-w-6xl px-4 py-14">
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} type="application/ld+json" />
      <header className="case-masthead">
        <div className="flex flex-wrap items-center gap-3">
          <Badge>{project.status}</Badge>
          <span className="font-mono text-sm font-semibold text-zinc-600">最近更新 {project.updatedAt}</span>
        </div>
        <h1 className="mt-5 max-w-5xl text-[clamp(2.7rem,7vw,5.7rem)] font-bold leading-[1.02] tracking-tight text-zinc-950">{project.title}</h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-zinc-700">{project.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3.5">
          <Button href={project.demoUrl} external>打开项目</Button>
          <Button href={project.githubUrl} external variant="secondary">查看源码</Button>
        </div>
      </header>

      <CaseSection index="01" label="项目概览与状态">
        <p className="text-lg leading-8 text-zinc-900 font-medium">{project.outcome}</p>
      </CaseSection>
      <CaseSection index="02" label="要解决的问题">
        <p className="text-lg leading-8 text-zinc-700">{project.problem}</p>
      </CaseSection>
      <CaseSection index="03" label="我的职责">
        <p className="text-lg leading-8 font-semibold text-zinc-950">{project.role}</p>
        <ul className="case-list mt-6">{project.contributions?.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></li>)}</ul>
      </CaseSection>
      <CaseSection index="04" label="AI 参与边界">
        <div className="grid gap-8 md:grid-cols-2">
          <Boundary title="AI 辅助" items={project.aiContribution?.assisted ?? []}/>
          <Boundary title="由我负责" items={project.aiContribution?.owned ?? []}/>
        </div>
      </CaseSection>
      <CaseSection index="05" label="系统架构">
        {project.architecture && (
          <figure className="overflow-hidden rounded-xl border border-zinc-200 bg-white p-2 shadow-subtle">
            <img alt={project.architecture.alt} className="w-full rounded-lg" src={project.architecture.image}/>
            <figcaption className="p-3 text-sm leading-6 text-zinc-600">{project.architecture.description}</figcaption>
          </figure>
        )}
      </CaseSection>
      <CaseSection index="06" label="关键实现">
        <ul className="case-list">{project.highlights.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></li>)}</ul>
      </CaseSection>
      <CaseSection index="07" label="一次真实问题与修复">
        {project.challenges?.map((challenge) => (
          <div className="challenge-flow" key={challenge.problem}>
            {[["问题", challenge.problem], ["排查", challenge.investigation], ["修复", challenge.fix], ["结果", challenge.result]].map(([label, text]) => (
              <div key={label}>
                <span>{label}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        ))}
      </CaseSection>
      <CaseSection index="08" label="验证证据">
        <div className="divide-y divide-zinc-200 border-y border-zinc-200">
          {project.verification?.map((evidence) => (
            <a className="grid gap-2 py-5 transition-colors hover:text-blue-600 md:grid-cols-[11rem_1fr_auto]" href={evidence.url} key={evidence.url} rel="noreferrer" target="_blank">
              <strong className="font-semibold text-zinc-950">{evidence.label}</strong>
              <span className="text-zinc-600">{evidence.description}</span>
              <span aria-hidden className="text-zinc-900 font-bold">↗</span>
            </a>
          ))}
        </div>
      </CaseSection>
      <CaseSection index="09" label="截图与运行记录">
        <div className="grid gap-8 md:grid-cols-2">
          {project.screenshots?.map((shot) => (
            <figure className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-subtle" key={shot.src}>
              <img alt={shot.alt} className="h-auto w-full" src={shot.src}/>
              <figcaption className="border-t border-zinc-200 p-4 text-sm leading-6 text-zinc-600 flex items-center justify-between">
                <Badge variant="outline">{shot.type}</Badge>
                <span className="ml-3 text-right font-medium text-zinc-800">{shot.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </CaseSection>
      <CaseSection index="10" label="继续验证">
        <div className="flex flex-wrap gap-3.5">
          <Button href={project.githubUrl} external>查看源码</Button>
          <Button href={project.demoUrl} external variant="secondary">打开项目</Button>
          <Button href="/resume" variant="secondary">查看简历</Button>
        </div>
      </CaseSection>
    </article>
  );
}

function CaseSection({ children, index, label }: { children: React.ReactNode; index: string; label: string }) {
  return (
    <section className="case-section">
      <div className="case-label">{index} / {label}</div>
      <div>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-950">{label}</h2>
        {children}
      </div>
    </section>
  );
}

function Boundary({ items, title }: { items: string[]; title: string }) {
  return (
    <div className="rounded-card border border-zinc-200 bg-white p-6 shadow-subtle">
      <h3 className="font-serif text-2xl font-bold text-zinc-950">{title}</h3>
      <ul className="mt-4 space-y-3 text-zinc-700">
        {items.map((item) => (
          <li className="flex gap-3 text-sm leading-relaxed" key={item}>
            <span className="text-zinc-900 font-bold">—</span>
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
