import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-4 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">404 · 页面未找到</p>
      <h1 className="mt-4 font-serif text-5xl font-bold">这页内容可能已经移动。</h1>
      <p className="mt-5 max-w-xl leading-8 text-muted">返回首页查看代表项目、技术文章与最新简历。</p>
      <Link className="mt-8 w-fit border-b border-primary pb-1 font-semibold text-primary" href="/">返回首页</Link>
    </section>
  );
}
