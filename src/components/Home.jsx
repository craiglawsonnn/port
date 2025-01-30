import React from "react";
import ParticleEffect from "./ParticleEffect";
import "../styles/Home.css";

function Home() {
  return (
    <div id="home" style={{ position: "relative", height: "100vh" }}>
      <ParticleEffect />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "3rem", margin: 0 }}>PARTICLE LOVE</h1>
        <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>
          By Craig Lawson
        </p>
      </div>
    </div>
  );
}

export default Home;
