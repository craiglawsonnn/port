import React, { useState } from "react";
import "../styles/NavigationBar.css";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const sections = ["home", "experience", "projects", "about", "contact"];

function NavigationBar({ activeSection, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const activeIndex = sections.indexOf(activeSection);

  const handleNavClick = (section) => {
    onNavigate(section);
    setIsOpen(false); // close nav on click (mobile)
  };

  return (
    <>
      {/* Hamburger toggle button */}
      <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar Navigation */}
      <nav className={`navigation-bar ${isOpen ? "open" : ""}`}>
        <ul>
          {sections.map((section, index) => {
            const distance = Math.abs(index - activeIndex);
            const opacity = Math.max(1 - distance * 0.2, 0.3);
            const blur = distance * 1;

            return (
              <motion.li
                key={section}
                onClick={() => handleNavClick(section)}
                className={activeIndex === index ? "active-link" : ""}
                animate={{ opacity, filter: `blur(${blur}px)` }}
                transition={{ duration: 0.4 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.li>
            );
          })}
        </ul>
      </nav>

      {/* Overlay for mobile nav */}
      {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
}

export default NavigationBar;
