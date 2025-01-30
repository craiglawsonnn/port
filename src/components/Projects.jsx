import React, { useState } from "react";
import "../styles/Projects.css";

const projectData = [
  { id: 1, title: "Project 1", description: "Description of Project 1" },
  { id: 2, title: "Project 2", description: "Description of Project 2" },
  { id: 3, title: "Project 3", description: "Description of Project 3" },
  // Add more projects as needed
];

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="carousel">
        <button className="prev-button" onClick={handlePrevious}>
          Previous
        </button>
        <div className="carousel-inner">
          {projectData.map((project, index) => (
            <div
              className={`carousel-item ${
                index === currentIndex ? "active" : ""
              }`}
              key={project.id}
            >
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      </div>
      <div className="pagination">
        {projectData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Projects;
