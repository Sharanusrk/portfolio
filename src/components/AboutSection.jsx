import { FaArrowUpRightFromSquare, FaGraduationCap, FaLocationDot } from "react-icons/fa6";

const highlights = [
  { number: "01", title: "Product minded", detail: "I enjoy taking an idea from a clear user problem through to a working, deployed product." },
  { number: "02", title: "Full stack", detail: "From responsive interfaces and REST APIs to authentication, data, and deployment." },
  { number: "03", title: "Always learning", detail: "Currently growing my skills in AI, system design, and reliable software delivery." },
];

export default function AboutSection() {
  return <section className="about-section section-wrap" id="about">
    <div className="section-heading"><span className="section-kicker">A little about me</span><h2>Curious by nature.<br /><em>Builder by choice.</em></h2></div>
    <div className="about-content">
      <div className="about-bio">
        <p>I&apos;m a full stack developer and MCA student at Sapthagiri NPS University. I like building practical web products that connect thoughtful interfaces with dependable backends.</p>
        <p>Recently, I&apos;ve been working on trip planning and campus community tools, with a focus on maps, authentication, APIs, and database-backed workflows.</p>
        <div className="about-facts"><span><FaGraduationCap /> MCA, 2025–2027</span><span><FaLocationDot /> Bengaluru, India</span></div>
        <a className="text-link" href="https://github.com/sharanusrk" target="_blank" rel="noreferrer">More on GitHub <FaArrowUpRightFromSquare /></a>
      </div>
      <div className="highlight-list">{highlights.map((item) => <article className="highlight" key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div><span className="highlight-arrow">↗</span></article>)}</div>
    </div>
    <div className="education-strip"><span>Education</span><strong>Master of Computer Applications</strong><span>Sapthagiri NPS University · 2025–2027 (pursuing)</span><i></i><strong>Bachelor of Computer Applications</strong><span>Sharnbasva University · 2022–2025 · CGPA 8.63</span></div>
    <div className="experience-strip"><span className="section-kicker">Experience & learning</span><div><strong>Web Development Trainee · Internshala</strong><p>Built responsive React interfaces, integrated REST APIs, and tested endpoints with Postman.</p></div><div className="cert-list"><span>Web Development · Internshala</span><span>Communication & Professional Development · JoshTalks</span></div></div>
  </section>;
}
