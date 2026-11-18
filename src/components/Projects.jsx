import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const projects = [
  { number: "01", name: "RouteSathi AI", category: "Travel · Full stack", featured: true, description: "An India trip planner that builds itineraries around destination, budget, trip length, and interests. Includes interactive maps, saved trips, safety insights, authentication, and PDF export.", stack: ["React", "FastAPI", "PostgreSQL", "Leaflet"], live: "https://routesathi.vercel.app", code: "https://github.com/Sharanusrk/RouteSathi-AI", visual: "route" },
  { number: "02", name: "Foundly", category: "Campus · Full stack", description: "A campus lost and found board where students can browse posts, share item details and photos, and contact the person who posted an item.", stack: ["Next.js", "TypeScript", "Clerk", "Supabase"], live: "https://foundly-campus.vercel.app/", code: null, visual: "foundly" },
];

export default function Projects() {
  return <section className="projects-section section-wrap" id="projects"><div className="section-heading section-heading-row"><div><span className="section-kicker">Selected work</span><h2>Things I&apos;ve <em>built.</em></h2></div><a className="text-link" href="https://github.com/sharanusrk?tab=repositories" target="_blank" rel="noreferrer">All repositories <FaArrowUpRightFromSquare /></a></div>
    <div className="project-grid">{projects.map((project) => <article className={`project-card${project.featured ? " project-featured" : ""}`} key={project.name}>
      <div className={`project-art ${project.visual}`} aria-hidden="true"><div className="art-window"><div className="art-topbar"><span></span><span></span><span></span></div>{project.visual === "route" ? <><div className="map-grid"></div><div className="map-route"></div><div className="map-pin pin-one">●</div><div className="map-pin pin-two">●</div><div className="map-label">Plan your next route</div></> : <><div className="foundly-title">foundly<span>.</span></div><div className="foundly-tabs">Lost items　 Found items</div><div className="foundly-items"><i></i><i></i><i></i></div><div className="foundly-cta">+ Post an item</div></>}</div><span className="project-number">{project.number}</span></div>
      <div className="project-info"><div className="project-meta"><span>{project.category}</span><span className="project-status"><i /> Live</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="project-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.live} target="_blank" rel="noreferrer">Live project <FaArrowUpRightFromSquare /></a>{project.code && <a href={project.code} target="_blank" rel="noreferrer"><FaGithub /> Source code</a>}</div></div>
    </article>)}</div>
  </section>;
}
