import type { Post } from '@/lib/content/source';

export const onsiteSummaries: Post[] = [
  {
    slug: 'xiangqi-arena-overview', title: '轻·棋局：从三棋入口到实时对战', summary: '复盘我如何把中国象棋、五子棋与围棋收束到同一套 Java Web 站点结构。', publishedAt: '2026-07-25', tags: ['轻棋局', 'Java', '架构'], sourceUrl: 'https://github.com/Zzy-min/Chinese-chess', featured: true,
    takeaways: ['统一入口不等于统一规则，规则边界必须独立', '房间状态和移动端反馈要用真实双端流程验证', '作品集应把部署与验收也视为实现的一部分'], relatedProjectSlugs: ['xiangqi-arena'],
    sections: [{ heading: '背景', body: '项目从单一象棋练习逐步扩展到三棋站点，核心难点是控制功能增长后的结构与验证成本。' }, { heading: '我的理解', body: '公共导航、房间和用户流程可以共享，但每种棋的规则、引擎和复盘能力必须保持清晰边界。' }],
  },
  {
    slug: 'xiangqi-arena-deployment', title: '轻·棋局部署上线：release、Caddy 与回滚', summary: '记录静态前门、Java 源站、发布校验和可回滚上线流程。', publishedAt: '2026-07-24', tags: ['轻棋局', '部署', '运维'], sourceUrl: 'https://github.com/Zzy-min/Chinese-chess', featured: true,
    takeaways: ['上传成功不等于发布成功', '软链接切换能让回滚保持简单', '公开域名、重定向和共存服务必须一起验证'], relatedProjectSlugs: ['xiangqi-arena'],
    sections: [{ heading: '背景', body: '线上站点需要在不影响既有应用的前提下持续发布，并为失败保留明确退路。' }, { heading: '发布方法', body: '每次构建进入独立 release，校验后切换 current，再重载 Caddy；失败就切回上一版本。' }],
  },
  {
    slug: 'qling-architecture', title: '轻灵架构：本地优先的 Agent Loop', summary: '拆解流式 TUI、Pipeline、工具执行与验证钩子之间的关系。', publishedAt: '2026-07-22', tags: ['轻灵', 'AI Agent', 'TypeScript'], sourceUrl: 'https://github.com/Zzy-min/qling', featured: true,
    takeaways: ['Agent Loop 要把工具结果重新纳入上下文', 'Pipeline 让安全、验证和呈现保持可组合', '本地优先降低恢复与审计成本'], relatedProjectSlugs: ['qling'],
    sections: [{ heading: '问题', body: '一个可用的 CLI Agent 不只是调用模型，还要管理工具、状态、失败和用户可见反馈。' }, { heading: '结构', body: '输入先进入 Pipeline，Agent Loop 决定工具调用，结果经过验证后再写入上下文与记忆。' }],
  },
  {
    slug: 'qling-memory', title: '轻灵记忆系统：从会话状态到可恢复任务', summary: '说明工作记忆、长期记忆和自动整理如何服务于真实任务恢复。', publishedAt: '2026-07-21', tags: ['轻灵', '记忆系统', '生产化'], sourceUrl: 'https://github.com/Zzy-min/qling', featured: false,
    takeaways: ['记忆首先是状态一致性问题', '写入需要原子性与明确生命周期', '恢复能力必须用中断轨迹验证'], relatedProjectSlugs: ['qling'],
    sections: [{ heading: '为什么需要分层', body: '短期上下文、可复用事实和后台整理的生命周期不同，混在一个文件中会放大一致性风险。' }, { heading: '生产化', body: '我把并发顺序、原子状态和恢复测试作为记忆能力的一部分，而不是只关注召回效果。' }],
  },
  {
    slug: 'hermes-workflow', title: 'Hermes Agent 自动化工作流复盘', summary: '从网关健康、任务完成、文件落盘到消息送达，梳理自动化闭环。', publishedAt: '2026-07-20', tags: ['Hermes', 'Agent', '自动化'], sourceUrl: 'https://github.com/Zzy-min', featured: false,
    takeaways: ['状态文件可能过时，运行态要交叉验证', '任务完成、文件落盘和消息送达是三个事实', '限流时反复重试可能让问题更糟'], relatedProjectSlugs: [],
    sections: [{ heading: '背景', body: '跨进程、网关和消息平台的任务很容易出现“看起来完成”但结果没有真正送达。' }, { heading: '验收链', body: '我分别检查进程与端口、健康接口、最新日志、目标文件以及接收端状态。' }],
  },
  {
    slug: 'mysql-stage-one', title: 'MySQL 第一阶段学习笔记', summary: '整理数据库概念、DDL、数据类型、主键与外键约束的第一阶段知识骨架。', publishedAt: '2026-07-24', tags: ['MySQL', '数据库', '学习笔记'], sourceUrl: 'https://blog.csdn.net/Zzydzyg0618/article/details/163161740', featured: false,
    takeaways: ['先理解数据模型再记语法', '约束是数据质量的一部分', '用可执行示例检验每个概念'], relatedProjectSlugs: [],
    sections: [{ heading: '学习范围', body: '第一阶段覆盖安装连接、库表操作、常用数据类型以及主外键约束。' }, { heading: '学习方法', body: '每个语法点都配合最小表结构执行，错误信息也记录为理解边界的证据。' }],
  },
];
