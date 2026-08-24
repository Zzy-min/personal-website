import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { siteData } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return siteData.posts.filter((post) => post.slug).map((post) => ({ slug: post.slug! }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = siteData.posts.find((item) => item.slug === slug);
  return post ? createPageMetadata(post.title, post.summary, `/blog/${slug}`) : {};
}

export default async function SummaryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = siteData.posts.find((item) => item.slug === slug);
  if (!post) notFound();
  const projects = siteData.projects.filter((project) => post.relatedProjectSlugs?.includes(project.slug ?? ""));

  return (
    <article className="mx-auto max-w-4xl px-4 py-14">
      <header className="border-b border-line pb-10">
        <div className="flex flex-wrap gap-2">{post.tags.map((tag) => <Badge key={tag} variant="outline">{tag}</Badge>)}</div>
        <h1 className="mt-6 text-[clamp(2.5rem,7vw,4.8rem)] font-bold leading-[1.08] tracking-tight">{post.title}</h1>
        <p className="mt-5 max-w-3xl text-xl leading-9 text-muted">{post.summary}</p>
        <time className="mt-5 block font-mono text-sm text-muted" dateTime={post.publishedAt}>发布于 {formatDate(post.publishedAt)}</time>
      </header>
      <div className="py-10">
        {post.sections?.map((section) => (
          <section className="mb-12" key={section.heading}>
            <h2 className="text-3xl font-bold tracking-tight">{section.heading}</h2>
            <p className="mt-4 text-lg leading-9 text-muted">{section.body}</p>
          </section>
        ))}
        <section className="border-y border-line py-8">
          <h2 className="text-3xl font-bold tracking-tight">关键收获</h2>
          <ul className="mt-5 space-y-4">
            {post.takeaways?.map((takeaway) => (
              <li className="flex gap-4 text-lg text-text" key={takeaway}>
                <span className="text-primary font-bold">—</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </section>
        {projects.length > 0 && (
          <section className="mt-10">
            <h2 className="text-3xl font-bold tracking-tight">关联项目</h2>
            <div className="mt-5 flex flex-wrap gap-4">
              {projects.map((project) => (
                <Link className="border-b border-primary pb-1 font-semibold text-primary hover:text-primary-strong transition-colors" href={`/projects/${project.slug}`} key={project.slug}>
                  {project.title} ↗
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
      <footer className="flex flex-wrap gap-3 border-t border-line pt-8">
        <Button href={post.sourceUrl} external>查看原始来源</Button>
        <Button href="/blog" variant="secondary">返回文章列表</Button>
      </footer>
    </article>
  );
}
