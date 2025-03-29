import React, { useEffect } from "react";
import ParticleEffect from "./ParticleEffect";
import { motion } from "framer-motion";
import "../styles/Home.css";

const Home = () => {
    useEffect(() => {
        const mask = document.getElementById("mouseMask");
        const homeSection = document.getElementById("home");
      
        const handleMouseMove = (event) => {
          const rect = homeSection.getBoundingClientRect();
          const x = event.clientX - rect.left - 125;
          const y = event.clientY - rect.top - 125;
      
          mask.style.left = `${x}px`;
          mask.style.top = `${y}px`;
        };
      
        homeSection.addEventListener("mousemove", handleMouseMove);
      
        return () => homeSection.removeEventListener("mousemove", handleMouseMove);
      }, []);
      

  return (
    <section id="home" className="section">
      <ParticleEffect />
      <div id="mouseMask"></div>

      <div className="title">
        <motion.h1
          className="main-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          PORTFOLIO
        </motion.h1>
        <motion.h2
          className="sub-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Craig Lawson
        </motion.h2>
        <motion.div
        className="welcome-subtitle"
        animate={{ scale: [1, 1.15, 1] }} // Only scale, no opacity
        transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
        }}
        >
        Welcome!
        </motion.div>




      </div>
    </section>
  );
};

export default Home;
