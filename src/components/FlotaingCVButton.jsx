import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import "../styles/FloatingCVButton.css";

const FloatingCVButton = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const downloadCV = (format) => {
    const fileMap = {
      doc: "/cv/Craig_Lawson_CV.docx",
      pdf: "/cv/Craig_Lawson_CV.pdf",
      beautified: "/cv/Craig_Lawson_CV_Beautified.pdf",
    };

    const link = document.createElement("a");
    link.href = fileMap[format];
    link.download = fileMap[format].split("/").pop();
    link.click();
  };

  return (
    <div className="cv-float-container">
      <button className="cv-button" onClick={toggleMenu}>
        <FiDownload size={20} />
        <span>CV</span>
      </button>

      {open && (
        <div className="cv-dropdown">
          <div onClick={() => downloadCV("doc")}>Download DOC</div>
          <div onClick={() => downloadCV("pdf")}>Download PDF</div>
          <div onClick={() => downloadCV("beautified")}>Beautified PDF</div>
        </div>
      )}
    </div>
  );
};

export default FloatingCVButton;
