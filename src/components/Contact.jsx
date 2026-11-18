import { FaEnvelope, FaGithub, FaLinkedin, FaLocationDot, FaPhone } from "react-icons/fa6";

const contacts = [
  [FaEnvelope, "Email", "sharankumsagi@gmail.com", "mailto:sharankumsagi@gmail.com"],
  [FaPhone, "Phone", "+91 9353541195", "tel:+919353541195"],
  [FaLocationDot, "Location", "Bengaluru, India", null],
  [FaLinkedin, "LinkedIn", "Connect with me", "https://linkedin.com/in/sharanu-kumasgi"],
  [FaGithub, "GitHub", "Browse my repositories", "https://github.com/sharanusrk"],
];

export default function Contact() {
  return <section className="section contact-section original-section" id="contact"><div className="contact-panel"><div className="contact-copy"><span className="section-kicker">06 / Get in touch</span><h2>Let&apos;s build<br /><em>something good.</em></h2><p>Open to internships, collaborations, and interesting product ideas. I&apos;d be glad to hear from you.</p><a className="button button-primary" href="mailto:sharankumsagi@gmail.com">Send me an email <span>↗</span></a></div><div className="contact-list">{contacts.map(([Icon, label, value, href]) => <div className="contact-row" key={label}><Icon /><div><span>{label}</span>{href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{value}</a> : <strong>{value}</strong>}</div><span className="contact-arrow">↗</span></div>)}</div></div></section>;
}
