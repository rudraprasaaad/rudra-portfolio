import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react"; // Add Twitter here

const Contact = () => {
  const fadeInUpDelayed = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, margin: "-120px" },
  };

  return (
    <section
      id="contact"
      className="py-20 px-8 lg:px-16 relative border-t border-minimal-border-subtle/50"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* @ts-expect-error: framer-motion props type mismatch with React 18, safe to ignore */}
        <motion.div className="space-y-16" {...fadeInUpDelayed}>
          <div className="space-y-8">
            <motion.div className="space-y-6">
              <motion.div
                className="inline-block w-2 h-2 bg-minimal-warm rounded-full mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight">
                <span className="text-minimal-warm">Contact</span>
              </h2>
            </motion.div>
            <p className="text-lg text-minimal-text-muted max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
              Ready to build something amazing together? Let's discuss your next
              project and create something extraordinary.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <motion.a
              href="mailto:alex@example.com"
              className="inline-flex items-center gap-3 px-10 py-5 bg-minimal-warm hover:bg-minimal-warm-light text-white rounded-xl font-medium transition-all duration-300 text-base shadow-lg hover:shadow-xl hover:shadow-minimal-warm/20"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </motion.a>

            <div className="flex gap-4 justify-center">
              {[
                {
                  icon: Github,
                  href: "https://github.com/rudraprasaaad",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/rudraprasad-gouda-80a659249/",
                  label: "LinkedIn",
                },
                {
                  icon: Twitter,
                  href: "https://x.com/ruprax", // Replace with your Twitter URL
                  label: "Twitter",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="flex items-center justify-center w-12 h-12 bg-minimal-surface-soft/50 border border-minimal-border-subtle rounded-xl text-minimal-text-secondary hover:text-minimal-blue hover:border-minimal-blue/30 transition-all duration-300 backdrop-blur-sm hover:bg-minimal-surface-soft/80"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
