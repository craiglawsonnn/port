import React from "react";
import "../styles/NavigationBar.css";

function NavigationBar({ onNavigate }) {
  const sections = ["home", "experience", "projects", "about", "contact"];

  return (
    <nav className="navigation-bar">
      <ul>
        {sections.map((section, index) => (
          <li key={index} onClick={() => onNavigate(section)}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationBar;
