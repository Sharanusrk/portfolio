import { FaArrowUpRightFromSquare, FaCode, FaLayerGroup, FaServer } from "react-icons/fa6";

const specialties = [
  { icon: FaLayerGroup, title: "Full stack development", text: "Connecting clear, responsive interfaces with reliable application logic and data." },
  { icon: FaCode, title: "Frontend engineering", text: "Building accessible, responsive experiences with React, Next.js, and TypeScript." },
  { icon: FaServer, title: "APIs & data", text: "Designing REST APIs and database-backed workflows for real product needs." },
];

export default function AboutSection() {
  return <section className="section about-section original-section" id="about"><div className="section-heading"><span className="section-kicker">01 / About</span><h2>About <em>me</em></h2><p>A little context about what I do and how I like to work.</p></div>
    <div className="about-layout"><div className="about-photo"><img src={`${import.meta.env.BASE_URL}sharanabasappa-kumusagi.jpeg`} alt="Sharanabasappa Kumusagi" /><span className="photo-tag">Bengaluru, India</span></div><div className="about-copy"><p className="about-lead">I&apos;m a full stack developer and MCA student at Sapthagiri NPS University. I enjoy turning practical problems into clean, dependable web products.</p><p>Recently, I&apos;ve worked on travel planning and campus community tools, with a focus on maps, authentication, REST APIs, and database-backed workflows. I&apos;m currently strengthening my skills in AI, software design, and delivery.</p><div className="about-facts"><span><b>Education</b> MCA · 2025–2027</span><span><b>Location</b> Bengaluru, Karnataka</span></div><a className="inline-link" href="https://github.com/sharanusrk" target="_blank" rel="noreferrer">Explore my GitHub <FaArrowUpRightFromSquare /></a></div></div>
    <div className="specialty-grid">{specialties.map(({ icon: Icon, title, text }, index) => <article className="specialty-card" key={title}><span className="specialty-number">0{index + 1}</span><Icon className="specialty-icon" /><h3>{title}</h3><p>{text}</p></article>)}</div>
  </section>;
}
