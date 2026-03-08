export const siteData = {
  site: {
    name: "Zzy 的个人网站",
    domain: "https://personal-website-beige-omega.vercel.app",
    github: "https://github.com/Zzy-min",
    blog: "https://blog.csdn.net/Zzydzyg0618?spm=1000.2115.3001.5343"
  },
  profile: {
    name: "Zzy",
    role: "Java / Python 学习者 · 项目实践者",
    headline: "用项目和文章记录技术成长，持续构建自己的开发者品牌。",
    intro:
      "我正在围绕 Java、Python 和 Web 开发建立自己的技术积累：一边做项目，一边把关键知识整理成博客，形成可展示、可复盘、可持续更新的个人作品集。",
    location: "中国",
    email: {
      user: "zzy19812007",
      domain: "gmail.com"
    },
    strengths: [
      "把学习过程沉淀为可复用的知识卡片与文章",
      "偏爱从小项目切入，边做边理解技术细节",
      "关注代码表达、页面体验和长期可维护性"
    ],
    skills: [
      "Java",
      "Python",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Git",
      "GitHub",
      "Vercel",
      "算法基础",
      "数据结构"
    ]
  },
  metrics: [
    { label: "博客文章", value: "0", key: "posts" },
    { label: "精选项目", value: "4" },
    { label: "主攻方向", value: "Java / Python" }
  ],
  projects: [
    {
      title: "中国象棋对战网页应用",
      summary:
        "一个支持双人对战的中国象棋 Web 项目，突出规则实现、棋盘交互和前端页面表达。",
      stack: ["HTML", "CSS", "JavaScript", "Game Logic"],
      githubUrl: "https://github.com/Zzy-min/chinese-chess-readme-fix",
      demoUrl: "https://github.com/Zzy-min/chinese-chess-readme-fix",
      featured: true,
      updatedAt: "2026-03-07",
      status: "已发布"
    },
    {
      title: "ChineseChess AlphaZero",
      summary:
        "围绕中国象棋 AI 的训练与推理实验，展示对强化学习、策略搜索和 Python 工程化的兴趣。",
      stack: ["Python", "PyTorch", "AlphaZero", "MCTS"],
      githubUrl: "https://github.com/Zzy-min/ChineseChess-AlphaZero",
      demoUrl: "https://github.com/Zzy-min/ChineseChess-AlphaZero",
      featured: true,
      updatedAt: "2026-03-07",
      status: "研究中"
    },
    {
      title: "CSDN 技术博客体系",
      summary:
        "持续输出 Java、Python 和基础编程内容，把阶段性学习沉淀为可检索、可复习的文章集合。",
      stack: ["CSDN", "Java", "Python", "知识管理"],
      githubUrl: "https://blog.csdn.net/Zzydzyg0618?spm=1000.2115.3001.5343",
      demoUrl: "https://blog.csdn.net/Zzydzyg0618?spm=1000.2115.3001.5343",
      featured: true,
      updatedAt: "2025-02-24",
      status: "持续更新"
    },
    {
      title: "个人品牌站点（当前）",
      summary:
        "用于聚合 GitHub 项目、博客文章和成长轨迹的个人站点，一站式展示技术能力与内容输出。",
      stack: ["Static Site", "Responsive UI", "SEO", "Vercel"],
      githubUrl: "https://github.com/Zzy-min",
      demoUrl: "https://personal-website-beige-omega.vercel.app",
      featured: false,
      updatedAt: "2026-03-07",
      status: "进行中"
    }
  ],
  posts: [
    {
      title: "Python基础知识扫盲合集（新手版）",
      summary: "从入门视角整理 Python 基础概念，适合作为后续学习的起点。",
      publishedAt: "2025-02-24",
      tags: ["Python", "入门"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/145847997",
      featured: true
    },
    {
      title: "Java基础知识合集（新手版）",
      summary: "对 Java 初学阶段常见概念做系统梳理，方便建立整体知识框架。",
      publishedAt: "2025-02-23",
      tags: ["Java", "入门"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/145816856",
      featured: true
    },
    {
      title: "C语言基础知识扫盲（新手版）",
      summary: "面向新手梳理 C 语言的基础知识点，帮助建立最初的编程认知。",
      publishedAt: "2025-02-23",
      tags: ["C语言", "入门"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618?spm=1000.2115.3001.5343",
      featured: true
    },
    {
      title: "JVM虚拟机的初步了解",
      summary: "围绕 JVM 的基础概念做入门整理，帮助理解 Java 运行机制。",
      publishedAt: "2025-01-22",
      tags: ["Java", "JVM"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/145384238",
      featured: true
    },
    {
      title: "java八种数据类型和他们的运用和解释",
      summary: "总结 Java 的八种基本数据类型、适用场景与常见认知点。",
      publishedAt: "2025-01-22",
      tags: ["Java", "数据类型"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/145354348",
      featured: false
    },
    {
      title: "Java数组的讲解与简单运用",
      summary: "聚焦数组的基本概念、声明方式和简单示例，适合巩固语法基础。",
      publishedAt: "2025-01-20",
      tags: ["Java", "数组"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/145319771",
      featured: false
    },
    {
      title: "关于Java流程控制的理解和运用",
      summary: "整理分支、循环等流程控制语句的核心理解与简单使用方式。",
      publishedAt: "2025-01-18",
      tags: ["Java", "流程控制"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/145277960",
      featured: false
    },
    {
      title: "Java运算的初步了解和运用",
      summary: "从基础运算符入手，帮助建立表达式与计算逻辑的直觉。",
      publishedAt: "2025-01-17",
      tags: ["Java", "运算符"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/145252971",
      featured: false
    },
    {
      title: "初识Java和Java基础知识",
      summary: "面向新手的 Java 起步文章，梳理基础概念与学习切入点。",
      publishedAt: "2025-01-16",
      tags: ["Java", "基础"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/145228590",
      featured: false
    },
    {
      title: "Java的简单介绍",
      summary: "用更轻量的方式介绍 Java 的定位、特点与初学阶段应关注的重点。",
      publishedAt: "2025-01-13",
      tags: ["Java", "基础"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618?spm=1000.2115.3001.5343",
      featured: false
    },
    {
      title: "了解浮点型以及了解单精度和双精度大小规律",
      summary: "围绕浮点数、单精度与双精度做基础区分，帮助理解常见数值表示。",
      publishedAt: "2025-01-09",
      tags: ["编程基础", "数据类型"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618?spm=1000.2115.3001.5343",
      featured: false
    },
    {
      title: "初识字符串以及布尔类型，简单认识它们",
      summary: "介绍字符串和布尔类型的基本含义与常见使用方式，夯实入门概念。",
      publishedAt: "2025-01-08",
      tags: ["编程基础", "字符串"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618?spm=1000.2115.3001.5343",
      featured: false
    },
    {
      title: "了解python中的变量和常量",
      summary: "从变量与常量切入，帮助理解 Python 中最常见的数据命名与使用方式。",
      publishedAt: "2025-01-07",
      tags: ["Python", "变量"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618?spm=1000.2115.3001.5343",
      featured: false
    },
    {
      title: "了解python、认识python以及完成代码敲写",
      summary: "记录 Python 入门阶段对语言认知、开发环境与基础代码书写的理解。",
      publishedAt: "2025-01-06",
      tags: ["Python", "基础"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618?spm=1000.2115.3001.5343",
      featured: false
    }
  ],
  timeline: [
    {
      date: "2026-03-07",
      title: "启动个人品牌网站",
      description: "开始搭建聚合 GitHub、博客和个人介绍的独立展示站点。",
      type: "website"
    },
    {
      date: "2025-02-24",
      title: "发布 Python 入门合集",
      description: "围绕 Python 基础知识输出系统化整理文章，补齐博客内容矩阵。",
      type: "blog"
    },
    {
      date: "2025-02-23",
      title: "补齐 Java 与 C 语言入门合集",
      description: "同一天集中发布 Java 与 C 语言入门向整理文章，博客内容更完整。",
      type: "blog"
    },
    {
      date: "2025-01-22",
      title: "深入到 JVM 与数据类型主题",
      description: "从语法入门逐步延伸到 JVM 与底层概念，开始建立更完整的 Java 认识。",
      type: "learning"
    },
    {
      date: "2025-01-20",
      title: "持续输出 Java 基础系列",
      description: "围绕数组、流程控制、运算符等主题形成连续的学习记录。",
      type: "blog"
    },
    {
      date: "2025-01-06",
      title: "开始连续输出编程入门内容",
      description: "从 Python 与基础类型主题起步，逐步形成持续更新的学习型博客节奏。",
      type: "project"
    }
  ],
  navigation: [
    { label: "首页", href: "/" },
    { label: "项目", href: "/projects/" },
    { label: "博客", href: "/blog/" },
    { label: "关于我", href: "/about/" },
    { label: "时间线", href: "/timeline/" }
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/Zzy-min" },
    { label: "CSDN", href: "https://blog.csdn.net/Zzydzyg0618?spm=1000.2115.3001.5343" },
    { label: "Email", href: "mailto:zzy19812007@gmail.com" }
  ]
};
