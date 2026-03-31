import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    type: "degree",
    title: "B.Sc. Computer Science",
    institution: "University of Technology",
    year: "2015 – 2019",
    description: "Graduated with honors. Focused on software engineering, data structures, and algorithms.",
  },
  {
    type: "cert",
    title: "AWS Certified Solutions Architect",
    institution: "Amazon Web Services",
    year: "2023",
    description: "Associate-level certification covering cloud architecture best practices.",
  },
  {
    type: "cert",
    title: "Meta Frontend Developer Certificate",
    institution: "Meta / Coursera",
    year: "2022",
    description: "Professional certificate covering React, testing, and modern frontend practices.",
  },
  {
    type: "cert",
    title: "MongoDB for Node.js Developers",
    institution: "MongoDB University",
    year: "2021",
    description: "Comprehensive course on MongoDB data modeling and Node.js integration.",
  },
];

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="font-mono text-primary text-sm mb-2">{"// learning never stops"}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education & Certifications</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {education.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 border border-border card-elevated"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                {item.type === "degree" ? (
                  <GraduationCap size={18} className="text-primary" />
                ) : (
                  <Award size={18} className="text-primary" />
                )}
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-primary">{item.institution}</p>
              </div>
            </div>
            <p className="text-xs font-mono text-muted-foreground mb-2">{item.year}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
