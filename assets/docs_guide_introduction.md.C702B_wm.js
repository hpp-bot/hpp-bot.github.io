import{_ as n,o as a,c as e,a3 as i}from"./chunks/framework.B5WAEDB7.js";const g=JSON.parse('{"title":"介绍","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/introduction.md","filePath":"docs/guide/introduction.md"}'),t={name:"docs/guide/introduction.md"};function l(p,s,o,r,c,d){return a(),e("div",null,[...s[0]||(s[0]=[i(`<h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h1><p>ViteDocs 是一个基于 VitePress 构建的扁平化二次元风格文档站点，采用独特的<strong>双仓架构</strong>实现内容开源与主题私有的完美结合。</p><h2 id="核心理念" tabindex="-1">核心理念 <a class="header-anchor" href="#核心理念" aria-label="Permalink to &quot;核心理念&quot;">​</a></h2><p>传统文档站点要么全部公开（主题样式也随之开源），要么全部私有（失去协作价值）。ViteDocs 提供了一种折中方案：</p><ul><li><strong>公开仓库</strong> 存储所有 Markdown 文档内容，任何人可以查看、编辑、贡献</li><li><strong>私有仓库</strong> 存储主题样式、CSS 和组件代码，保持闭源</li><li><strong>GitHub Actions</strong> 自动将两者结合，构建并部署到 GitHub Pages</li></ul><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><ul><li>希望文档内容开源协作，但自定义主题不希望被复制</li><li>SaaS 产品需要对外文档站点，同时保护自己的设计系统</li><li>团队协作开发，需要区分内容与样式权限</li><li>想要&quot;在 GitHub 上编辑此页&quot;的便捷体验，但不想公开全部代码</li></ul><h2 id="技术栈" tabindex="-1">技术栈 <a class="header-anchor" href="#技术栈" aria-label="Permalink to &quot;技术栈&quot;">​</a></h2><ul><li><strong>构建工具</strong>: Vite 5</li><li><strong>静态站点生成器</strong>: VitePress 1.x</li><li><strong>样式方案</strong>: 原生 CSS + CSS Variables（无 Tailwind）</li><li><strong>部署平台</strong>: GitHub Pages</li><li><strong>CI/CD</strong>: GitHub Actions</li><li><strong>字体</strong>: Google Fonts (Noto Sans SC, ZCOOL QingKe HuangYou)</li></ul><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vite-docs/                    # 公开仓库（Git clone 可见）</span></span>
<span class="line"><span>├── .github/workflows/        # CI/CD 工作流</span></span>
<span class="line"><span>├── .vitepress/</span></span>
<span class="line"><span>│   ├── config.ts             # VitePress 配置</span></span>
<span class="line"><span>│   └── theme/                # 主题入口（空壳，实际内容由 CI 同步）</span></span>
<span class="line"><span>├── docs/                     # 所有 Markdown 文档 ← 核心内容</span></span>
<span class="line"><span>│   ├── index.md</span></span>
<span class="line"><span>│   ├── guide/</span></span>
<span class="line"><span>│   ├── api/</span></span>
<span class="line"><span>│   └── about/</span></span>
<span class="line"><span>├── package.json</span></span>
<span class="line"><span>└── index.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vite-docs-theme/              # 私有仓库（仅 CI 可访问）</span></span>
<span class="line"><span>├── .vitepress/theme/         # 主题样式</span></span>
<span class="line"><span>│   ├── style.css             # 主样式表</span></span>
<span class="line"><span>│   ├── custom.css            # 自定义补充样式</span></span>
<span class="line"><span>│   ├── components/           # Vue 组件</span></span>
<span class="line"><span>│   └── index.ts              # 主题入口</span></span>
<span class="line"><span>└── README.md</span></span></code></pre></div>`,11)])])}const h=n(t,[["render",l]]);export{g as __pageData,h as default};
