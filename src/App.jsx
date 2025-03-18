

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import SpaceBackground from "./components/SpaceBackground.jsx";
import Loader from "./components/Loader"; // Import the Loader component

const sections = ["hero", "skills", "work", "projects", "contact"];

const App = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDotClick = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  if (!loaded) {
    return <Loader onLoaded={() => setLoaded(true)} />;
  }

  return (
    <div className="relative min-h-screen bg-transparent text-white overflow-hidden">
      <SpaceBackground />
      
      <div className="fixed top-1/2 right-5 transform -translate-y-1/2 flex flex-col gap-3 z-50">
        {sections.map((section) => (
          <motion.div
            key={section}
            onClick={() => handleDotClick(section)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              activeSection === section ? "bg-white scale-125" : "bg-gray-500"
            }`}
            whileHover={{ scale: 1.5 }}
          />
        ))}
      </div>

      {sections.map((section, index) => (
        <motion.section
          key={section}
          id={section}
          className="section-glow relative z-10"
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileInView={{ y: ["20px", "0px"], opacity: [0.1, 1] }}
          viewport={{ once: true }}
        >
          {index === 0 && <Hero />}
          {index === 1 && <Skills />}
          {index === 2 && <WorkExperience />}
          {index === 3 && <Projects />}
          {index === 4 && <Contact />}
        </motion.section>
      ))}
    </div>
  );
};

export default App;
