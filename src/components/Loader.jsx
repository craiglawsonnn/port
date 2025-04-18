import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/cat-loader.json"; // You must place your Lottie JSON here
import "../styles/Loader.css"; // for fade-out animation

const Loader = ({ fadeOut }) => {
  return (
    <div className={`loader-overlay ${fadeOut ? "fade-out" : ""}`}>
      <div className="loader-content">
        <Lottie animationData={loadingAnimation} loop autoplay style={{ width: 150, height: 150 }} />
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
