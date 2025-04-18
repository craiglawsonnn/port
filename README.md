# Craig Lawson – Developer Portfolio

Welcome to my personal portfolio website – a creative, interactive, and fully responsive showcase of my skills, projects, and personality.

##  Live Demo

https://craiglawsonnn.github.io/port/

---

##  Features

-  Animated scroll interactions with `framer-motion`
-  Fully responsive design (desktop, tablet, and mobile)
-  Active section highlighting with scroll tracking
-  Sidebar navigation with **mobile hamburger menu**
-  Real-time 3D model interaction using **Three.js** & **react-three-fiber**
-  Downloadable CV in **PDF**, **DOC**, and **Beautified** format
-  Functional **contact form** powered by **EmailJS**
-  Smooth animations and transitions throughout
-  Clean, modular, and scalable code structure

---

##  Built With

###  Core Technologies
- **React.js** – Frontend framework
- **CSS3** – Styling with media queries for responsiveness
- **HTML5** – Semantic structure
- **JavaScript (ES6)** – Logic & interactivity

###  Libraries & Tools
- [`framer-motion`](https://www.framer.com/motion/) – Page and element animations
- [`react-three-fiber`](https://github.com/pmndrs/react-three-fiber) – 3D rendering in React
- [`@react-three/drei`](https://github.com/pmndrs/drei) – Useful helpers for `react-three-fiber`
- [`EmailJS`](https://www.emailjs.com/) – Send contact form messages directly to email
- [`React Icons`](https://react-icons.github.io/react-icons/) – Iconography
- `@react-spring/web` – Smooth spring animations for hover effects
- `GLTFLoader` – To load the animated 3D model (GLB)

---

## Responsiveness

-  **Desktop:** Full layout with 3D model and interactive cards
-  **Tablet:** Simplified layout with collapsible sidebar and restructured cards
-  **Mobile:** Hamburger navigation toggle, vertical stacking, adaptive sizing

All sections gracefully scale and rearrange using custom media queries (`600px`, `1024px`, etc).

---

## Folder Structure

```
/public
  /cv                  <- Downloadable CVs
  /models              <- GLTF/GLB 3D model files
/src
  /components          <- React component files
  /styles              <- CSS Modules
  App.js               <- App entry point
  index.js             <- React DOM entry
```

---

## How to Run Locally

1. **Clone the repo**
```bash
git clone https://github.com/craiglawsonnn/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

---

## Todo / Future Improvements

- Add dark/light mode toggle 
- Include more 3D interaction (e.g., hover tooltips or model animations)
- Implement Experience section and a blog type section

---

## About Me

Hi, I’m **Craig Lawson**, a recent computing graduate passionate about building beautiful, functional, and scalable web applications. This portfolio is my sandbox to experiment, grow, and show what I can do.

Feel free to reach out through the [Contact](#) section or connect on [LinkedIn](https://linkedin.com/in/craig-law-son)!

---

## License

This project is open source and free to use. Just give credit where it’s due. ❤️
