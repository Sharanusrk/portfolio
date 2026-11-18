import { FaCode, FaDatabase, FaToolbox } from "react-icons/fa6";
import { SiReact, SiNextdotjs, SiTailwindcss, SiLeaflet, SiFastapi, SiNodedotjs, SiPostgresql, SiSupabase, SiTypescript, SiPython, SiJavascript, SiVercel, SiGit, SiPostman } from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const categories = [
  { title: "Frontend", icon: SiReact, items: [["React", SiReact], ["Next.js", SiNextdotjs], ["TypeScript", SiTypescript], ["JavaScript", SiJavascript], ["Tailwind CSS", SiTailwindcss], ["Leaflet", SiLeaflet]] },
  { title: "Backend & data", icon: FaDatabase, items: [["FastAPI", SiFastapi], ["Node.js", SiNodedotjs], ["PostgreSQL", SiPostgresql], ["Supabase", SiSupabase], ["Python", SiPython], ["Java", FaJava]] },
  { title: "Tools & delivery", icon: FaToolbox, items: [["Git & GitHub", SiGit], ["Vercel", SiVercel], ["Postman", SiPostman], ["REST APIs", FaCode]] },
];

export default function Skills() {
  return <section className="section skills-section original-section" id="skills"><div className="section-heading"><span className="section-kicker">04 / What I use</span><h2>Skills & <em>technologies</em></h2><p>A practical toolkit I use to design, build, and ship web applications.</p></div><div className="skills-grid">{categories.map(({ title, icon: Icon, items }) => <article className="skill-category" key={title}><div className="skill-category-heading"><Icon /><h3>{title}</h3></div><div className="skill-items">{items.map(([name, SkillIcon]) => <span className="skill-item" key={name}><SkillIcon />{name}</span>)}</div></article>)}</div></section>;
}
