import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import "../styles/Projects.css";

const projectData = [
  {
    title: "React Weather API",
    description: "View dynamic real-time data for specific areas based on user search.",
    githubLink: "https://github.com/craiglawsonnn/weatherApp",
    technologies: ["react", "api"],
  },
  {
    title: "Rekoglock - PR300",
    description: "Facial Recognition Security System using AWS Rekognition and Pi.",
    githubLink: "https://github.com/craiglawsonnn/PRJ300",
    technologies: ["python", "aws"],
  },
  {
    title: "Foodseg103 - PR400",
    description: "Moosic - Artist Discovery Website. My first web development project.",
    githubLink: "https://github.com/craiglawsonnn/PRJ400",
    technologies: ["react", "googlemaps"],
  },
  {
    title: "Portfolio",
    description: "You're looking at it.",
    githubLink: "https://github.com/craiglawsonnn/weatherApp",
    technologies: ["react", "threejs"],
  },
  {
    title: "C# WBF - API",
    description: "WPF Desktop App for activity management built in C#.",
    githubLink: "https://github.com/craiglawsonnn/CA2",
    technologies: ["csharp"],
  },
  {
    title: "PowerBi",
    description: "Work in progress. Watch this space...",
    githubLink: "https://github.com/craiglawsonnn/weatherApp",
    technologies: ["powerbi"],
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-row">
        {projectData.map((proj, index) => (
          <ProjectCard
            key={index}
            title={proj.title}
            description={proj.description}
            githubLink={proj.githubLink}
            technologies={proj.technologies}
          />
        ))}
      </div>
    </div>

  );
}

export default Projects;
