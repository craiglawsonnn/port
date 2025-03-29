import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { FaGithub, FaReact, FaPython, FaAws, FaMicrosoft, FaCuttlefish } from "react-icons/fa";
import { TbCube } from "react-icons/tb"; // for Three.js
import { SiGooglemaps } from "react-icons/si"; // still valid

function getTechIcon(tech) {
  switch (tech.toLowerCase()) {
    case "react": return <FaReact title="React" />;
    case "python": return <FaPython title="Python" />;
    case "aws": return <FaAws title="AWS" />;
    case "powerbi": return <FaMicrosoft title="Power BI" />; // fallback
    case "googlemaps": return <SiGooglemaps title="Google Maps" />;
    case "threejs": return <TbCube title="Three.js" />; // fallback for Three.js
    case "csharp": return <FaCuttlefish title="C#" />; // funky but placeholder for C#
    default: return <FaMicrosoft title={tech} />;
  }
}

function ProjectCard({ title, description, githubLink, technologies }) {
  const [hovered, setHovered] = useState(false);

  const styles = useSpring({
    width: hovered ? 432 : 100,
    config: { tension: 400, friction: 30 },
  });

  return (
    <animated.div
      className={`project-card ${hovered ? "hovered" : ""}`}
      style={styles}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="card-content">
        {!hovered && (
          <h4 style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>{title}</h4>
        )}
        {hovered && (
          <>
            <h4 className="project-title">{title}</h4>
            <div className="tech-icons">
              {technologies.map((tech, idx) => (
                <span key={idx} className="tech-icon">{getTechIcon(tech)}</span>
              ))}
            </div>
            <p className="project-description">{description}</p>

            <div className="project-footer">
            <span className="learn-more-text">Click here to learn more</span>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
                title="View on GitHub"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </>
        )}

      </div>
    </animated.div>
  );
}

export default ProjectCard;
