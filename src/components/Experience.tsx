import { motion } from "motion/react";
import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  const fadeInUpDelayed = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, margin: "-120px" },
  };

  const experiences = [
    {
      company: "Team Shiksha",
      position: "Open Source Contributor",
      duration: "2025 - Present",
    },
    {
      company: "TeamUnibrains",
      position: "Full Stack Engineer Intern",
      duration: "Jan 2025 - May 2025",
      description:
        "Built and maintained multiple client projects using modern web technologies.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-8 lg:px-16 relative border-t border-minimal-border-subtle/50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div className="space-y-16">
          {/* Section header */}
          {/* @ts-expect-error: framer-motion props type mismatch with React 18, safe to ignore */}
          <motion.div className="text-center space-y-8" {...fadeInUpDelayed}>
            <motion.div className="space-y-6">
              <motion.div
                className="inline-block w-2 h-2 bg-minimal-blue rounded-full mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight">
                <span className="text-minimal-blue">Experience</span>
              </h2>
            </motion.div>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="group relative p-6 bg-gradient-to-br from-minimal-surface-soft/50 to-minimal-blue/5 rounded-xl border border-minimal-border-subtle/50 hover:border-minimal-blue/30 transition-all duration-300 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="p-2 rounded-lg bg-minimal-blue/10 border border-minimal-blue/20"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Building2 className="w-4 h-4 text-minimal-blue" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-medium text-minimal-text-primary group-hover:text-minimal-blue transition-colors duration-300">
                          {exp.position}
                        </h3>
                        <p className="text-sm text-minimal-text-muted font-light">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-minimal-text-secondary leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-minimal-text-muted">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
