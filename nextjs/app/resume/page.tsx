import { siteData } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function ResumePage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-10">
      <section className="mb-6 flex flex-col gap-5 rounded-card border border-line bg-panel p-6 shadow-card md:flex-row md:items-center md:justify-between">
        <div>
          <Badge>PDF 简历</Badge>
          <h1 className="mt-3 text-3xl font-bold">张子阳 · AI 应用开发实习生</h1>
        </div>
        <Button href={siteData.site.resume} download>
          下载 PDF 简历
        </Button>
      </section>

      <section className="overflow-hidden rounded-card border border-line bg-panel p-3 shadow-card md:p-6">
        <figure>
          <div className="overflow-hidden rounded-lg border border-line bg-white">
            {/* The generated preview avoids browser-specific PDF plugin failures. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="张子阳 AI 应用开发实习生简历预览"
              className="h-auto w-full"
              src="/张子阳-AI-Agent实习生-20260725-v3-preview.png"
            />
          </div>
          <figcaption className="flex flex-col gap-3 px-1 pb-1 pt-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <span>以上为 PDF 第一页的高清预览。</span>
            <Button href={siteData.site.resume} external variant="secondary">
              打开 PDF 原文件
            </Button>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
