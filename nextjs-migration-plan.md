# Next.js 升级计划

## 当前项目分析

### 项目结构
```
personal-website/
├── index.html           # 首页
├── about/index.html     # 关于页面
├── blog/index.html      # 博客页面
├── projects/index.html  # 项目页面
├── timeline/index.html  # 时间线页面
├── assets/
│   ├── app.js         # JavaScript 交互逻辑（180 行）
│   ├── data.js        # 数据文件（431 行）
│   └── styles.css    # CSS 样式（94 行）
├── 404.html
├── vercel.json
├── robots.txt
└── sitemap.xml
```

### 当前功能
1. **页面路由**: 静态 HTML 页面
2. **数据驱动**: 通过 data.js 集中管理数据
3. **动态渲染**: JavaScript 客户端渲染
4. **响应式设计**: 移动端适配
5. **交互功能**: 移动端菜单切换

---

## Next.js 升级方案

### 1. 项目结构重组

```
personal-website-nextjs/
├── app/
│   ├── layout.tsx           # 根布局
│   ├── page.tsx             # 首页
│   ├── about/
│   │   └── page.tsx         # 关于页面
│   ├── blog/
│   │   ├── page.tsx         # 博客列表
│   │   ├── [slug]/
│   │   │   └── page.tsx     # 博客详情
│   │   └── layout.tsx       # 博客布局
│   ├── projects/
│   │   ├── page.tsx         # 项目列表
│   │   └── [slug]/
│   │   │   └── page.tsx     # 项目详情
│   ├── timeline/
│   │   └── page.tsx         # 时间线页面
│   └── globals.css          # 全局样式
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # 头部组件
│   │   ├── Footer.tsx      # 底部组件
│   │   └── Navigation.tsx # 导航组件
│   ├── features/
│   │   ├── Hero.tsx       # 首页 Hero
│   │   ├── ProjectCard.tsx # 项目卡片
│   │   ├── PostCard.tsx   # 博客卡片
│   │   ├── MetricCard.tsx  # 指标卡片
│   │   ├── TimelineItem.tsx # 时间线项目
│   │   └── TagList.tsx    # 标签列表
│   └── ui/
│       ├── Button.tsx       # 按钮组件
│       ├── Card.tsx        # 卡片组件
│       └── Badge.tsx       # 徽章组件
├── lib/
│   ├── data.ts            # 数据文件（从 data.js 迁移）
│   ├── utils.ts           # 工具函数
│   └── constants.ts       # 常量定义
├── public/
│   ├── favicon.svg
│   └── og-card.svg
├── next.config.js
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

### 2. 技术栈

| 技术 | 用途 |
|------|------|
| Next.js 15 | React 框架 + 服务端渲染 |
| TypeScript | 类型安全 |
| Tailwind CSS | 样式系统 |
| Framer Motion | 动画效果 |
| React Query | 数据获取与缓存 |

### 3. 核心功能实现

#### 3.1 页面路由
- `/` - 首页
- `/about` - 关于页面
- `/blog` - 博客列表
- `/blog/[slug]` - 博客详情
- `/projects` - 项目列表
- `/projects/[slug]` - 项目详情
- `/timeline` - 时间线

#### 3.2 数据迁移
```typescript
// lib/data.ts
export const siteData = {
  site: { ... },
  profile: { ... },
  metrics: [ ... ],
  projects: [ ... ],
  posts: [ ... ],
  timeline: [ ... ],
  navigation: [ ... ],
  socials: [ ... ]
} as const;
```

#### 3.3 组件拆分
- **Layout 组件**: Header, Footer, Navigation
- **Feature 组件**: Hero, ProjectCard, PostCard, MetricCard, TimelineItem
- **UI 组件**: Button, Card, Badge

### 4. 扩展交互功能

#### 4.1 现有交互增强
- ✨ 页面过渡动画（Framer Motion）
- ✨ 卡片悬停效果增强
- ✨ 导航激活状态动画
- ✨ 移动端菜单平滑动画

#### 4.2 新增交互功能

##### 搜索与筛选
```typescript
// 博客/项目搜索
- 实时搜索
- 标签筛选
- 搜索历史保存
```

##### 深色/浅色主题切换
```typescript
// 主题系统
- 系统主题检测
- 手动主题切换
- 主题持久化
```

##### 无限滚动/分页
```typescript
// 博客/项目分页
- 加载更多按钮
- 无限滚动
- 骨架屏加载状态
```

##### 图片优化
```typescript
// 图片处理
- Next.js Image 组件
- 懒加载
- 响应式图片
- 图片占位符
```

##### 动画效果
```typescript
// 页面动画
- 页面切换过渡
- 元素进入/离开动画
- 滚动动画
- 悬停微交互
```

##### 用户偏好
```typescript
// 本地存储
- 主题偏好
- 视图模式（卡片/列表）
- 语言偏好
```

### 5. 性能优化

#### 5.1 优化策略
- 服务端渲染 (SSR)
- 静态生成 (SSG)
- 图片优化
- 代码分割
- 字体优化

#### 5.2 SEO 优化
- 元标签动态生成
- 结构化数据
- sitemap 自动生成
- robots.txt 配置

### 6. 部署配置

```javascript
// next.config.js
module.exports = {
  output: 'export',
  images: {
    domains: ['avatars.githubusercontent.com', 'blog.csdn.net'],
  },
  trailingSlash: true,
}
```

---

## 迁移步骤

### 阶段 1: 项目初始化
- [ ] 创建 Next.js 项目
- [ ] 配置 TypeScript
- [ ] 配置 Tailwind CSS
- [ ] 设置项目结构

### 阶段 2: 核心组件
- [ ] 创建布局组件（Header, Footer）
- [ ] 创建 UI 组件（Button, Card, Badge）
- [ ] 迁移全局样式

### 阶段 3: 页面迁移
- [ ] 首页迁移
- [ ] 关于页面迁移
- [ ] 项目页面迁移
- [ ] 博客页面迁移
- [ ] 时间线页面迁移

### 阶段 4: 交互扩展
- [ ] 添加页面过渡动画
- [ ] 实现搜索功能
- [ ] 实现主题切换
- [ ] 添加分页功能

### 阶段 5: 优化与部署
- [ ] 性能优化
- [ ] SEO 优化
- [ ] 配置 Vercel 部署
- [ ] 测试与上线

---

## 预期收益

### 开发体验
- ✅ 组件化开发
- ✅ 类型安全
- ✅ 热重载
- ✅ 更好的调试工具

### 性能提升
- ✅ 服务端渲染
- ✅ 更快的首屏加载
- ✅ 更好的 SEO

### 用户体验
- ✅ 更流畅的动画
- ✅ 更多的交互功能
- ✅ 更好的响应式体验
