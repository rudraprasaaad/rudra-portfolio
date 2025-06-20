import { motion } from "framer-motion";
import { Code2, Database, Globe, Server } from "lucide-react";

const About = () => {
  const fadeInUpDelayed = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, margin: "-120px" },
  };

  const skills = [
    { name: "React & Next.js", icon: Code2, category: "Frontend" },
    { name: "Node.js & Python", icon: Server, category: "Backend" },
    { name: "PostgreSQL & MongoDB", icon: Database, category: "Database" },
    { name: "AWS & Docker", icon: Globe, category: "Cloud" },
  ];

  const categories = {
    Frontend: { color: "blue", logo: "⚛️" },
    Backend: { color: "slate", logo: "🔧" },
    Database: { color: "warm", logo: "🗄️" },
    Cloud: { color: "slate", logo: "☁️" },
  };

  return (
    <section
      id="about"
      className="py-20 px-8 lg:px-16 relative border-t border-minimal-border-subtle/50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div className="space-y-16">
          <motion.div className="text-center space-y-8" {...fadeInUpDelayed}>
            <motion.div className="space-y-6">
              <motion.div
                className="inline-block w-2 h-2 bg-minimal-slate rounded-full mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight">
                <span className="text-minimal-slate">About</span>
              </h2>
            </motion.div>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              className="space-y-8 max-w-3xl mx-auto"
              {...fadeInUpDelayed}
            >
              <p className="text-xl text-minimal-text-secondary leading-relaxed font-light text-center tracking-wide">
                Full-stack developer focused on building scalable applications
                with modern technologies.
              </p>

              <div className="space-y-8">
                <h3 className="text-lg font-light text-minimal-text-primary text-center tracking-wide">
                  Tech Stack
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    const category =
                      categories[skill.category as keyof typeof categories];
                    const accentColor = category.color;

                    return (
                      <motion.div
                        key={skill.name}
                        className={`group relative p-4 bg-gradient-to-br from-minimal-surface-soft/50 to-minimal-${accentColor}/5 rounded-xl border border-minimal-border-subtle/50 hover:border-minimal-${accentColor}/30 transition-all duration-300 backdrop-blur-sm`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -2, scale: 1.02 }}
                      >
                        <div className="flex items-center gap-3">
                          <motion.div
                            className={`p-2 rounded-lg bg-minimal-${accentColor}/10 border border-minimal-${accentColor}/20`}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <IconComponent
                              className={`w-4 h-4 text-minimal-${accentColor}`}
                            />
                          </motion.div>
                          <span className="text-sm text-minimal-text-secondary group-hover:text-minimal-text-primary transition-colors duration-300 font-light tracking-wide">
                            {skill.name}
                          </span>
                          <div className="ml-auto">
                            <span className="text-xs">{category.logo}</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
