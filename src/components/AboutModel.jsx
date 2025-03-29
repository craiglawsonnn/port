import React, { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function AboutModel() {
  const { scene: characterScene, animations } = useGLTF("/models/CraigWalk.glb");
  const { scene: environmentScene } = useGLTF("/models/Street.glb");

  const mixer = useRef(null);
  const clock = useRef(new THREE.Clock());
  const { scene, camera } = useThree();

  useEffect(() => {
    // Position and scale the character
    characterScene.scale.set(2, 2, 2);
    characterScene.position.set(15.952, 0, 9.6577);
    characterScene.rotation.y = Math.PI; // Rotate character to face away

    // Initialize Animation Mixer
    mixer.current = new THREE.AnimationMixer(characterScene);
    const walkAction = mixer.current.clipAction(
      animations.find((clip) => clip.name === "WalkForward")
    );
    walkAction.play();

    // Remove position tracks from animations
    animations.forEach((clip) => {
      clip.tracks = clip.tracks.filter(
        (track) => !track.name.includes(".position")
      );
    });

    // Add fog to the scene
    scene.fog = new THREE.Fog(0x000000, 5, 100); // Black fog with start and end distances
  }, [characterScene, animations, scene]);

  useFrame(() => {
    const delta = clock.current.getDelta();
    if (mixer.current) mixer.current.update(delta);

    // Move character forward along the Z-axis
    characterScene.position.z -= 0.1;

    // Loop the environment
    if (characterScene.position.z < -20) {
      environmentScene.position.z += 20;
      characterScene.position.z = 0;
    }

    // Update the camera to follow the character from behind
    camera.position.set(
      characterScene.position.x,
      characterScene.position.y + 5, // Lower the camera height
      characterScene.position.z + 10 // Move closer
    );
    camera.lookAt(characterScene.position);
  });

  return (
    <>
      <primitive object={environmentScene} />
      <primitive object={characterScene} />
    </>
  );
}
