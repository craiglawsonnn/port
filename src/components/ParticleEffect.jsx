import * as THREE from "three";
import { useEffect, useRef } from "react";

const ParticleEffect = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Responsive Particle Grid
        const cols = Math.floor(window.innerWidth / 25); // Increase density
        const rows = Math.floor(window.innerHeight / 25);
        const spacing = 0.6; // Space between particles
        const particleCount = cols * rows;

        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const offsets = new Float32Array(particleCount); // Used for wave effect

        let index = 0;
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                positions[index * 3] = (x - cols / 2) * spacing;
                positions[index * 3 + 1] = (y - rows / 2) * spacing;
                positions[index * 3 + 2] = 0;

                // Offset controls timing - make a diagonal wave
                offsets[index] = (x + y) * 0.5; 
                index++;
            }
        }

        particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        particles.setAttribute("offset", new THREE.BufferAttribute(offsets, 1));

        // Shader Material with a Soft Spread Wave Effect
        const particleMaterial = new THREE.ShaderMaterial({
            vertexShader: `
                attribute float offset;
                varying float vOpacity;
                uniform float time;

                void main() {
                    vec3 newPosition = position;

                    // Wave moves diagonally, smoother fade across multiple rows
                    float wave = sin(time * 0.5 + offset * 1.2) * 0.5 + 0.5;
                    
                    // Gaussian-style wave spread to neighboring particles
                    float spread = smoothstep(0.2, 0.8, wave) * 0.9;

                    vOpacity = spread; // Smooth opacity transition

                    gl_PointSize = 5.0;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
                }
            `,
            fragmentShader: `
                varying float vOpacity;
                void main() {
                    gl_FragColor = vec4(1.0, 0.5, 0.8, vOpacity);
                }
            `,
            uniforms: {
                time: { value: 0 }
            },
            transparent: true
        });

        const particleSystem = new THREE.Points(particles, particleMaterial);
        scene.add(particleSystem);

        // Animation Loop
        let clock = new THREE.Clock();
        const animate = () => {
            requestAnimationFrame(animate);
            particleMaterial.uniforms.time.value = clock.getElapsedTime();
            renderer.render(scene, camera);
        };
        animate();

        // Handle Resizing
        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            mountRef.current.removeChild(renderer.domElement);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <div ref={mountRef} style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh" }} />;
};

export default ParticleEffect;
