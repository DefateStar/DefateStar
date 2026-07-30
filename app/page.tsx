import SlashIntro from "./SlashIntro";

const projects = [
  {
    number: "01",
    title: "Shell++ Web",
    description: "Shell++ 官方网站，介绍穿戴端、Lua 后端、Android 与桌面插件。",
    tags: "ASTRO / CSS / WEB",
    href: "https://github.com/Shellplusplus/web",
  },
  {
    number: "02",
    title: "Shell++ Android端",
    description: "Shell++ 的 Android 客户端，用于连接、管理并运行穿戴端能力。",
    tags: "ANDROID / KOTLIN",
    href: "https://github.com/Shellplusplus/Shellplusplus",
  },
];

function OpenSourceMark() {
  return <span className="network-mark" aria-hidden="true"><i></i><b></b><em></em></span>;
}

function WearableMark() {
  return <span className="wearable-mark" aria-hidden="true"><i></i><b></b></span>;
}

function BrowserMark() {
  return <span className="browser-mark" aria-hidden="true"><i>&lt;/&gt;</i></span>;
}

export default function Home() {
  return (
    <main className="page" id="top">
      <SlashIntro />
      <section className="poster shell" aria-labelledby="hero-title">
        <div className="poster-title">
          <h1 id="hero-title">DEFATE STAR</h1>
          <p className="slogan">如鲸向海，似鸟投林</p>
        </div>

        <div className="poster-side">
          <div className="trait-row"><span><b></b>一名高中生</span><OpenSourceMark /></div>
          <div className="trait-row"><span><b></b>爱好是编点有用程序玩玩</span><WearableMark /></div>
          <div className="trait-row"><span><b></b>膜拜前端大佬😭</span><BrowserMark /></div>
        </div>

        <div className="poster-bottom">
          <div className="code-block" aria-label="代码">&lt;/&gt;<i></i></div>
          <div className="code-lines" aria-hidden="true"><i></i><span></span><span></span><span></span><span></span><span></span></div>
          <div className="signal-field" aria-hidden="true"><span></span><span></span><span></span><i></i><i></i><i></i><i></i><i></i></div>
          <div className="blue-field" aria-hidden="true"><i>PORTFOLIO / 2026</i><span>Hello World</span></div>
        </div>
      </section>

      <header className="masthead shell">
        <a className="wordmark" href="#top">DEFATE<span>STAR</span></a>
        <nav aria-label="主导航">
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </nav>
        <a className="github-link" href="https://github.com/DefateStar" target="_blank" rel="noreferrer">GITHUB ↗</a>
      </header>

      <section className="intro shell" id="about">
        <div className="section-id"><span>01</span> ABOUT</div>
        <h2>我是 DefateStar。</h2>
        <p>喜欢开源、穿戴设备和 Web。现在主要参与 Shell++，负责网站、文档与发布维护。</p>
        <a href="#projects">看看项目 ↓</a>
      </section>

      <section className="projects shell" id="projects" aria-labelledby="projects-title">
        <div className="section-head">
          <div className="section-id"><span>02</span> PROJECTS</div>
          <h2 id="projects-title">正在维护的项目</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <a href={project.href} target="_blank" rel="noreferrer" className="project-row" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div><small>{project.tags}</small><h3>{project.title}</h3></div>
              <p>{project.description}</p>
              <b>↗</b>
            </a>
          ))}
          <div className="project-row project-row-pending">
            <span className="project-number">03</span>
            <div><small>COMING SOON</small><h3>暂未公开</h3></div>
            <p>新的项目正在准备中，敬请期待。</p>
            <b aria-hidden="true">—</b>
          </div>
        </div>
      </section>

      <section className="now shell">
        <div className="section-id"><span>03</span> NOW</div>
        <div><small>WEB</small><strong>构建官网</strong></div>
        <div><small>DOCS</small><strong>维护文档</strong></div>
        <div><small>SHIP</small><strong>整理发布</strong></div>
      </section>

      <section className="contact shell" id="contact">
        <div className="contact-copy">
          <p>LET&apos;S TALK</p>
          <h2>有想法，<br />一起做出来。</h2>
          <div className="contact-links">
            <a href="https://github.com/DefateStar" target="_blank" rel="noreferrer">GitHub 主页 ↗</a>
          </div>
        </div>
        <aside className="contact-email" aria-label="邮箱联系方式">
          <span>DIRECT CONTACT / 04</span>
          <div>
            <small>EMAIL ADDRESS</small>
            <a href="mailto:DefateStar@163.com">DefateStar@163.com ↗</a>
          </div>
        </aside>
      </section>

      <footer className="footer shell">
        <strong>DEFATESTAR</strong>
        <span>BUILD CLEARLY. SHARE OPENLY.</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
