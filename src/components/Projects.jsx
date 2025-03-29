import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody, BallCollider } from "@react-three/rapier";
// import { Html } from "@react-three/drei";
import * as THREE from "three";

const projectData = [
  { id: 1, title: "Project 1", description: "Description of Project 1" },
  { id: 2, title: "Project 2", description: "Description of Project 2" },
  { id: 3, title: "Project 3", description: "Description of Project 3" },
];

function HangingCard({ position, project }) {
  const cardRef = useRef();
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <RigidBody
      ref={cardRef}
      colliders="cuboid"
      restitution={0.8}
      friction={0.5}
      linearDamping={0.5}
      angularDamping={0.9}
      position={position}
    >
      <mesh onClick={handleFlip} scale={[1.5, 2, 0.1]} castShadow>
        <boxGeometry args={[1.5, 2, 0.1]} />
        <meshStandardMaterial color={flipped ? "white" : "blue"} />
      </mesh>
    </RigidBody>
  );
}

export default function Projects() {
  return (
    <div id="projects" style={{ height: "100vh", width: "100vw" }}>
      <Canvas shadows camera={{ position: [0, 3, 8], fov: 45 }} style={{ background: "#1e1e1e" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

        <Physics>
          {/* Adding a ceiling from where cards will hang */}
          <RigidBody type="fixed" position={[0, 3, 0]}>
            <mesh>
              <boxGeometry args={[10, 0.2, 10]} />
              <meshStandardMaterial color="gray" />
            </mesh>
          </RigidBody>

          {/* Add the strings using BallColliders */}
          {projectData.map((project, index) => (
            <RigidBody key={`collider-${index}`} type="fixed" position={[index * 2 - 2, 2.5, 0]}>
              <BallCollider args={[0.05]} />
            </RigidBody>
          ))}

          {/* Hanging Cards */}
          {projectData.map((project, index) => (
            <HangingCard key={project.id} position={[index * 2 - 2, 1, 0]} project={project} />
          ))}
        </Physics>
      </Canvas>
    </div>
  );
}
