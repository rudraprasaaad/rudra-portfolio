import { motion } from "motion/react";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";

interface NavigationBarProps {
  scrollToSection: (sectionId: string) => void;
}

const NavigationBar = ({ scrollToSection }: NavigationBarProps) => {
  return (
    <motion.nav
      className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-minimal-surface/90 border-b border-minimal-border-subtle/50"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-8xl mx-auto px-8 lg:px-16 py-6 flex justify-between items-center">
        <motion.div
          className="font-display font-light text-2xl text-minial-text-primary cursor-pointer tracking-light"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          onClick={() => scrollToSection("#hero")}
        >
          <span className="font-normal">rudra</span>
          <span className="text-minimal-accent">.</span>
          <span className="font-light">dev</span>
        </motion.div>

        <div className="hidden md:flex gap-8 items-center">
          {["About", "Projects", "Contact"].map((item, index) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
              className="relative px-4 py-2 text-minimal-text-muted hover:tex-minimal-text-primary transition-all duration-200 font-medium text-sm tracking-wide group"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              {item}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-minimal-accent origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </motion.nav>
  );
};

export default NavigationBar;
