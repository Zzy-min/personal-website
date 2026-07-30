# Next.js 个人网站

这是当前唯一维护和部署的网站应用。它使用 App Router，并通过 `output: 'export'` 生成纯静态文件。

## 命令

```bash
npm run dev
npm run lint
npm test
npm run build
```

生产构建输出到 `out/`。生产域名为 `https://qling.it.com`，通过 VPS/Caddy 的 release 目录发布；部署与回滚规则见 `DEPLOYMENT.md`。
