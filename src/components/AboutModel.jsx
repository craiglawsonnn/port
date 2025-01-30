import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function AboutModel() {
  const { scene, animations } = useGLTF(
    "/models/Taunt.glb"
  );
  const mixer = useRef(null);

  useEffect(() => {
    if (animations && animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      const idleAction = mixer.current.clipAction(animations[0]); // Assuming first animation is the idle
      idleAction.play();
    }

    return () => mixer.current?.stopAllAction();
  }, [animations, scene]);

  useEffect(() => {
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      if (mixer.current) mixer.current.update(delta);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const playAnimation = (index) => {
    if (mixer.current && animations[index]) {
      mixer.current.stopAllAction();
      const action = mixer.current.clipAction(animations[index]);
      action.reset().play();
    }
  };

  return (
    <>
      <Canvas
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "transparent",
        }}
        camera={{ position: [0, 1.5, 5] }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <primitive object={scene} scale={1.5} position={[0, -1, 0]} />
        <OrbitControls enableZoom={true} />
      </Canvas>
      <div>
        <button onClick={() => playAnimation(0)}>Idle</button>
        <button onClick={() => playAnimation(1)}>Animation 2</button>
        <button onClick={() => playAnimation(2)}>Animation 3</button>
      </div>
    </>
  );
}
