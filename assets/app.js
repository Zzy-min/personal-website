import { siteData } from "./data.js";

const root = document.documentElement;
const base = root.dataset.base || ".";
const currentPath = root.dataset.path || window.location.pathname;

const byId = (id) => document.getElementById(id);

const buildUrl = (path) => {
  if (path === "/") return `${base}/`;
  return `${base}${path}`.replace(/\/+/g, "/");
};

const formatDate = (dateString) =>
  new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(dateString));

const createTag = (text) => `<span class="tag">${text}</span>`;

const renderNavigation = () => {
  const navMarkup = siteData.navigation
    .map((item) => {
      const url = buildUrl(item.href);
      const active = currentPath === item.href ? "is-active" : "";
      return `<a class="nav-link ${active}" href="${url}">${item.label}</a>`;
    })
    .join("");

  const nav = byId("site-nav");
  const mobileNav = byId("mobile-nav");
  if (nav) nav.innerHTML = navMarkup;
  if (mobileNav) mobileNav.innerHTML = navMarkup;
};

const renderFooter = () => {
  const year = byId("current-year");
  if (year) year.textContent = new Date().getFullYear();

  const footerLinks = byId("footer-links");
  if (!footerLinks) return;

  footerLinks.innerHTML = siteData.socials
    .map((item) => `<a href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>`)
    .join("<span class='divider'>·</span>");
};

const renderSharedFields = () => {
  document.querySelectorAll("[data-profile='name']").forEach((node) => {
    node.textContent = siteData.profile.name;
  });
  document.querySelectorAll("[data-profile='role']").forEach((node) => {
    node.textContent = siteData.profile.role;
  });
  document.querySelectorAll("[data-profile='headline']").forEach((node) => {
    node.textContent = siteData.profile.headline;
  });
  document.querySelectorAll("[data-profile='intro']").forEach((node) => {
    node.textContent = siteData.profile.intro;
  });
  document.querySelectorAll("[data-profile='avatar']").forEach((node) => {
    node.textContent = siteData.profile.name.slice(0, 1).toUpperCase();
  });
  document.querySelectorAll("[data-link='github']").forEach((node) => {
    node.href = siteData.site.github;
  });
  document.querySelectorAll("[data-link='blog']").forEach((node) => {
    node.href = siteData.site.blog;
  });

  const emailLink = byId("email-link");
  if (emailLink) {
    const address = `${siteData.profile.email.user}@${siteData.profile.email.domain}`;
    emailLink.href = `mailto:${address}`;
    emailLink.textContent = address;
  }
};

const renderMetrics = () => {
  const container = byId("metric-list");
  if (!container) return;
  container.innerHTML = siteData.metrics
    .map(
      (item) => `<div class="metric-card"><strong>${item.value}</strong><span>${item.label}</span></div>`
    )
    .join("");
};

const projectCard = (project) => `
  <article class="card project-card">
    <div class="card-topline"><span class="eyebrow">${project.status}</span><span class="muted">${project.updatedAt}</span></div>
    <h3>${project.title}</h3>
    <p>${project.summary}</p>
    <div class="tag-list">${project.stack.map(createTag).join("")}</div>
    <div class="card-actions"><a href="${project.githubUrl}" target="_blank" rel="noreferrer">查看项目</a><a href="${project.demoUrl}" target="_blank" rel="noreferrer">打开链接</a></div>
  </article>
`;

const postCard = (post) => `
  <article class="card post-card">
    <div class="card-topline"><span class="eyebrow">${post.tags.join(" · ")}</span><span class="muted">${post.publishedAt}</span></div>
    <h3>${post.title}</h3>
    <p>${post.summary}</p>
    <div class="tag-list">${post.tags.map(createTag).join("")}</div>
    <div class="card-actions"><a href="${post.sourceUrl}" target="_blank" rel="noreferrer">阅读原文</a></div>
  </article>
`;

const renderProjects = () => {
  const featured = byId("featured-projects");
  const list = byId("project-list");
  if (featured) featured.innerHTML = siteData.projects.filter((item) => item.featured).map(projectCard).join("");
  if (list) list.innerHTML = siteData.projects.map(projectCard).join("");
};

const renderPosts = () => {
  const latest = byId("latest-posts");
  const list = byId("post-list");
  if (latest) latest.innerHTML = siteData.posts.slice(0, 3).map(postCard).join("");
  if (list) list.innerHTML = siteData.posts.map(postCard).join("");
};

const renderSkills = () => {
  const list = byId("skill-list");
  if (list) list.innerHTML = siteData.profile.skills.map(createTag).join("");
};

const renderStrengths = () => {
  const list = byId("strength-list");
  if (list) list.innerHTML = siteData.profile.strengths.map((item) => `<li>${item}</li>`).join("");
};

const renderTimeline = () => {
  const list = byId("timeline-list");
  if (!list) return;
  list.innerHTML = siteData.timeline
    .map(
      (item) => `
        <article class="timeline-item timeline-${item.type}">
          <div class="timeline-date">${formatDate(item.date)}</div>
          <div class="timeline-content card"><span class="eyebrow">${item.type}</span><h3>${item.title}</h3><p>${item.description}</p></div>
        </article>
      `
    )
    .join("");
};

const setupMenu = () => {
  const toggle = byId("menu-toggle");
  const mobilePanel = byId("mobile-panel");
  if (!toggle || !mobilePanel) return;
  toggle.addEventListener("click", () => {
    const isOpen = mobilePanel.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
};

renderNavigation();
renderFooter();
renderSharedFields();
renderMetrics();
renderProjects();
renderPosts();
renderSkills();
renderStrengths();
renderTimeline();
setupMenu();
