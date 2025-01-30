import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";

function Particles() {
  const particlesRef = useRef([]);
  const [velocities] = useState(
    Array.from({ length: 500 }, () => ({
      x: (Math.random() - 0.5) * 0.002,
      y: (Math.random() - 0.5) * 0.002,
    }))
  );
  const center = [0, 0, 0];
  const gravityStrength = 0.001;
  const texture = new TextureLoader().load("/circleTexture.png");

  useFrame(({ mouse }) => {
    const mouseX = mouse.x * 5;
    const mouseY = mouse.y * 5;

    particlesRef.current.forEach((particle, index) => {
      if (particle) {
        const dx = center[0] - particle.position.x;
        const dy = center[1] - particle.position.y;
        const distanceToCenter = Math.sqrt(dx * dx + dy * dy);

        const mouseDx = particle.position.x - mouseX;
        const mouseDy = particle.position.y - mouseY;
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

        if (mouseDistance < 0.5) {
          velocities[index].x += mouseDx * 0.025;
          velocities[index].y += mouseDy * 0.025;
        }

        if (distanceToCenter > 0.1) {
          const force = gravityStrength / distanceToCenter;
          velocities[index].x += force * dx;
          velocities[index].y += force * dy;
        }

        particle.position.x += velocities[index].x;
        particle.position.y += velocities[index].y;

        particle.material.opacity = Math.min(1, particle.material.opacity * 1.05); // Recover opacity
        particle.material.needsUpdate = true;

        velocities[index].x *= 0.98;
        velocities[index].y *= 0.98;
      }
    });
  });

  const particles = Array.from({ length: 500 }, () => ({
    position: [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      0,
    ],
    size: Math.random() * 0.3 + 0.1, // Larger particles
  }));

  return (
    <group>
      {particles.map((particle, index) => (
        <mesh
          key={index}
          position={particle.position}
          ref={(el) => (particlesRef.current[index] = el)}
        >
          <planeGeometry args={[particle.size, particle.size]} />
          <meshStandardMaterial
            map={texture} // Apply rounded texture
            transparent
            opacity={0.8}
            emissive="#ffffff"
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ParticleEffect() {
  return (
    <Canvas
      style={{ height: "100vh", background: "black", position: "absolute", zIndex: 1 }}
      camera={{ position: [0, 0, 15] }} // Move camera back
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Particles />
    </Canvas>
  );
}
