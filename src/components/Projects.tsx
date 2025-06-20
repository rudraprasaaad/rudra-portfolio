import { motion } from "framer-motion";
import { Globe, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Projects = () => {
  const fadeInUpDelayed = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, margin: "-120px" },
  };

  const projects = [
    {
      title: "Socially",
      description:
        "Socially is a social media platform designed to connect users through interactive posts, profiles, and real-time chat. It features user authentication, profile customization, likes, comments, and notifications. The platform fosters online engagement by allowing users to share updates, interact with content, and build meaningful connections within a dynamic digital community.",
      tech: ["Next.js", "Postgres", "Clerk", "PrismaORM", "TypeScript"],
      link: "https://socially-zeta-five.vercel.app/",
      status: "Live",
      icon: Globe,
      accent: "slate",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-8 lg:px-16 relative border-t border-minimal-border-subtle/50"
    >
      <div className="max-w-8xl mx-auto">
        <motion.div className="space-y-20">
          {/* @ts-expect-error: framer-motion props type mismatch with React 18, safe to ignore */}
          <motion.div className="text-center space-y-8" {...fadeInUpDelayed}>
            <motion.div className="space-y-6">
              <motion.div
                className="inline-block w-2 h-2 bg-minimal-warm rounded-full mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight">
                <span className="text-minimal-warm">Featured Projects</span>
              </h2>
            </motion.div>
            <p className="text-lg text-minimal-text-muted max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
              A showcase of full-stack applications built with modern
              architecture and industry best practices.
            </p>
          </motion.div>
          <div
            className={`grid gap-8 ${
              projects.length === 1
                ? "grid-cols-1 justify-center max-w-md mx-auto"
                : "md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              const accentColor = project.accent;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group h-full"
                >
                  <Card
                    className={`bg-minimal-surface-soft/50 border-minimal-border-subtle hover:border-minimal-${accentColor}/30 transition-all duration-500 h-full backdrop-blur-sm hover:bg-minimal-surface-soft/80 rounded-2xl overflow-hidden`}
                  >
                    <CardContent className="p-8 space-y-6 h-full flex flex-col">
                      <div className="flex items-start justify-between">
                        <motion.div
                          className={`p-3 rounded-xl bg-minimal-${accentColor}-soft/50 border border-minimal-${accentColor}/20`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent
                            className={`w-6 h-6 text-minimal-${accentColor}`}
                          />
                        </motion.div>
                        <span
                          className={`text-xs px-4 py-2 bg-minimal-${accentColor}-soft/30 text-minimal-${accentColor} rounded-full border border-minimal-${accentColor}/20 font-medium tracking-wide`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <div className="space-y-4 flex-grow">
                        <h3
                          className={`text-xl font-light text-minimal-text-primary group-hover:text-minimal-${accentColor} transition-colors duration-300 tracking-wide`}
                        >
                          {project.title}
                        </h3>
                        <p className="text-minimal-text-muted leading-relaxed font-light tracking-wide text-sm">
                          {project.description}
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 5).map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-3 py-2 bg-minimal-surface border border-minimal-border-subtle text-minimal-text-subtle rounded-lg font-light tracking-wide hover:bg-minimal-surface-soft transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <Link
                          to={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Button
                            variant="ghost"
                            className={`w-full justify-between text-minimal-text-secondary hover:text-minimal-${accentColor} hover:bg-minimal-${accentColor}/5 rounded-xl py-4 text-sm font-light tracking-wide`}
                          >
                            View Project
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
