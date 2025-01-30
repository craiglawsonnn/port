import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Experience.css";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      const nextCard = cardsRef.current[index + 1];
      const prevCard = cardsRef.current[index - 1];

      gsap.set(card, {
        y: index === 0 ? 0 : index === 1 ? "10vh" : "150vh",
        x: index === 1 ? "10vw" : 0,
        scale: index === 0 ? 1 : 0.8,
        opacity: index === 0 ? 1 : 0.5,
        filter: index === 0 ? "blur(0px)" : "blur(10px)",
      });

      ScrollTrigger.create({
        trigger: card,
        start: "center 70%",
        end: "center 30%",
        scrub: true,
        onEnter: () => {
          if (nextCard) {
            gsap.to(nextCard, {
              y: "10vh",
              x: "10vw",
              opacity: 0.5,
              scale: 0.8,
              filter: "blur(10px)",
            });
          }
          gsap.to(card, {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          });
        },
        onLeave: () => {
          gsap.to(card, {
            y: "-10vh",
            x: "-10vw",
            opacity: 0.5,
            scale: 0.8,
            filter: "blur(10px)",
          });
        },
        onEnterBack: () => {
          gsap.to(card, {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          });
          if (prevCard) {
            gsap.to(prevCard, {
              y: "-10vh",
              x: "-10vw",
              opacity: 0.5,
              scale: 0.8,
              filter: "blur(10px)",
            });
          }
        },
        onLeaveBack: () => {
          if (prevCard) {
            gsap.to(prevCard, {
              y: "10vh",
              x: "10vw",
              opacity: 0.5,
              scale: 0.8,
              filter: "blur(10px)",
            });
          }
          gsap.to(card, {
            y: "150vh",
            opacity: 0,
          });
        },
      });
    });
  }, []);

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

  return (
    <div className="experience-section">
      <div className="experience-cards">
        {experiences.map((experience, index) => (
          <div
            className="experience-card"
            ref={(el) => (cardsRef.current[index] = el)}
            key={index}
          >
            <div className="card-content">
              <h2>{experience.title}</h2>
              <h3>{experience.company}</h3>
              <p className="location">{experience.location}</p>
              <p className="description">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
