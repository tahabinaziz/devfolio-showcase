import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Home For Me",
    description: "Full stack app with search for  apartments, users and an admin dashboard for commercial properties.",
    techs: ["React", "TypeScript", "Node.js", "Express", "MYSQL", "ORM", "Sequelize", "Websockets", "Tailwind"],
    github: "https://github.com/tahabinaziz/HomeForme-Frontend",
    // live: "https://example.com",
  },
  {
    title: "Dorat Al-Khaleej",
    description: "Dorat Al-Khaleej is basically school management system. It consist multiple roles like Owner, Admin, Staff, Student, Parent. It has different modules timetable, biometric attendance system, continuous-assessment, student-progress-tracking.",
    techs: ["Next.js", "React", "ASP.NET", ".NET Core", "C#", "Entity Framework", "SQL", "Bootstrap"],
    // github: "https://github.com",
    live: "https://dak.schoolsmart.org.uk/",
  },
  {
    title: "ORITECH",
    description: "It's a portal for engineers who upload the list of oil & gas measurement and analyze the result on the basis of measurement. This portal is based on file uploads and downloads feature with graphical presentations.",
    techs: ["HTML", "CSS", "PHP", "Bootstrap", "MySQL"],
    // github: "https://github.com",
    live: "https://www.ori-techoils.com/",
  },
  {
    title: "THETA Analytics Dashboard",
    description: "Real-time dashboard (React + WebSockets) visualizing sensor data (temperature, humidity, air quality) for smart-building facility management.",
    techs: ["Next.js", "React", "D3.js", "Node.js", "PostgreSQL", "Websockets", "Tailwind", "Tanstack Query", "GridStack.js"],
    // github: "https://github.com",
    live: "https://rci-dashboard.5micron.berlin/login",
  },
  {
    title: "Sensical Dashboard",
    description: "Scalable Node.js/Bun.js backend with PostgreSQL data pipelines, secure REST API, alerting logic, and analytics — deployed on AWS EC2.",
    techs: ["Solid.js", "Node.js", "Express", "Bun.js", "Typescript", "PostgreSQL", "Websockets", "Docker", "Kubernetes", "Apache E-chart.js", "Nginx", "EC2"],
    // github: "https://github.com",
    live: "https://theta.sensical.de/login",
  },
  {
    title: "PACC Portal – Academic Administration System",
    description: "Backend system for student admissions, course management, and fee handling via RESTful APIs, with role- based access control and server - side validation.",
    techs: ["HTML", "CSS", "TypeScript", "Node.js", "Bootstrap", "MySQL", "Express", "Sequelize"],
    // github: "https://github.com",
    live: "https://pacc.edu.pk/prn/",
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
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors ${filter === tech
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
