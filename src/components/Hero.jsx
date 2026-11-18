import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return <section className="hero section-wrap" id="home">
    <div className="hero-copy">
      <div className="eyebrow"><span className="status-dot" /> Full stack developer · MCA 2025–27</div>
      <h1>Building useful<br />things for the <em>web.</em></h1>
      <p className="hero-intro">I&apos;m Sharanabasappa Kumusagi, a developer from Bengaluru who builds and ships web applications with React, Next.js, FastAPI, and PostgreSQL.</p>
      <div className="hero-actions">
        <a className="button button-dark" href="#projects">Explore my work <span aria-hidden="true">↘</span></a>
        <a className="button button-light" href="/Sharanabasappa_Resume_updated.pdf" target="_blank" rel="noreferrer">View résumé <span aria-hidden="true">↗</span></a>
      </div>
      <div className="hero-socials" aria-label="Social profiles">
        <a href="https://github.com/sharanusrk" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
        <a href="https://linkedin.com/in/sharanu-kumasgi" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
        <span className="social-divider" /><span>Bengaluru, India</span>
      </div>
    </div>
    <div className="hero-visual">
      <div className="portrait-frame"><img src="/sharanabasappa-kumusagi.jpeg" alt="Sharanabasappa Kumusagi" /></div>
      <div className="portrait-caption"><span>Currently exploring</span><strong>AI · Product engineering · DevOps</strong></div>
      <div className="hero-index">01 <span>/ 04</span></div>
      <div className="hero-orbit" aria-hidden="true">S</div>
    </div>
    <a className="scroll-note" href="#about">Scroll to explore <span>↓</span></a>
  </section>;
}
