import NavigationBar from "@/components/NavigationBar";
import { useEffect } from "react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-minimal-surface text-minimal-text-primary selection:bg-minimal-accent/20 font-sans antialiased overflow-x-hidden relative">
      <NavigationBar scrollToSection={scrollToSection} />
      {/* <Hero scrollToSectio={scrollToSection} />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
};

export default Index;
