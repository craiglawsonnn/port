import React, { Suspense } from "react";
import AboutModel from "./AboutModel";

function AboutMe() {
  return (
    <div style={{ display: "flex", height: "100vh", alignItems: "center", padding: "20px" }}>
      {/* 3D Model Container */}
      <div
        style={{
          flex: 1,
          position: "fixed",
          top: "15%", // Adjusted to provide more padding
          left: "5%", // Added padding
          width: "350px", // Wider container
          height: "400px", // Taller container
          border: "1px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "#1a1a1a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Suspense fallback={<div>Loading 3D Model...</div>}>
          <AboutModel />
        </Suspense>
        {/* Buttons for interaction */}
        <div style={{ marginTop: "10px" }}>
          <button style={{ margin: "5px" }} onClick={() => console.log("Action 1")}>
            Action 1
          </button>
          <button style={{ margin: "5px" }} onClick={() => console.log("Action 2")}>
            Action 2
          </button>
          <button style={{ margin: "5px" }} onClick={() => console.log("Action 3")}>
            Action 3
          </button>
        </div>
      </div>

      {/* About Text */}
      <div
        style={{
          flex: 2,
          marginLeft: "400px", // Space for the fixed model container
          padding: "20px",
          textAlign: "left",
        }}
      >
        <h1>Craig Lawson</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet augue id
          metus vehicula vehicula sit amet nec metus.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
