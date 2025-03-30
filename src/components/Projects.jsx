import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import "../styles/Projects.css";

const projectData = [
  {
    title: "React Weather API",
    description: "Weather Dashboard is a React-based web application that allows users to search for weather information of cities around the world. It provides current weather data and a 5-day forecast, with the ability to save favorite cities for quick access.",
    githubLink: "https://github.com/craiglawsonnn/weatherApp",
    technologies: ["react", "api"],
  },
  {
    title: "Rekoglock - PR300",
    description: "This project implements a facial recognition-based security system using Python scripts and AWS services. The system runs on a Raspberry Pi 4 with a connected face detection screen, a button, and an electronic lock. AWS Rekognition is used to verify faces, and the electronic lock is activated only when an authorized face is recognized. The facial data is stored securely using Amazon S3, and the system interacts with AWS services through API Gateway.",
    githubLink: "https://github.com/craiglawsonnn/PRJ300",
    technologies: ["python", "aws"],
  },
  {
    title: "Foodseg103 - PR400",
    description: "This repository showcases the implementation of an advanced image segmentation model using Detectron2. The FoodSeg103 dataset, which contains images of various food items, is used to train a model that can classify and segment different foods within an image. The core of this project includes: Preprocessing and handling the FoodSeg103 dataset. Using Detectron2 to build, train, and evaluate a segmentation model. Visualizing results and improving model performance through tuning.",
    githubLink: "https://github.com/craiglawsonnn/PRJ400",
    technologies: ["react", "googlemaps"],
  },
  {
    title: "Portfolio",
    description: "You're looking at it.",
    githubLink: "https://github.com/craiglawsonnn/port",
    technologies: ["react", "threejs"],
  },
  {
    title: "C# WBF - API",
    description: "This project is a WPF (Windows Presentation Foundation) application that allows users to manage a list of activities based on different categories such as Land, Water, and Air. Users can filter, select, and move activities between available and selected lists while keeping track of the total cost of selected activities. The application also ensures that users cannot select activities that occur on the same date, preventing scheduling conflicts.",
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
