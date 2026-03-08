# Vercel 部署指南

## 方式一：通过 Vercel 网页部署（推荐）

### 1. 登录 Vercel

访问 [https://vercel.com](https://vercel.com) 并使用你的 GitHub 账号登录。

### 2. 创建新项目

1. 点击 **"Add New..."** → **"Project"**
2. 选择 **"Import an Existing Project"**
3. 找到并选择 `Zzy-min/personal-website` 仓库

### 3. 配置项目

在 **"Configure Project"** 页面设置：

| 配置项 | 值 |
|--------|-----|
| **Framework Preset** | Next.js |
| **Root Directory** | `nextjs` |
| **Build Command** | `npm run build` |
| **Output Directory** | `out` |
| **Install Command** | `npm install` |

**重要：** 确保将 **Root Directory** 设置为 `nextjs`，而不是根目录！

### 4. 部署

点击 **"Deploy"** 按钮开始部署。

### 5. 完成部署

部署完成后，你会获得一个类似 `*.vercel.app` 的域名。

---

## 方式二：通过 Vercel CLI 部署

### 1. 安装 Vercel CLI

```bash
npm install -g vercel
```

### 2. 登录

```bash
vercel login
```

### 3. 部署

在 `nextjs` 目录中运行：

```bash
cd nextjs
vercel --prod
```

---

## 环境变量（可选）

如果需要配置环境变量，在 Vercel 项目设置的 **"Environment Variables"** 中添加：

| 变量名 | 说明 |
|---------|------|
| `NEXT_PUBLIC_SITE_URL` | 站点域名（自动设置） |

---

## 自定义域名

### 1. 购买域名

如果你有自己的域名，可以从以下服务商购买：
- Namecheap
- GoDaddy
- 阿里云
- 腾讯云

### 2. 配置域名

1. 在 Vercel 项目设置中，选择 **"Domains"**
2. 点击 **"Add Domain"**，输入你的域名
3. 按照 Vercel 的指示配置 DNS

### 3. DNS 配置示例

| 记录类型 | 主机记录 | 记录值 |
|----------|---------|---------|
| CNAME | `www` | `cname.vercel-dns.com` |
| A | `@` | `76.76.21.21` |

---

## 部署检查清单

- [ ] Root Directory 设置为 `nextjs`
- [ ] Framework 选择 Next.js
- [ ] Build Command 为 `npm run build`
- [ ] Output Directory 为 `out`
- [ ] 构建成功无错误
- [ ] 部署成功可访问

---

## 常见问题

### Q: 部署后页面 404

**A:** 检查 Root Directory 是否正确设置为 `nextjs`。

### Q: 构建失败

**A:** 检查：
1. `package.json` 中的依赖版本是否正确
2. `next.config.js` 配置是否正确
3. 是否有语法错误（查看构建日志）

### Q: 样式丢失

**A:** 确认 `globals.css` 已正确导入到 `layout.tsx`。

---

## 更新现有 Vercel 项目

如果你之前已经部署过静态 HTML 版本：

1. 打开项目设置
2. 滚动到 **"Build & Development Settings"**
3. 将 **"Root Directory"** 更改为 `nextjs`
4. 将 **"Framework Preset"** 更改为 Next.js
5. 保存后点击 **"Redeploy"**

---

## 网站地址

- **开发环境预览:** `https://[preview-url].vercel.app`
- **生产环境:** `https://[your-project].vercel.app`
- **自定义域名:** 配置后使用自己的域名
