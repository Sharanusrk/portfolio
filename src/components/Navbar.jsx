import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

const links = [["Home", "#home"], ["About", "#about"], ["Courses", "#courses"], ["Skills", "#skills"], ["Projects", "#projects"], ["Contact", "#contact"]];
const socials = [[FaGithub, "https://github.com/sharanusrk", "GitHub"], [FaLinkedin, "https://linkedin.com/in/sharanu-kumasgi", "LinkedIn"], [FaInstagram, "https://instagram.com/sharanu_srk", "Instagram"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><nav className="nav-shell" aria-label="Main navigation">
    <a href="#home" className="brand"><img src={`${import.meta.env.BASE_URL}sharanabasappa-kumusagi.jpeg`} alt="" /><span>Sharanabasappa<span className="brand-dot">.</span></span></a>
    <button className={`menu-toggle${open ? " active" : ""}`} onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}><span /><span /><span /></button>
    <div className={`nav-links${open ? " is-open" : ""}`}>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<div className="nav-socials">{socials.map(([Icon, href, label]) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon /></a>)}</div></div>
  </nav></header>;
}
