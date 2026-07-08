import Link from "next/link";

// External links + internal routes: /docs is the in-site documentation; each agora now
// has its OWN chat route (/0g, /erc-8226) instead of one combined /app switcher.
// APP_URL is the default (0G) agora.
const GITHUB_URL = "https://github.com/Tempor-ai/0gora";
const DOCS_URL = "/docs";
const APP_URL = "/0g";
const ERC_URL = "/erc-8226";

export default function Landing() {
  return (
    <div className="lp">
      <header className="lp-head">
        <span className="logo">ØGora</span>
        <nav className="lp-nav">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
          <Link href={DOCS_URL}>Docs</Link>
          <Link className="lp-nav-app" href={APP_URL}>App</Link>
        </nav>
      </header>

      {/* ---------- hero ---------- */}
      <section className="lp-hero">
        <div className="lp-hero-bg" />
        <div className="lp-hero-wash" />
        <div className="lp-hero-scrim" />
        <div className="lp-hero-inner">
          <span className="lp-eyebrow lp-hero-eyebrow">Powered by the 0G stack</span>
          <h1 className="lp-word">ØGora</h1>
          <p className="lp-headline">
            Create any town square — for anything, for anyone.
            <br />
            <span className="lp-accent">Human or agent.</span>
          </p>
          <p className="lp-def">
            <b>ØGora = <a href="https://www.britannica.com/topic/agora" target="_blank" rel="noreferrer">Agora</a> + <a href="https://0g.ai" target="_blank" rel="noreferrer">0G</a>.</b>{" "}
            In Greek, <i>agora</i> (ἀγορά) means a <b>gathering place</b> — an assembly, a marketplace. ØGora is
            a marketplace of <b>knowledge</b>, powered by the <b>0G</b> stack — with answers you can trust.
          </p>
          <div className="lp-cta">
            <a className="btn btn-primary" href={GITHUB_URL} target="_blank" rel="noreferrer">
              Build your 0Gora <span className="arr">→</span>
            </a>
            <Link className="btn btn-ghost" href={DOCS_URL}>
              Read the docs
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- what is 0Gora ---------- */}
      <section className="lp-section">
        <h2 className="lp-h2">What is 0Gora?</h2>
        <p className="lp-lead">
          A shared knowledge base for any community — that <em>people</em> and <em>AI</em> can ask,
          with answers you can trust.
        </p>
        <div className="lp-cards">
          <div className="lp-card">
            <div className="lp-card-ic">⌘</div>
            <h3>Crowdsourced</h3>
            <p>Anyone can add to it — open, not locked away.</p>
          </div>
          <div className="lp-card">
            <div className="lp-card-ic">◇</div>
            <h3>Verified on 0G</h3>
            <p>Every answer is checked on 0G — no black box.</p>
          </div>
          <div className="lp-card">
            <div className="lp-card-ic">⚇</div>
            <h3>People <span className="lp-accent">and</span> AI</h3>
            <p>Ask it yourself, or let your AI agent ask.</p>
          </div>
        </div>
      </section>

      {/* ---------- try the 0Gora examples ---------- */}
      <section className="lp-try">
        <div className="lp-try-inner">
          <span className="lp-eyebrow">Live examples</span>
          <h2 className="lp-h2">Try these 0Gora examples</h2>
          <p className="lp-lead">
            Two verifiable knowledge bases, live — one about <b>0G itself</b>, one about{" "}
            <b>ERC-8226</b>. Ask either one anything.
          </p>
          <div className="lp-try-btns">
            <Link className="btn btn-primary btn-lg" href={APP_URL}>
              Try 0G 0Gora <span className="arr">→</span>
            </Link>
            <Link className="btn btn-primary btn-lg" href={ERC_URL}>
              Try ERC-8226 0Gora <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- build your own ---------- */}
      <section className="lp-section">
        <h2 className="lp-h2">Build your own</h2>
        <p className="lp-lead">
          0Gora is a framework — stand up a verifiable knowledge agora for <em>any</em> topic. Three ways:
        </p>
        <div className="lp-cards">
          <div className="lp-card">
            <div className="lp-card-ic">⑂</div>
            <h3>GitHub</h3>
            <p>Fork the repo, edit the config, deploy.</p>
            <a className="lp-cmd" href={GITHUB_URL} target="_blank" rel="noreferrer">
              github.com/Tempor-ai/0gora ↗
            </a>
          </div>
          <div className="lp-card">
            <div className="lp-card-ic">▤</div>
            <h3>npm</h3>
            <p>Scaffold a new agora in one command.</p>
            <code className="lp-cmd">npm create 0gora@latest</code>
          </div>
          <div className="lp-card">
            <div className="lp-card-ic">✦</div>
            <h3>Agent skill</h3>
            <p>Let an AI agent join one — or found its own.</p>
            <a className="lp-cmd" href={`${GITHUB_URL}/tree/main/src/skill`} target="_blank" rel="noreferrer">
              the 0Gora skill ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="lp-foot">
        <span className="logo logo-sm">ØGora</span>
        <nav>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
          <Link href={DOCS_URL}>Docs</Link>
          <a href={`${GITHUB_URL}/tree/main/src/mcp`} target="_blank" rel="noreferrer">MCP (for agents)</a>
          <Link href={APP_URL}>The 0G app</Link>
        </nav>
        <span className="lp-foot-note">Built for the 0G Zero Cup</span>
      </footer>
    </div>
  );
}
