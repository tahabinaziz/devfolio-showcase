import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import devPhoto from "@/assets/developer-photo.jpg";

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center section-padding pt-24">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          <p className="font-mono text-primary text-sm mb-4">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-2">
            John Developer
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
            I build things for the web<span className="text-primary animate-blink">_</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Full-stack software developer with 5+ years of experience crafting scalable web applications.
            Passionate about clean code, great UX, and turning complex problems into elegant solutions.
          </p>

          <div className="flex items-center gap-4 mb-8">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
            >
              View Work
            </a>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden card-glow border-2 border-primary/20">
              <img src={devPhoto} alt="Developer portrait" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-3 -right-3 w-64 h-64 md:w-80 md:h-80 rounded-2xl border-2 border-primary/30 -z-10" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors hidden md:block"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
