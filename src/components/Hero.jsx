import { FaArrowDown, FaArrowRight } from "react-icons/fa6";

export default function Hero() {
  return <section className="hero original-section" id="home"><div className="hero-grid" />
    <div className="hero-content"><div className="eyebrow"><span className="eyebrow-line" /> Full stack developer <span className="eyebrow-separator">/</span> MCA student</div>
      <h1>Hi, I&apos;m <span>Sharanabasappa</span><br />I build for the <em>web.</em></h1>
      <p className="hero-copy">I&apos;m a Bengaluru-based developer focused on thoughtful, useful web applications. My work spans React, Next.js, FastAPI, and PostgreSQL.</p>
      <div className="hero-actions"><a className="button button-primary" href="#projects">Explore projects <FaArrowRight /></a><a className="button button-outline" href={`${import.meta.env.BASE_URL}Sharanabasappa_Resume_updated.pdf`} target="_blank" rel="noreferrer">Download résumé <span>↗</span></a></div>
      <a className="hero-scroll" href="#about"><span>Scroll to explore</span><FaArrowDown /></a>
    </div><div className="hero-mark" aria-hidden="true"><span>S</span><i /></div>
  </section>;
}
