import{_ as s,o as n,c as p,a3 as l}from"./chunks/framework.B5WAEDB7.js";const m=JSON.parse('{"title":"CI/CD 流水线","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/cicd-pipeline.md","filePath":"docs/guide/cicd-pipeline.md"}'),e={name:"docs/guide/cicd-pipeline.md"};function i(o,a,t,c,r,d){return n(),p("div",null,[...a[0]||(a[0]=[l(`<h1 id="ci-cd-流水线" tabindex="-1">CI/CD 流水线 <a class="header-anchor" href="#ci-cd-流水线" aria-label="Permalink to &quot;CI/CD 流水线&quot;">​</a></h1><h2 id="workflow-概览" tabindex="-1">Workflow 概览 <a class="header-anchor" href="#workflow-概览" aria-label="Permalink to &quot;Workflow 概览&quot;">​</a></h2><p>公开仓库包含两个 GitHub Actions workflow：</p><h3 id="_1-deploy-yml-—-构建部署" tabindex="-1">1. deploy.yml — 构建部署 <a class="header-anchor" href="#_1-deploy-yml-—-构建部署" aria-label="Permalink to &quot;1. deploy.yml — 构建部署&quot;">​</a></h3><p><strong>触发条件</strong>：当 <code>docs/</code> 目录有文件变更时自动触发</p><p><strong>流程</strong>：</p><ol><li>检出代码</li><li>安装 Node.js 和 pnpm</li><li>安装依赖（<code>pnpm install</code>）</li><li>运行 VitePress 构建（<code>pnpm build</code>）</li><li>部署到 GitHub Pages</li></ol><h3 id="_2-sync-theme-yml-—-主题同步" tabindex="-1">2. sync-theme.yml — 主题同步 <a class="header-anchor" href="#_2-sync-theme-yml-—-主题同步" aria-label="Permalink to &quot;2. sync-theme.yml — 主题同步&quot;">​</a></h3><p><strong>触发条件</strong>：</p><ul><li>手动触发（workflow_dispatch）</li><li>私有仓库推送新主题时通过 webhook 触发</li></ul><p><strong>流程</strong>：</p><ol><li>使用 PAT 克隆私有主题仓库</li><li>将 <code>.vitepress/theme/</code> 复制到公开仓库</li><li>提交并推送变更</li><li>触发 deploy workflow</li></ol><h2 id="部署流程图解" tabindex="-1">部署流程图解 <a class="header-anchor" href="#部署流程图解" aria-label="Permalink to &quot;部署流程图解&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>                    修改 docs/ 文件</span></span>
<span class="line"><span>                        ↓</span></span>
<span class="line"><span>              推送 commit 到 main</span></span>
<span class="line"><span>                        ↓</span></span>
<span class="line"><span>              [deploy.yml 触发]</span></span>
<span class="line"><span>                        ↓</span></span>
<span class="line"><span>              pnpm install &amp;&amp; pnpm build</span></span>
<span class="line"><span>                        ↓</span></span>
<span class="line"><span>              部署到 GitHub Pages</span></span>
<span class="line"><span>                        ↓</span></span>
<span class="line"><span>              https://hpp-bot.github.io/vite-docs/</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        同时（如需更新主题）：</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        修改私有仓库 theme/ 文件</span></span>
<span class="line"><span>                ↓</span></span>
<span class="line"><span>        推送 commit 到私有仓库</span></span>
<span class="line"><span>                ↓</span></span>
<span class="line"><span>        [sync-theme.yml 触发]</span></span>
<span class="line"><span>                ↓</span></span>
<span class="line"><span>        克隆私有仓库 → 复制主题 → 推送到公开仓库</span></span>
<span class="line"><span>                ↓</span></span>
<span class="line"><span>        [deploy.yml 再次触发]</span></span>
<span class="line"><span>                ↓</span></span>
<span class="line"><span>        重新构建并部署</span></span></code></pre></div><h2 id="手动触发部署" tabindex="-1">手动触发部署 <a class="header-anchor" href="#手动触发部署" aria-label="Permalink to &quot;手动触发部署&quot;">​</a></h2><p>如果需要手动触发部署，可以在 GitHub 仓库的 Actions tab 中选择对应的 workflow，点击 &quot;Run workflow&quot;。</p><h2 id="部署状态查看" tabindex="-1">部署状态查看 <a class="header-anchor" href="#部署状态查看" aria-label="Permalink to &quot;部署状态查看&quot;">​</a></h2><p>在仓库的 Actions tab 可以查看所有 workflow 的执行历史和状态。</p>`,18)])])}const u=s(e,[["render",i]]);export{m as __pageData,u as default};
