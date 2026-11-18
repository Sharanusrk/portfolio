import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return <footer className="site-footer"><div className="footer-inner"><a className="footer-brand" href="#home">Sharanabasappa<span>.</span></a><p>Thoughtful web experiences, built with care.</p><div className="footer-socials"><a href="https://github.com/sharanusrk" aria-label="GitHub"><FaGithub /></a><a href="https://linkedin.com/in/sharanu-kumasgi" aria-label="LinkedIn"><FaLinkedin /></a><a href="https://instagram.com/sharanu_srk" aria-label="Instagram"><FaInstagram /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Sharanabasappa Kumusagi</span><a href="#home">Back to top ↑</a></div></footer>;
}
