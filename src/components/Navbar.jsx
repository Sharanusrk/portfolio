import { useState } from "react";

const links = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Contact", "#contact"]];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="site-header"><nav className="nav-shell" aria-label="Main navigation">
    <a className="wordmark" href="#home" aria-label="Sharanabasappa, home">sharan<span>.</span></a>
    <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><span></span><span></span></button>
    <div className={`nav-links${menuOpen ? " is-open" : ""}`}>
      {links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
      <a className="nav-cta" href="mailto:sharankumusagi@gmail.com">Let&apos;s talk <span aria-hidden="true">↗</span></a>
    </div>
  </nav></header>;
}
