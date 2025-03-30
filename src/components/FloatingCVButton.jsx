import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/FloatingCVButton.css";

const FloatingCVButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="floating-cv-button" ref={dropdownRef}>
      <button
        className="cv-toggle-btn"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        CV
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="cv-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <li>
              <a
                href="/cv/Craig Lawson.pdf"
                download="Craig Lawson.pdf"
                onClick={() => setIsOpen(false)}
              >
                Download PDF
              </a>
            </li>
            <li>
              <a
                href="/cv/Craig Lawson.docx"
                download="Craig Lawson.docx"
                onClick={() => setIsOpen(false)}
              >
                Download DOC
              </a>
            </li>
            <li>
              <a
                href="/cv/Craig Lawson Beautified.pdf"
                download="Craig Lawson Beautified.pdf"
                onClick={() => setIsOpen(false)}
              >
                Beautified
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingCVButton;
