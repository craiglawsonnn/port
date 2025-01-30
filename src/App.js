import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { gsap } from "gsap";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            gsap.to(`#${entry.target.id}`, {
              scale: 1.1,
              duration: 0.5,
            });
          } else {
            gsap.to(`#${entry.target.id}`, {
              scale: 1,
              duration: 0.5,
            });
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
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
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <div>
        <NavigationBar
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
          <div id="about" className="section" ref={aboutRef}>
            <AboutMe />
          </div>
          <div id="contact" className="section" ref={contactRef}>
            <Contact />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
