import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "5micron GmbH, DE",
    duration: "Oct 2023 – Present",
    description: "Developed and deployed scalable full-stack features using Next.js, React, and TypeScript. Designed and implemented RESTful APIs and backend services using Node.js/Python.",
  },
  {
    role: "Frontend Developer (Internship)",
    company: "KiVVON Media GmbH, DE",
    duration: "March 2023 – August 2023",
    description: "Developed and maintained responsive web applications with Angular, JavaScript, and CSS, focused on clean architecture and excellent user experience. Built Node.js backend services with RESTful APIs and PostgreSQL for internal enterprise applications, ensuring security and data integrity.",
  },
  {
    role: "Full Stack Developer (Working Student)",
    company: "Global Tech Solutions GmbH, DE",
    duration: "Mar 2019 – May 2020",
    description: "Built and maintained responsive web applications using Next.js/React.js, JavaScript, and CSS, focusing on scalability and excellent end-user experience. Developed C# ASP.NET/.NET Core, EF backend services with RESTful APIs and PostgreSQL databases for internal enterprise applications, ensuring data integrity and security.",
  },
  {
    role: "Backend Software Developer",
    company: "LinkIT (DKI LLC), PK",
    duration: "Sep 2018 – Feb 2022",
    description: "Developed and maintained responsive web applications with Angular, JavaScript, and CSS, focused on clean architecture and excellent user experience. Built and maintained ASP.NET / .NET backend services, implementing business logic, RESTful APIs, and data access layers for internal enterprise applications.",
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
