import { siteData } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';
import { MapPin, Mail, Github } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <Badge>关于我</Badge>
        <h1 className="text-4xl font-bold mt-4">个人简介</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.3fr_0.9fr] gap-8">
        {/* Profile Info */}
        <div className="space-y-6">
          <div className="bg-panel border border-line rounded-card p-6 shadow-card">
            <h2 className="text-2xl font-bold mb-4">基本信息</h2>
            <div className="space-y-3">
              <div>
                <span className="text-muted text-sm">姓名</span>
                <div className="font-semibold">{siteData.profile.name}</div>
              </div>
              <div>
                <span className="text-muted text-sm">角色</span>
                <div className="font-semibold">{siteData.profile.role}</div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-accent-blue" />
                <span className="text-muted text-sm">位置</span>
                <div className="font-semibold">{siteData.profile.location}</div>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-accent-blue" />
                <span className="text-muted text-sm">邮箱</span>
                <a
                  href={`mailto:${siteData.profile.email.user}@${siteData.profile.email.domain}`}
                  className="font-semibold hover:text-accent-blue transition-colors"
                >
                  {siteData.profile.email.user}@{siteData.profile.email.domain}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-panel border border-line rounded-card p-6 shadow-card">
            <h2 className="text-2xl font-bold mb-4">个人简介</h2>
            <p className="leading-relaxed">{siteData.profile.headline}</p>
            <p className="text-muted mt-4 leading-relaxed">{siteData.profile.intro}</p>
          </div>

          <div className="bg-panel border border-line rounded-card p-6 shadow-card">
            <h2 className="text-2xl font-bold mb-4">联系方式</h2>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${siteData.profile.email.user}@${siteData.profile.email.domain}`}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-14px border border-line bg-white/2 hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail size={18} />
                <span>发送邮件</span>
              </a>
              <a
                href={siteData.site.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-14px border border-transparent bg-gradient-to-br from-primary-blue to-primary-strong text-bg font-bold hover:-translate-y-0.5 transition-transform duration-200"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={siteData.site.blog}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-14px border border-line bg-white/2 hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>CSDN 博客</span>
              </a>
            </div>
          </div>
        </div>

        {/* Skills & Strengths */}
        <div className="space-y-6">
          <div className="bg-panel border border-line rounded-card p-6 shadow-card">
            <h2 className="text-2xl font-bold mb-4">技能栈</h2>
            <div className="flex flex-wrap gap-2">
              {siteData.profile.skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-panel border border-line rounded-card p-6 shadow-card">
            <h2 className="text-2xl font-bold mb-4">能力特点</h2>
            <ul className="space-y-3">
              {siteData.profile.strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent-blue mt-2 flex-shrink-0" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
