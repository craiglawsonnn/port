import React from "react";
import ParticleEffect from "./ParticleEffect";
import "../styles/Home.css";

function Home() {
  return (
    <section id="home" className="section">
      {/* The WebGL Canvas */}
      <ParticleEffect />

      {/* The text that will act as a MASK */}
      <div className="title">
        <h1>CRAIG LAWSON'S</h1>
        <h1>PORTFOLIO</h1>
      </div>
    </section>
  );
}

export default Home;
