import { FaCheck, FaCertificate } from "react-icons/fa6";

const certifications = [
  { title: "Web Development", provider: "Internshala", detail: "Web development certification" },
  { title: "Communication & Professional Development", provider: "JoshTalks", detail: "Professional development certification" },
];

export default function Courses() {
  return <section className="section courses-section original-section" id="courses"><div className="section-heading"><span className="section-kicker">03 / Continuous learning</span><h2>Courses & <em>certifications</em></h2><p>Formal learning alongside the things I build on my own.</p></div>
    <div className="course-grid">{certifications.map((item, index) => <article className="course-card" key={item.title}><div className="course-icon"><FaCertificate /></div><div className="course-index">0{index + 1}</div><div className="course-provider">{item.provider}</div><h3>{item.title}</h3><p>{item.detail}</p><span className="course-status"><FaCheck /> Completed</span></article>)}</div>
  </section>;
}
