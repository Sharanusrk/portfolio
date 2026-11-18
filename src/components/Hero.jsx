import { FaArrowDown, FaArrowRight } from "react-icons/fa6";

export default function Hero() {
  return <section className="hero original-section" id="home"><div className="hero-grid" />
    <div className="hero-content"><div className="eyebrow"><span className="eyebrow-line" /> Full stack developer <span className="eyebrow-separator">/</span> MCA student</div>
      <h1>Hi, I&apos;m <span>Sharanabasappa</span><br />I build for the <em>web.</em></h1>
      <p className="hero-copy">I&apos;m a Bengaluru-based developer focused on thoughtful, useful web applications. My work spans React, Next.js, FastAPI, and PostgreSQL.</p>
      <div className="hero-actions"><a className="button button-primary" href="#projects">Explore projects <FaArrowRight /></a><a className="button button-outline" href={`${import.meta.env.BASE_URL}Sharanabasappa_Resume_updated.pdf`} target="_blank" rel="noreferrer">Download résumé <span>↗</span></a></div>
      <a className="hero-scroll" href="#about"><span>Scroll to explore</span><FaArrowDown /></a>
    </div><div className="hero-mark" aria-hidden="true"><svg className="neural-orbit" viewBox="0 0 420 420" fill="none">
      <circle className="orbit-ring" cx="210" cy="210" r="178"/><circle className="orbit-ring orbit-ring-inner" cx="210" cy="210" r="143"/>
      <g className="neural-links"><path d="M210 73 294 117 337 205 294 303 205 347 119 297 76 210 121 119 210 73ZM121 119 205 211 294 117M76 210 205 211 337 205M119 297 205 211 294 303M210 73 205 211 205 347M121 119 294 303M294 117 119 297"/></g>
      <g className="neural-nodes"><circle cx="210" cy="73" r="9"/><circle cx="294" cy="117" r="12"/><circle cx="337" cy="205" r="8"/><circle cx="294" cy="303" r="11"/><circle cx="205" cy="347" r="8"/><circle cx="119" cy="297" r="12"/><circle cx="76" cy="210" r="8"/><circle cx="121" cy="119" r="10"/><circle className="node-core" cx="205" cy="211" r="17"/></g>
      </svg><i /></div>
  </section>;
}
