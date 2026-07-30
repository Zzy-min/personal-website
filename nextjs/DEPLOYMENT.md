# VPS / Caddy 发布说明

生产环境不使用 Vercel。`nextjs/` 通过 `npm run build` 静态导出，再按 release 目录发布。

1. 完成 Lint、测试、构建和浏览器验收。
2. 将 `out/` 上传到 `/opt/sites/personal-website/releases/<release-id>`。
3. 校验关键文件、页面内容和隐私资产。
4. 把 `/opt/sites/personal-website/current` 切换到新 release。
5. 重建 Caddy 并检查主域名、www 跳转、项目页和简历下载。

失败时立即把 `current` 指回上一已验证 release 并重建 Caddy。至少保留一个可回滚版本。完整命令与 Caddy 配置见仓库根目录 `deploy/README.md`。
