import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';

const outDir = resolve('out');
if (!existsSync(outDir)) throw new Error('out/ 不存在，请先运行 npm run build');

const files = [];
const walk = (dir) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else files.push(full);
  }
};
walk(outDir);

const forbidden = ['MagicCV', '20260725-v2.pdf', '20260725.pdf', 'Agent实习生.pdf', 'personal-website-beige-omega.vercel.app'];
const names = files.map((file) => relative(outDir, file).replaceAll('\\', '/'));
for (const token of forbidden) {
  if (names.some((name) => name.includes(token))) throw new Error(`发现禁止发布资产: ${token}`);
}

for (const file of files.filter((item) => extname(item) === '.html')) {
  const html = readFileSync(file, 'utf8');
  for (const token of forbidden) {
    if (html.includes(token)) throw new Error(`${relative(outDir, file)} 包含禁止内容: ${token}`);
  }
  const refs = [...html.matchAll(/(?:href|src)="(\/[^"#?]+)"/g)].map((match) => decodeURI(match[1]));
  for (const ref of refs) {
    if (ref.startsWith('/_next/') || ref.endsWith('.pdf') || ref.includes('.')) {
      const target = join(outDir, ref.replace(/^\//, ''));
      if (!existsSync(target)) throw new Error(`${relative(outDir, file)} 引用缺失资源: ${ref}`);
    }
  }
}

console.log(`静态产物检查通过：${files.length} 个文件，未发现隐私资产或缺失资源。`);
