import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import AboutModel from "./AboutModel";

function AboutMe() {
  return (
    <div id="about" style={{ height: "100vh", width: "100%", position: "relative" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Canvas
          style={{ height: "100vh", width: "100vw", background: "black" }}
          camera={{ position: [0, 5, 10], fov: 50 }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 10, 5]} intensity={1} />
          <AboutModel />
        </Canvas>
      </Suspense>
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h1>About Me</h1>
        <p>
          Hi, I'm [Your Name]! A passionate developer with a love for 3D
          rendering, gaming, and creating interactive experiences.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
