import React, { useRef } from "react";
import "../styles/AboutMeCard.css";
import AboutModel from "./AboutModel";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { FiRotateCcw } from "react-icons/fi";


const ProjectCard = () => {
  const orbitRef = useRef();

  const resetView = () => {
    if (orbitRef.current) {
      orbitRef.current.reset();
    }
  };

  return (
    <div className="aboutme-card">
      <div className="model-column">
        <div className="model-wrapper">
          <Suspense fallback={<div style={{ color: "#fff" }}>Loading...</div>}>
            <Canvas camera={{ position: [0, 1.5, 7.5], fov: 30 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 10, 5]} intensity={1} />
              <AboutModel />
              <OrbitControls ref={orbitRef} enablePan={false} />
            </Canvas>
          </Suspense>

          <button className="reset-button" onClick={resetView}>
            <FiRotateCcw size={20} />
          </button>

        </div>
      </div>


      <div className="info-column">
        <div className="skills-section">
          <h2 className="project-title">Craig Lawson</h2>
          <div className="level-xp">
            <span>LVL: 24</span>
            <span>EXP: Recent Graduate</span>
          </div>

          <div className="tech-bars">
            {[
              { label: "JavaScript", width: "90%" },
              { label: "React", width: "75%" },
              { label: "Three.js", width: "70%" },
              { label: "Python", width: "60%" },
            ].map((skill, idx) => (
              <div className="bar" key={idx}>
                <label>{skill.label}</label>
                <div className="bar-fill" style={{ width: skill.width }} />
              </div>
            ))}
          </div>
        </div>

        <div className="bio-section">
          <p className="description">
            Hi, I am Craig. This project showcases my ability to build real-time 3D experiences using
            Three.js and React. It’s clean, modular, and a ton of fun.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
