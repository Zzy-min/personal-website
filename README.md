# Zzy Personal Website

一个无依赖的静态个人网站，聚合个人项目、CSDN 博客和成长时间线。

## 目录结构

- `index.html`：首页
- `projects/`：项目页
- `blog/`：博客页
- `about/`：关于我
- `timeline/`：成长时间线
- `assets/data.js`：个人资料、项目、博客和时间线数据
- `assets/styles.css`：统一样式
- `assets/app.js`：页面渲染逻辑

## 本地预览

```bash
python -m http.server 4173
```

然后访问 `http://localhost:4173/personal-website/`。

## 部署到 Vercel

1. 新建一个 GitHub 仓库并上传 `personal-website` 目录内容。
2. 在 `Vercel` 中导入该仓库。
3. Framework Preset 选择 `Other`。
4. Build Command 留空。
5. Output Directory 留空。
6. 部署后，把 `robots.txt` 和 `sitemap.xml` 中的域名替换成你的实际域名。

## 后续建议

- 在 `assets/data.js` 中补充更多项目和文章。
- 如果后续本机 `Node/npm` 环境恢复，可以迁移到 `Next.js` 并复用同一套内容结构。
