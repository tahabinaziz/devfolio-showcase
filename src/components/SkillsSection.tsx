import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 75 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "PostgreSQL", level: 85 },
      { name: "REST / GraphQL", level: 90 },
      { name: "Docker", level: 78 },
    ],
  },
  {
    title: "Tools & Other",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "CI/CD", level: 80 },
      { name: "AWS / Vercel", level: 78 },
      { name: "Figma", level: 70 },
      { name: "Testing (Jest / Cypress)", level: 82 },
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="font-mono text-primary text-sm mb-2">{"// what I work with"}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Technical Skills</h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {skillCategories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={item}
            className="bg-card rounded-xl p-6 border border-border card-elevated"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6 font-mono">{cat.title}</h3>
            <div className="space-y-4">
              {cat.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full rounded-full"
                      style={{ backgroundImage: "var(--gradient-primary)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
