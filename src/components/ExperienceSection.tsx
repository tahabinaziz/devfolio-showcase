import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "Jan 2022 – Present",
    description: "Led frontend architecture for a SaaS platform serving 50K+ users. Implemented micro-frontend strategy and improved Core Web Vitals by 40%.",
  },
  {
    role: "Full Stack Developer",
    company: "StartupXYZ",
    duration: "Jun 2020 – Dec 2021",
    description: "Built and maintained full-stack features using React, Node.js, and PostgreSQL. Shipped real-time collaboration features and payment integrations.",
  },
  {
    role: "Frontend Developer",
    company: "DigitalAgency Co.",
    duration: "Mar 2019 – May 2020",
    description: "Developed responsive web applications for enterprise clients. Established component library and design system used across 10+ projects.",
  },
  {
    role: "Junior Developer (Intern)",
    company: "WebDev Studio",
    duration: "Sep 2018 – Feb 2019",
    description: "Assisted in building client websites with HTML, CSS, JavaScript. Learned modern frameworks and agile methodologies.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding bg-secondary/30">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="font-mono text-primary text-sm mb-2">{"// where I've worked"}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative md:pl-14"
            >
              {/* Dot */}
              <div className="absolute left-3 top-2 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary hidden md:flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="bg-card rounded-xl p-6 border border-border card-elevated">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                  <span className="text-xs font-mono text-muted-foreground">{exp.duration}</span>
                </div>
                <p className="text-primary font-medium text-sm mb-3 flex items-center gap-2">
                  <Briefcase size={14} /> {exp.company}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
