import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import "../styles/Experience.css";

const experiences = [
  {
    title: "Customer Executive CSR",
    company: "Infosys BPM",
    Date: "November 2024 - Present",
    location: "Waterford, Ireland",
    description:
      "- Assisting customers with billing inquiries, payment processing, and troubleshooting discrepancies for EE, ensuring accurate and efficient resolution of account issues.\n- Providing account updates, explaining charges, processing refunds or adjustments, and supporting customerswith payment plans or contract queries.\n- Identifying opportunities to enhance customer experience by recommending relevant plans, add-ons, or serviceswhile maintaining high customer satisfaction and retention",
  },
  {
    title: "Hardware Support Specialist",
    company: "Clanwilliam Health",
    Date: "April 2023 - October 2023",
    location: "Sligo, Ireland",
    description:
      "- Acted as a Hardware Desk Specialist, providing direct support to customers.\n- Worked with technologies including MySQL Database backups and migrations.\n- Provided assistance with software such as HPM, Socrates, HealthOne, ADDS, and the Microsoft Suite.\n- Managed hardware-related tasks and troubleshooting.",
  },
  {
    title: "Retail Cashier",
    company: "Mullens Spar",
    Date: "June 2018 - November 2024",
    location: "Sligo, Ireland",
    description:
      "- Processing transactions, including handling payments, issuing receipts, and balancing the cash register at the endof the shift.\n- Assisting customers, with purchases, answering questions, and providing information about products andpromotions.",
  },
  {
    title: "Retail Assistant & Manager",
    company: "Original Fudge Kitchen",
    Date: "June 2024 - September 2024",
    location: "Cape May, New Jersey, USA",
    description:
      "- Managing staff, including recruitment, training, and motivation of employees.\n- Monitoring customer service quality, ensuring a high level of customer satisfaction.\n- Managing inventory: tracking stock levels, ordering products, and working with suppliers.",
  },
  {
    title: "Retail Assistant & Manager",
    company: "Cape May Trading Post",
    Date: "June 2024 - September 2024",
    location: "Cape May, New Jersey, USA",
    description:
    "- Oversaw daily operations including staff scheduling, training, and floor supervision.\n" +
    "- Maintained a clean and organized retail space, ensuring product displays and workstations were fully stocked and tidy.\n" +
    "- Provided barista services, preparing beverages and managing the café counter.\n" +
    "- Acted as onsite IT support, resolving point-of-sale and technical issues to maintain smooth operations.\n" +
    "- Supported stock management, assisted with deliveries, and ensured accurate inventory control.",},
  {
    title: "Work Experience",
    company: "MongoDB",
    Date: "April 2016 - May 2016",
    location: "Dublin, Ireland",
    description:
      "- Was taught about how to create a mongoDB cluster\n- Learned about the work-life balance of a software engineer\n- Was taught about the importance of a good work-life balance and how to maintain it\n- Learned about the importance of communication in a team environment\n- Was taught about the importance of documentation and how to write it effectively",
  },
];

// Helper function to render line breaks
const renderWithBreaks = (text) =>
  text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

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
        <p className="location">{experience.Date}</p>
        <p className="location">{experience.location}</p>
        <p className="description">{renderWithBreaks(experience.description)}</p>
      </div>
    </animated.div>
  );
};

export default function Experience() {
  return (
    <div className="experience-wrapper">
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
