import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce app with real-time inventory, Stripe payments, and an admin dashboard.",
    techs: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "Kanban-style project management tool with drag-and-drop, real-time collaboration, and analytics.",
    techs: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "AI Chat Interface",
    description: "Chat application powered by OpenAI with streaming responses, conversation history, and code highlighting.",
    techs: ["React", "Python", "OpenAI", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization dashboard with interactive charts, filters, and CSV export.",
    techs: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Social Media API",
    description: "RESTful API for a social media platform with auth, rate limiting, and media uploads.",
    techs: ["Node.js", "Express", "PostgreSQL", "Docker"],
    github: "https://github.com",
    live: "",
  },
  {
    title: "Portfolio Generator",
    description: "CLI tool that generates beautiful portfolio sites from a JSON config file.",
    techs: ["TypeScript", "Node.js", "Tailwind", "CLI"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

const allTechs = Array.from(new Set(projects.flatMap((p) => p.techs))).sort();

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.techs.includes(filter));

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// things I've built"}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {["All", ...allTechs].map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors ${
                filter === tech
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-card rounded-xl border border-border p-6 card-elevated hover:border-primary/40 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs font-mono rounded bg-secondary text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
