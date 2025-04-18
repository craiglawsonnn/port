import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMeCard";
import Contact from "./components/Contact";
import FloatingCVButton from "./components/FloatingCVButton";
import Loader from "./components/Loader";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 500); // Allow fade to complete
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        let visibleEntry = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            visibleEntry = entry;
          }
        });

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.5],
        rootMargin: "0px 0px -20% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <BrowserRouter>
      {isLoading ? (
        <Loader fadeOut={fadeOut} />
      ) : (
        <div>
          <NavigationBar
            activeSection={activeSection}
            onNavigate={(section) => {
              switch (section) {
                case "home":
                  scrollToSection(homeRef);
                  break;
                case "experience":
                  scrollToSection(experienceRef);
                  break;
                case "projects":
                  scrollToSection(projectsRef);
                  break;
                case "about":
                  scrollToSection(aboutRef);
                  break;
                case "contact":
                  scrollToSection(contactRef);
                  break;
                default:
                  break;
              }
            }}
          />
          <FloatingCVButton />
          <div id="app-container">
            <div id="home" className="section" ref={homeRef}>
              <Home />
            </div>
            <div id="experience" className="section" ref={experienceRef}>
              <Experience />
            </div>
            <div id="projects" className="section" ref={projectsRef}>
              <Projects />
            </div>
            <div id="about" className="section about-section" ref={aboutRef}>
              <AboutMe />
            </div>
            <div id="contact" className="section" ref={contactRef}>
              <Contact />
            </div>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
