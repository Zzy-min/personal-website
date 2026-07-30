# 张子阳个人网站

当前生产站点是 `nextjs/` 中的 Next.js 静态导出版本，发布到 VPS 的 Caddy release 目录。

## 当前工程真相

- 应用入口：`nextjs/`
- 生产域名：`https://qling.it.com`
- 技术栈：Next.js 15、React 19、TypeScript、Tailwind CSS
- 输出方式：静态导出到 `nextjs/out/`
- 生产结构：`/opt/sites/personal-website/releases/<release-id>`，由 `current` 软链接切换版本
- 旧静态站：`legacy-static/`，仅作只读历史归档，不参与构建和发布

## 本地验证

```bash
npm ci
npm run lint
npm test
npm run build
```

构建产物位于 `nextjs/out/`。详细发布与回滚步骤见 [deploy/README.md](deploy/README.md)。
