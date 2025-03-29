import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import "../styles/Experience.css";

const experiences = [
  {
    title: "Hardware Support Specialist",
    company: "Clanwilliam Health",
    location: "Sligo, Ireland",
    description:
      "In this role I learned many things including soft skills and technical skills, working with customers and colleagues in a cross-functional collaborative effort.",
  },
  {
    title: "Customer Executive CSR",
    company: "Infosys BPM",
    location: "Waterford, Ireland",
    description:
      "Handled customer queries and complaints, ensuring high customer satisfaction and operational efficiency.",
  },
  {
    title: "Retail Assistant & Manager",
    company: "Original Fudge Kitchen",
    location: "Cape May, New Jersey, USA",
    description:
      "Managed a team of retail staff, provided excellent customer service, and improved store efficiency.",
  },
];

const ExperienceCard = ({ experience }) => {
  const [ref, inView] = useInView({ threshold: 0.6 });

  const springStyles = useSpring({
    opacity: inView ? 1 : 0.4,
    transform: inView ? "scale(1)" : "scale(0.95)",
    filter: inView ? "blur(0px)" : "blur(4px)",
    config: { tension: 250, friction: 30 },
  });

  return (
    <animated.div className="experience-card" ref={ref} style={springStyles}>
      <div className="card-content">
        <h2>{experience.title}</h2>
        <h3>{experience.company}</h3>
        <p className="location">{experience.location}</p>
        <p className="description">{experience.description}</p>
      </div>
    </animated.div>
  );
};



export default function Experience() {
  return (
    <div className="experience-wrapper"> {/* NEW OUTER WRAPPER */}
      <div id="experience" className="section experience-section">
        <div className="experience-cards">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </div>
  );
}

