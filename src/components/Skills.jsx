import { FaCode, FaDatabase, FaJava, FaToolbox } from "react-icons/fa6";
import { SiReact, SiNextdotjs, SiTailwindcss, SiLeaflet, SiFastapi, SiNodedotjs, SiPostgresql, SiSupabase, SiTypescript, SiPython, SiJavascript, SiVercel, SiGit, SiPostman } from "react-icons/si";

const groups = [
  { title: "Frontend", icon: SiReact, skills: [["React", SiReact], ["Next.js", SiNextdotjs], ["TypeScript", SiTypescript], ["JavaScript", SiJavascript], ["Tailwind CSS", SiTailwindcss], ["Leaflet", SiLeaflet]] },
  { title: "Backend & data", icon: FaDatabase, skills: [["FastAPI", SiFastapi], ["Node.js", SiNodedotjs], ["PostgreSQL", SiPostgresql], ["Supabase", SiSupabase], ["Python", SiPython], ["Java", FaJava]] },
  { title: "Tools & delivery", icon: FaToolbox, skills: [["Git & GitHub", SiGit], ["Vercel", SiVercel], ["Postman", SiPostman], ["REST APIs", FaCode]] },
];

export default function Skills() {
  return <section className="skills-section section-wrap" id="skills"><div className="section-heading section-heading-row"><div><span className="section-kicker">Tools I work with</span><h2>My <em>toolkit.</em></h2></div><p>A growing set of technologies I use to design, build, and ship full stack products.</p></div>
    <div className="skill-groups">{groups.map((group) => <article className="skill-group" key={group.title}><div className="skill-group-title"><group.icon /><h3>{group.title}</h3></div><div className="skill-list">{group.skills.map(([name, Icon]) => <span className="skill-chip" key={name}><Icon />{name}</span>)}</div></article>)}</div>
  </section>;
}
