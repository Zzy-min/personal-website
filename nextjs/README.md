# 个人网站 - Next.js 版本

这是基于 Next.js 15 + TypeScript + Tailwind CSS 构建的个人网站。

## 技术栈

- **Next.js 15** - React 框架，支持静态导出
- **TypeScript** - 类型安全
- **Tailwind CSS** - 原子化 CSS 框架
- **Lucide React** - 图标库
- **Framer Motion** - 动画库（待集成）

## 功能特性

### 已实现
- ✅ 响应式设计
- ✅ 移动端导航菜单
- ✅ 项目/博客展示
- ✅ 搜索功能
- ✅ 标签筛选
- ✅ 悬停动效
- ✅ SEO 优化

### 计划中
- 🔄 页面过渡动画
- 🔄 主题切换
- 🔄 无限滚动
- 🔄 博客/项目详情页

## 开始使用

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 本地预览构建结果
```bash
npm run start
```

## 项目结构

```
nextjs/
├── app/              # Next.js App Router
│   ├── layout.tsx    # 根布局
│   ├── page.tsx      # 首页
│   ├── about/        # 关于页面
│   ├── blog/         # 博客页面
│   ├── projects/     # 项目页面
│   └── timeline/     # 时间线页面
├── components/       # React 组件
│   ├── layout/       # 布局组件
│   ├── features/     # 功能组件
│   └── ui/          # UI 组件
├── lib/            # 工具函数和数据
│   ├── data.ts       # 站点数据
│   └── utils.ts      # 工具函数
├── public/          # 静态资源
├── tailwind.config.ts # Tailwind 配置
└── tsconfig.json    # TypeScript 配置
```

## 部署

项目配置为静态导出，可以部署到：
- Vercel（推荐）
- Netlify
- GitHub Pages
- 任何静态网站托管服务

## 从原项目迁移

原静态 HTML 项目位于根目录，Next.js 版本在 `nextjs/` 目录中。

迁移内容：
- 所有数据保持一致
- 视觉风格保持一致
- SEO 信息完整迁移
- 响应式设计优化
