import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";

const milestones = [
  { year: "2025–2027", title: "Master of Computer Applications", place: "Sapthagiri NPS University", text: "Currently pursuing my MCA while building full stack and AI-focused projects.", icon: FaGraduationCap },
  { year: "2022–2025", title: "Bachelor of Computer Applications", place: "Sharnbasva University", text: "Completed my BCA with a CGPA of 8.63.", icon: FaGraduationCap },
  { year: "Experience", title: "Web Development Trainee", place: "Internshala", text: "Built responsive React interfaces, integrated REST APIs, and tested endpoints with Postman.", icon: FaBriefcase },
];

export default function Timeline() {
  return <section className="section journey-section original-section" id="journey"><div className="section-heading"><span className="section-kicker">02 / The path so far</span><h2>My <em>journey</em></h2><p>Education and hands-on experience that shape the way I build.</p></div>
    <div className="timeline">{milestones.map(({ year, title, place, text, icon: Icon }, index) => <article className="timeline-item" key={title}><div className="timeline-rail"><span className="timeline-dot"><Icon /></span>{index < milestones.length - 1 && <i />}</div><div className="timeline-content"><span className="timeline-year">{year}</span><h3>{title}</h3><strong>{place}</strong><p>{text}</p></div></article>)}</div>
  </section>;
}
