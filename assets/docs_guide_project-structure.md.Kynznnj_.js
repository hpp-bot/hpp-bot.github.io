import{_ as a,o as n,c as e,a3 as p}from"./chunks/framework.B5WAEDB7.js";const u=JSON.parse('{"title":"项目结构","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/project-structure.md","filePath":"docs/guide/project-structure.md"}'),i={name:"docs/guide/project-structure.md"};function t(l,s,c,o,d,h){return n(),e("div",null,[...s[0]||(s[0]=[p(`<h1 id="项目结构" tabindex="-1">项目结构 <a class="header-anchor" href="#项目结构" aria-label="Permalink to &quot;项目结构&quot;">​</a></h1><h2 id="顶层结构" tabindex="-1">顶层结构 <a class="header-anchor" href="#顶层结构" aria-label="Permalink to &quot;顶层结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vite-docs/</span></span>
<span class="line"><span>├── .github/workflows/    # GitHub Actions 工作流定义</span></span>
<span class="line"><span>├── .vitepress/           # VitePress 配置和主题</span></span>
<span class="line"><span>│   ├── config.ts         # 站点配置文件</span></span>
<span class="line"><span>│   └── theme/            # 主题入口（开发时为空壳）</span></span>
<span class="line"><span>├── docs/                 # 文档内容目录（核心！）</span></span>
<span class="line"><span>│   ├── index.md          # 首页</span></span>
<span class="line"><span>│   ├── guide/            # 指南文档</span></span>
<span class="line"><span>│   ├── api/              # API 参考文档</span></span>
<span class="line"><span>│   └── about/            # 关于页面</span></span>
<span class="line"><span>├── public/               # 静态资源（不经过 Vite 处理）</span></span>
<span class="line"><span>├── index.html            # HTML 入口模板</span></span>
<span class="line"><span>├── package.json          # 项目依赖配置</span></span>
<span class="line"><span>└── vite.config.js        # Vite 构建配置</span></span></code></pre></div><h2 id="docs-目录详解" tabindex="-1">docs/ 目录详解 <a class="header-anchor" href="#docs-目录详解" aria-label="Permalink to &quot;docs/ 目录详解&quot;">​</a></h2><p>这是公开仓库中唯一需要频繁修改的目录。每个 <code>.md</code> 文件都会生成一个独立的页面。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docs/</span></span>
<span class="line"><span>├── index.md              # 首页（特殊，支持 YAML frontmatter 的 hero/features）</span></span>
<span class="line"><span>├── guide/</span></span>
<span class="line"><span>│   ├── introduction.md   # 介绍</span></span>
<span class="line"><span>│   ├── installation.md   # 安装配置</span></span>
<span class="line"><span>│   ├── project-structure.md  # 项目结构</span></span>
<span class="line"><span>│   ├── theme-customization.md  # 主题定制</span></span>
<span class="line"><span>│   ├── dual-repo-architecture.md  # 双仓架构</span></span>
<span class="line"><span>│   └── cicd-pipeline.md  # CI/CD 流水线</span></span>
<span class="line"><span>├── api/</span></span>
<span class="line"><span>│   ├── config.md         # 配置选项</span></span>
<span class="line"><span>│   ├── components.md     # 组件 API</span></span>
<span class="line"><span>│   └── plugins.md        # 插件系统</span></span>
<span class="line"><span>└── about/</span></span>
<span class="line"><span>    ├── introduction.md</span></span>
<span class="line"><span>    ├── contributing.md</span></span>
<span class="line"><span>    └── license.md</span></span></code></pre></div><h2 id="vitepress-theme-目录说明" tabindex="-1">.vitepress/theme/ 目录说明 <a class="header-anchor" href="#vitepress-theme-目录说明" aria-label="Permalink to &quot;.vitepress/theme/ 目录说明&quot;">​</a></h2><blockquote><p><strong>重要</strong>：在本地开发时，这个目录是空壳。实际的主题文件在私有仓库中，由 CI/CD 自动同步。</p></blockquote><p>本地开发时如何预览主题？有两种方式：</p><h3 id="方式一-手动复制-推荐用于本地调试" tabindex="-1">方式一：手动复制（推荐用于本地调试） <a class="header-anchor" href="#方式一-手动复制-推荐用于本地调试" aria-label="Permalink to &quot;方式一：手动复制（推荐用于本地调试）&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 从私有仓库下载主题文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> repo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hpp-bot/vite-docs-theme</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /tmp/theme-backup</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /tmp/theme-backup/.vitepress/theme/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .vitepress/theme/</span></span></code></pre></div><h3 id="方式二-使用-mock-样式" tabindex="-1">方式二：使用 mock 样式 <a class="header-anchor" href="#方式二-使用-mock-样式" aria-label="Permalink to &quot;方式二：使用 mock 样式&quot;">​</a></h3><p>在 <code>.vitepress/theme/style.css</code> 中已经包含了一套基础样式，即使没有私有仓库也能正常预览。</p><h2 id="public-目录" tabindex="-1">public/ 目录 <a class="header-anchor" href="#public-目录" aria-label="Permalink to &quot;public/ 目录&quot;">​</a></h2><p>存放不需要经过构建处理的静态资源，如图片、图标等。这些文件会直接复制到构建产物的根目录。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public/</span></span>
<span class="line"><span>├── vite.svg              # Vite logo</span></span>
<span class="line"><span>└── favicon.ico           # 网站图标</span></span></code></pre></div><h2 id="github-workflows-目录" tabindex="-1">.github/workflows/ 目录 <a class="header-anchor" href="#github-workflows-目录" aria-label="Permalink to &quot;.github/workflows/ 目录&quot;">​</a></h2><p>包含两个 workflow 文件：</p><ul><li><code>deploy.yml</code> — 主部署流程：当 docs/ 变化时触发构建和部署</li><li><code>sync-theme.yml</code> — 主题同步流程：从私有仓库拉取最新主题文件</li></ul>`,19)])])}const k=a(i,[["render",t]]);export{u as __pageData,k as default};
