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
          <p className="mt-2 text-muted">可直接在线浏览，也可以下载 PDF 后离线查看。</p>
        </div>
        <Button href={siteData.site.resume} download>
          下载 PDF 简历
        </Button>
      </section>

      <section className="overflow-hidden rounded-card border border-line bg-panel shadow-card">
        <object
          aria-label="张子阳 AI 应用开发实习生 PDF 简历"
          className="h-[78vh] min-h-[640px] w-full"
          data={siteData.site.resume}
          type="application/pdf"
        >
          <div className="p-8 text-center">
            <p>当前浏览器无法直接显示 PDF。</p>
            <div className="mt-4">
              <Button href={siteData.site.resume} download>
                下载后查看
              </Button>
            </div>
          </div>
        </object>
      </section>
    </main>
  );
}
