import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMenuClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  // Enhanced animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    open: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const buttonVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  return (
    <div className="md:hidden">
      {/* Enhanced Hamburger Button */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          className="relative z-50 bg-minimal-surface-hover hover:bg-minimal-accent/10 border border-minimal-border rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={buttonVariants}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="w-6 h-6 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              {!isOpen ? (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 text-minimal-text-primary" />
                </motion.div>
              ) : (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 text-minimal-text-primary" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </Button>
      </motion.div>

      {/* Enhanced Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Animated backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />

            {/* Enhanced Menu Content */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-x-4 top-20 z-50 bg-minimal-surface/95 backdrop-blur-xl border border-minimal-border rounded-2xl p-8 shadow-2xl"
            >
              <motion.nav className="space-y-2">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      x: 4,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      onClick={() => handleMenuClick(item.href)}
                      className="group block w-full text-left p-5 rounded-xl bg-minimal-surface-hover/50 hover:bg-minimal-accent/10 border border-minimal-border-light hover:border-minimal-accent/30 transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Hover effect background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-minimal-accent/5 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />

                      <span className="relative text-xl font-medium text-minimal-text-primary group-hover:text-minimal-accent transition-colors duration-300">
                        {item.label}
                      </span>

                      {/* Animated underline */}
                      <motion.div
                        className="absolute bottom-2 left-5 h-0.5 bg-minimal-accent"
                        initial={{ width: 0 }}
                        whileHover={{ width: "calc(100% - 2.5rem)" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </button>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Enhanced divider with animation */}
              <motion.div
                className="mt-8 pt-6 border-t border-minimal-border relative"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <motion.p
                  className="text-center text-sm text-minimal-text-muted font-medium tracking-wide"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                >
                  rudra.dev
                </motion.p>

                {/* Subtle glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-minimal-accent/5 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    delay: 0.8,
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
