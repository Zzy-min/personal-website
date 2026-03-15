export interface SiteConfig {
  site: SiteInfo;
  profile: Profile;
  metrics: Metric[];
  projects: Project[];
  posts: Post[];
  timeline: TimelineItem[];
  navigation: Navigation[];
  socials: Social[];
}

export interface SiteInfo {
  name: string;
  domain: string;
  github: string;
  blog: string;
}

export interface Profile {
  name: string;
  role: string;
  headline: string;
  positioning: string;
  intro: string;
  location: string;
  email: {
    user: string;
    domain: string;
  };
  currentFocus: string[];
  strengths: string[];
  skills: string[];
}

export interface Metric {
  label: string;
  value: string;
  key?: string;
}

export interface Project {
  title: string;
  summary: string;
  problem: string;
  outcome: string;
  highlights: string[];
  featuredOrder: number | null;
  stack: string[];
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
  updatedAt: string;
  status: string;
}

export interface Post {
  title: string;
  summary: string;
  featuredReason?: string;
  publishedAt: string;
  tags: string[];
  sourceUrl: string;
  featured: boolean;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  type: 'blog' | 'learning' | 'project' | 'website';
}

export interface Navigation {
  label: string;
  href: string;
}

export interface Social {
  label: string;
  href: string;
}

export const siteData: SiteConfig = {
  site: {
    name: "Zzy 的个人网站",
    domain: "https://personal-website-beige-omega.vercel.app",
    github: "https://github.com/Zzy-min",
    blog: "https://blog.csdn.net/Zzydzyg0618?spm=1000.2115.3001.5343"
  },
  profile: {
    name: "Zzy",
    role: "Java / Web 项目实践者",
    headline: "用项目证明学习速度与工程潜力",
    positioning: "我把代表项目、技术文章和当前重点整理成一个能被快速判断的证据型个人网站。",
    intro:
      "当前重心是把 Java 学习、Web 实践和技术写作串成一条连续的成长证据链。你可以先看我已经做出的东西，再判断我接下来会走到哪里。",
    location: "中国",
    email: {
      user: "zzy19812007",
      domain: "gmail.com"
    },
    currentFocus: [
      "Java 项目实践",
      "Web 交互表达",
      "技术写作与复盘"
    ],
    strengths: [
      "先做可运行项目，再回到原理和细节补深度",
      "把阶段性学习整理成文章，沉淀成可检索的长期资产",
      "关注代码表达、界面体验和持续迭代能力"
    ],
    skills: [
      "Java",
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
    { label: "博客文章", value: "15", key: "posts" },
    { label: "精选项目", value: "4" },
    { label: "主攻方向", value: "Java" }
  ],
  projects: [
    {
      title: "中国象棋对战网页应用",
      summary:
        "一个支持双人对战的中国象棋 Web 项目，突出规则实现、棋盘交互和前端页面表达。",
      problem: "把完整中国象棋规则、走子限制和双人对战体验稳定地放进浏览器里。",
      outcome: "做出了可在线体验的双人对战版本，用真实交互展示规则理解、状态管理和前端表达能力。",
      highlights: [
        "独立梳理走子与判定规则",
        "实现棋盘交互与双人回合切换",
        "提供可直接访问的线上演示"
      ],
      featuredOrder: 1,
      stack: ["HTML", "CSS", "JavaScript", "Game Logic"],
      githubUrl: "https://github.com/Zzy-min/chinese-chess-readme-fix",
      demoUrl: "https://xiangqi-web.onrender.com/",
      featured: true,
      updatedAt: "2026-03-08",
      status: "已发布"
    },
    {
      title: "ChineseChess AlphaZero",
      summary:
        "围绕中国象棋 AI 的训练与推理实验，展示对强化学习、策略搜索和 Python 工程化的兴趣。",
      problem: "在规则项目之外，继续往策略搜索和强化学习方向探索更复杂的问题空间。",
      outcome: "把中国象棋 AI 训练作为长期实验方向，证明自己愿意处理更抽象、更难验证的技术问题。",
      highlights: [
        "围绕 MCTS 和 AlphaZero 思路建模",
        "结合 Python 与 PyTorch 进行实验",
        "把研究型项目纳入作品集主线"
      ],
      featuredOrder: 2,
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
        "持续输出 Java 和基础编程内容，把阶段性学习沉淀为可检索、可复习的文章集合。",
      problem: "如果学习只停留在代码仓库里，外界很难看见思考过程和进步速度。",
      outcome: "持续把 Java 与基础编程内容写成文章，形成稳定更新的公开内容资产，补足表达与复盘证据。",
      highlights: [
        "长期持续更新而不是一次性堆内容",
        "覆盖 Java、线程、基础语法和项目拆解",
        "把学习记录变成可检索的公开入口"
      ],
      featuredOrder: 3,
      stack: ["CSDN", "Java", "知识管理"],
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
      problem: "已有项目和文章分散在不同平台上，缺少一个能快速建立判断的统一入口。",
      outcome: "把项目、文章和成长轨迹整合成单一站点，降低他人理解成本，也倒逼自己整理定位与成果。",
      highlights: [
        "统一聚合项目、文章和时间线",
        "从静态站持续迁移到 Next.js 版本",
        "围绕招聘方阅读路径重新组织内容"
      ],
      featuredOrder: null,
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
      title: "线程进阶: 无人机自动防空平台开发教程V2",
      summary: "基于Java线程的无人机防空平台仿真系统，包含窗体界面、多线程控制和事件监听等模块。",
      featuredReason: "这篇文章最能说明我不仅会写代码，还会把实战里的线程知识重新组织成可理解的教程。",
      publishedAt: "2026-01-31",
      tags: ["Java", "线程", "项目实战"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/157543760",
      featured: true
    },
    {
      title: "线程之舞：程序运行的韵律与光影",
      summary: "介绍单线程程序执行特点及多线程必要性，讲解Java创建线程的第一种方式——继承Thread类。",
      featuredReason: "它体现了我会把抽象概念拆成更容易读懂的语言，而不是只堆知识点。",
      publishedAt: "2026-01-30",
      tags: ["Java", "线程"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/157523847",
      featured: true
    },
    {
      title: "Markdow文档初学",
      summary: "介绍Markdown基础语法，包括标题、文字样式、列表、代码块、引用、分割线以及表格的创建方法。",
      featuredReason: "这类基础文章证明我在补技术之外，也在补文档表达和知识整理能力。",
      publishedAt: "2026-01-21",
      tags: ["Markdown", "文档"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/157234875",
      featured: true
    },
    {
      title: "JAVA实战：文件管理系统1.0",
      summary: "基于Java的文件管理系统，提供文件列表查看、创建、删除、获取路径和多级目录创建功能。",
      featuredReason: "它能补足我在文件 IO 和命令式逻辑处理上的实战痕迹。",
      publishedAt: "2025-11-30",
      tags: ["Java", "文件IO", "项目实战"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/156274373",
      featured: true
    },
    {
      title: "C语言经典算法：汉诺塔问题",
      summary: "通过递归思想解决汉诺塔问题，详细解释递归的核心思想和C语言完整实现代码。",
      featuredReason: "它说明我不只关注应用层练习，也在持续补算法和基础思维训练。",
      publishedAt: "2025-11-21",
      tags: ["C语言", "算法", "递归"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/156030641",
      featured: true
    },
    {
      title: "C语言初步学习：数组的增删查改",
      summary: "基于静态数组的动态数组操作库，提供增删查改等基本功能，包含边界检查。",
      publishedAt: "2025-10-15",
      tags: ["C语言", "数组", "数据结构"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/155721684",
      featured: true
    },
    {
      title: "C语言基础知识梳理1.0",
      summary: "C语言基础知识笔记，包含数据类型、常量与变量、运算符和常见数据结构。",
      publishedAt: "2025-10-12",
      tags: ["C语言", "基础"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/155643582",
      featured: true
    },
    {
      title: "Java数据类型与基本语法知识回顾",
      summary: "系统介绍Java编程基础知识，包括数据类型、类与对象、接口实现、数组操作和图形界面开发。",
      publishedAt: "2025-09-04",
      tags: ["Java", "基础", "GUI"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/154964375",
      featured: true
    },
    {
      title: "初步Java学习:图像处理2.0",
      summary: "基于Java的图像处理系统，实现灰度、马赛克、油画、去背景等多种滤镜效果。",
      publishedAt: "2025-08-08",
      tags: ["Java", "图像处理", "项目实战"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/154543837",
      featured: true
    },
    {
      title: "初步Java学习：图像处理1.0",
      summary: "使用Java Swing框架实现图片处理功能，包括马赛克、亮度提升、滤镜和灰度处理。",
      publishedAt: "2025-08-06",
      tags: ["Java", "图像处理", "Swing"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/154487823",
      featured: true
    },
    {
      title: "初步Java学习：面向对象编程（3）",
      summary: "介绍Java Swing界面开发的实现方法，重点讲解登录界面的组件设置与功能实现。",
      publishedAt: "2025-08-03",
      tags: ["Java", "Swing", "GUI"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/154422363",
      featured: true
    },
    {
      title: "初步JAVA学习：面向对象编程（2）",
      summary: "基于Java Swing的绘图板开发流程，演示MouseListener接口和Graphics对象的图形绘制。",
      publishedAt: "2025-08-01",
      tags: ["Java", "Swing", "绘图"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/154377822",
      featured: true
    },
    {
      title: "初步了解Java运算与逻辑关系",
      summary: "Java编程基础涵盖算术运算、关系运算和逻辑运算，演示偶数求和和闰年计算。",
      publishedAt: "2025-08-01",
      tags: ["Java", "运算符", "逻辑"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/154378526",
      featured: false
    },
    {
      title: "Java注释的力量：提升代码可读性",
      summary: "介绍Java三种注释类型（单行、多行、文档）及最佳实践，提升代码可维护性。",
      publishedAt: "2025-07-25",
      tags: ["Java", "注释", "代码规范"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/154223746",
      featured: false
    },
    {
      title: "初步JAVA学习：面向对象编程（1）",
      summary: "面向对象编程(OOP)基础介绍，通过定义类创建对象，实现代码复用和模块化。",
      publishedAt: "2025-07-25",
      tags: ["Java", "OOP", "面向对象"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/154223575",
      featured: false
    },
    {
      title: "AI编程神器：通义灵码Java开发实战",
      summary: "通义灵码AI编程助手功能介绍，包括代码生成、优化建议、异常诊断和知识点讲解。",
      publishedAt: "2025-07-07",
      tags: ["Java", "AI", "开发工具"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/153908670",
      featured: false
    },
    {
      title: "10招打造你的专属IDEA编程环境",
      summary: "IDEA优化指南，包括字体推荐、主题建议、界面布局和快捷键配置。",
      publishedAt: "2025-07-07",
      tags: ["IDEA", "开发工具", "配置"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/153908668",
      featured: false
    },
    {
      title: "Java中的AI集成",
      summary: "介绍如何通过VSCode安装通义千问AI编程助手插件，演示其辅助Java开发的过程。",
      publishedAt: "2025-07-06",
      tags: ["Java", "AI", "VSCode"],
      sourceUrl: "https://blog.csdn.net/Zzydzyg0618/article/details/153860899",
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
      date: "2026-01-31",
      title: "线程进阶项目",
      description: "发布无人机自动防空平台开发教程V2，展示Java多线程实战能力。",
      type: "project"
    },
    {
      date: "2026-01-30",
      title: "深入Java线程编程",
      description: "输出《线程之舞》系列文章，系统讲解多线程原理与应用。",
      type: "learning"
    },
    {
      date: "2026-01-21",
      title: "Markdown 文档学习",
      description: "学习并整理Markdown文档语法，为技术写作打好基础。",
      type: "learning"
    },
    {
      date: "2025-11-30",
      title: "文件管理系统实战",
      description: "完成基于Java的文件管理系统1.0，巩固文件IO操作知识。",
      type: "project"
    },
    {
      date: "2025-11-21",
      title: "算法学习：汉诺塔",
      description: "通过汉诺塔问题深入理解递归算法思想与C语言实现。",
      type: "learning"
    },
    {
      date: "2025-10-15",
      title: "数据结构实践",
      description: "实现数组的增删查改操作，理解静态数组模拟动态数组的方法。",
      type: "learning"
    },
    {
      date: "2025-09-04",
      title: "Java基础系统回顾",
      description: "系统整理Java数据类型、面向对象、接口和GUI开发等核心知识。",
      type: "learning"
    },
    {
      date: "2025-08-08",
      title: "图像处理进阶",
      description: "实现Java图像处理系统2.0，支持多种滤镜效果。",
      type: "project"
    },
    {
      date: "2025-08-06",
      title: "图像处理入门",
      description: "开始Java图像处理学习，实现马赛克、亮度调整等基础效果。",
      type: "learning"
    },
    {
      date: "2025-08-03",
      title: "Swing界面开发",
      description: "完成登录界面和绘图板项目，掌握Java Swing GUI编程。",
      type: "learning"
    },
    {
      date: "2025-07-07",
      title: "开发工具优化",
      description: "配置IDEA编程环境，学习使用通义灵码等AI编程助手提升效率。",
      type: "learning"
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
      description: "从基础类型主题起步，逐步形成持续更新的学习型博客节奏。",
      type: "project"
    }
  ],
  navigation: [
    { label: "首页", href: "/" },
    { label: "项目", href: "/projects" },
    { label: "博客", href: "/blog" },
    { label: "关于我", href: "/about" },
    { label: "时间线", href: "/timeline" }
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/Zzy-min" },
    { label: "CSDN", href: "https://blog.csdn.net/Zzydzyg0618?spm=1000.2115.3001.5343" },
    { label: "Email", href: "mailto:zzy19812007@gmail.com" }
  ]
};
