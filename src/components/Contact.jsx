import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null); // success | error | null

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    emailjs.sendForm(
      "service_vfu5cag",     
      "template_rijx6j7",       
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY 
    )
    .then(
      () => {
        setLoading(false);
        setFeedback("success");
        formRef.current.reset();
      },
      (error) => {
        console.error("EmailJS Error:", error.text);
        setLoading(false);
        setFeedback("error");
      }
    );
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      {feedback === "success" && (
          <p className="feedback success">✅ Message sent successfully!</p>
        )}
        {feedback === "error" && (
          <p className="feedback error">❌ Failed to send. Please try again.</p>
        )}
        
      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <div className="form-row">
          <div className="form-group half-width">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required placeholder="First Name" />
          </div>
          <div className="form-group half-width">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required placeholder="Last Name" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group half-width">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" required placeholder="Email" />
          </div>
          <div className="form-group half-width">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" placeholder="Phone" />
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Your Message"
            className="message-box"
          />
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        
      </form>

      <div className="social-icons">
        <a href="https://github.com/craiglawsonnn" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://instagram.com/_clawson" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com/in/craig-law-son" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Contact;
