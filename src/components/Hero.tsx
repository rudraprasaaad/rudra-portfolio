import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  const heroRef = useRef<HTMLElement>(null);
  const [, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Enhanced background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Custom Cursor Follower */}
        <motion.div
          className="absolute w-8 h-8 pointer-events-none z-50 hidden md:block"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          <div className="relative w-full h-full">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-minimal-blue/30 animate-pulse" />
            {/* Inner dot */}
            <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-minimal-blue" />
            {/* Glowing effect */}
            <div className="absolute inset-0 rounded-full bg-minimal-blue/10 blur-sm" />
          </div>
        </motion.div>

        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-minimal-blue/10 blur-2xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-40 right-32 w-24 h-24 rounded-full bg-minimal-slate/8 blur-xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/3 w-20 h-20 rounded-full bg-minimal-warm/6 blur-lg"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-minimal-slate/20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-3 h-3 border border-minimal-blue/20 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/6 w-4 h-4 border border-minimal-slate/15 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </div>

      {/* Hero Section */}
      <motion.section
        id="hero"
        ref={heroRef}
        className="pt-32 pb-24 px-8 lg:px-16 relative min-h-screen flex items-center"
      >
        <div className="max-w-6xl mx-auto relative w-full">
          {/* Animated background text */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <div className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-display font-black tracking-tighter text-minimal-text-primary select-none">
              ENG
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8 md:space-y-12 relative z-10"
          >
            <motion.div variants={fadeInUp} className="space-y-4 md:space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight leading-[0.9] relative tracking-tight">
                <motion.span
                  className="block text-minimal-text-primary"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2,
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  Full Stack
                </motion.span>
                <motion.span
                  className="block text-minimal-accent font-light relative"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  Engineer
                  {/* Responsive animated underline */}
                  <motion.div
                    className="absolute bottom-0 sm:bottom-1 md:bottom-2 left-0 h-0.5 sm:h-0.5 md:h-1 bg-gradient-to-r from-minimal-blue to-minimal-slate rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
                  />
                </motion.span>
              </h1>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="max-w-2xl space-y-4 md:space-y-6"
            >
              <motion.p
                className="text-lg sm:text-xl md:text-2xl font-light text-minimal-text-secondary leading-relaxed tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                Building scalable applications with modern technologies.
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <Button
                  size="lg"
                  className="bg-minimal-blue hover:bg-minimal-blue-light text-white font-medium px-6 md:px-8 py-4 md:py-6 h-auto rounded-xl border-0 transition-all duration-300 text-sm md:text-base shadow-lg hover:shadow-xl group-hover:shadow-minimal-blue/20 w-full sm:w-auto"
                  onClick={() => scrollToSection("#projects")}
                >
                  <span className="flex items-center gap-3">
                    View Projects
                    <motion.div
                      className="overflow-hidden"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight className="w-4 md:w-5 h-4 md:h-5" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-minimal-slate hover:bg-minimal-slate-soft hover:border-minimal-slate text-minimal-text-primary font-medium px-6 md:px-8 py-4 md:py-6 h-auto rounded-xl transition-all duration-300 text-sm md:text-base backdrop-blur-sm w-full sm:w-auto"
                  onClick={() => scrollToSection("#contact")}
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Responsive animated scroll indicator */}
          <motion.div
            className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <motion.div
              className="w-4 h-6 sm:w-5 sm:h-8 md:w-6 md:h-10 border-2 border-minimal-slate/30 rounded-full flex justify-center"
              animate={{
                borderColor: [
                  "hsl(var(--minimal-slate))",
                  "hsl(var(--minimal-blue))",
                  "hsl(var(--minimal-slate))",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div
                className="w-0.5 h-1.5 sm:w-1 sm:h-2 md:h-3 bg-minimal-slate rounded-full mt-1 sm:mt-1.5 md:mt-2"
                animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
