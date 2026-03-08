# Zzy Personal Website

当前仓库默认以 `nextjs/` 中的 Next.js 版本作为部署入口；根目录保留了早期静态 HTML 版本，便于对照和回滚。

## 当前默认版本

- 部署入口：`nextjs/`
- 技术栈：`Next.js 15`、`TypeScript`、`Tailwind CSS`
- 构建方式：静态导出（`output: 'export'`）
- Vercel 输出目录：`nextjs/out`

## 仓库结构

- `nextjs/`：当前默认部署的 Next.js 版本
- `nextjs/app/`：App Router 页面
- `nextjs/components/`：页面与通用组件
- `nextjs/lib/`：站点数据和工具函数
- `index.html`、`about/`、`blog/`、`projects/`、`timeline/`：旧静态版本

## 本地开发

在仓库根目录运行：

```bash
npm install
npm run dev
```

如果只想进入 Next.js 子项目，也可以运行：

```bash
cd nextjs
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建产物会输出到 `nextjs/out/`。

## 部署到 Vercel

当前仓库根目录已经配置好默认构建 `nextjs/`，直接导入仓库即可。

1. 在 Vercel 中导入 `Zzy-min/personal-website`
2. 保持默认 Root Directory 为仓库根目录
3. Vercel 会按根目录 `vercel.json` 执行：
   - `npm install`
   - `npm run build`
   - 发布 `nextjs/out`

如果你手动修改过旧项目设置，也可以删除旧配置后重新部署一次。

## 补充说明

- `nextjs/README.md`：Next.js 版本详细说明
- `nextjs/DEPLOYMENT.md`：单独部署 `nextjs/` 的说明
- 根目录旧静态站仍保留，但不再作为默认部署入口
