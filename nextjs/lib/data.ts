import { navigation, profile, site, socials } from '@/lib/content/profile';
import { posts } from '@/lib/content/posts';
import { projects } from '@/lib/content/projects';
import { sourceData } from '@/lib/content/source';
import { timeline } from '@/lib/content/timeline';

export type {
  Metric,
  Navigation,
  Post,
  Profile,
  Project,
  ProjectChallenge,
  ProjectMetric,
  ProjectScreenshot,
  ProjectVerification,
  SiteConfig,
  SiteInfo,
  Social,
  TimelineItem,
} from '@/lib/content/source';

export const siteData = {
  ...sourceData,
  site,
  profile,
  projects,
  posts,
  timeline,
  navigation,
  socials,
  metrics: sourceData.metrics.map((metric) => {
    if (metric.key === 'posts') return { ...metric, value: String(posts.length) };
    if (metric.label === '我的项目') return { ...metric, value: String(projects.filter((project) => project.featured).length) };
    return metric;
  }),
};
