import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaYoutube } from "react-icons/fa";

const projects = [
  {
    title: "APNA PG",
    description:
      "APNA PG is a Website where you find a pg in your locality .",
    tags: ["HTML", "CSS", "JS", "Bootstrap"],
    
    demo: "https://apnapg1.netlify.app/",
    image: "pg.png",
  },
  {
    title: "SHARNBASVA UNIVERSITY",
    description:
      "Sharnbasva University is a Website where our college students check their fees details.",
    tags: ["HTML", "JS", "CSS", "Express.js"],
    
    demo: "https://sukbca.netlify.app",
    image: "sbr.png",
  },

  {
    title: "WEATHER APP",
    description:
      "Get a real-time weather forecast for any city in the world.",
    tags: ["HTML", "CSS", "JS", "React"],
    
    demo: "https://srkweather.netlify.app/",
    image: "weather.png",
  },
  {
    title: "TRAVEL-WITH-SHARAN",
    description:
      "A responsive web application where you can search for places and trip your destination.",
    tags: ["JavaScript", "HTML", "CSS"],
    
    demo: "https://aisrk.vercel.app/",
    image: "food1.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 backdrop-blur-0">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A showcase of my technical projects, demonstrating my expertise in
            various technologies and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-tertiary rounded-lg overflow-hidden"
            >
             <div className="relative p-8 bg-black-200">
  {project.image && (
    <img
      src={project.image}
      alt={`${project.title} Preview`}
      className="w-full h-full object-cover rounded-lg"
    />
  )}
</div>



              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-black-100 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                  >
                    
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
