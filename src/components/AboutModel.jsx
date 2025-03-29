import React, { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function AboutModel() {
  const { scene: characterScene, animations } = useGLTF("/models/CraigWalk.glb");
  const mixer = useRef(null);
  const clock = useRef(new THREE.Clock());
  const { camera } = useThree();

  // Store all animation clips
  const animationActions = useRef({});
  const activeAction = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (!characterScene || !animations.length) return;

    // Initialize Animation Mixer
    mixer.current = new THREE.AnimationMixer(characterScene);

    // Store Animation Actions in a Lookup Object
    animations.forEach((clip) => {
      animationActions.current[clip.name] = mixer.current.clipAction(clip);
    });

    // Start with a random idle animation
    playRandomIdleAnimation();

    return () => mixer.current?.stopAllActions();
  }, [characterScene, animations]);

  // Function to Play a Random Idle Animation
  const playRandomIdleAnimation = () => {
    if (isInteracting) return; // Don't override if interacting

    const idleAnimations = ["Idle", "HappyIdle", "WorriedIdle", "Salute"];
    const randomIdle = idleAnimations[Math.floor(Math.random() * idleAnimations.length)];
    
    playAnimation(randomIdle);

    // Set a random time for the next idle switch (30s - 60s)
    const nextIdleTime = Math.random() * (10000 - 5000) + 5000;
    setTimeout(playRandomIdleAnimation, nextIdleTime);
  };

  // Function to Play Animation
  const playAnimation = (name) => {
    if (!animationActions.current[name]) return;

    if (activeAction.current) {
      activeAction.current.fadeOut(1);
    }

    activeAction.current = animationActions.current[name];
    activeAction.current.reset().fadeIn(1).play();
  };

  // Handle User Click Interaction
  const handleClick = () => {
    setIsInteracting(true);

    // Play Dismiss or Block animation randomly
    const interactionAnimations = ["Dismiss", "Block"];
    const chosenAnimation = interactionAnimations[Math.floor(Math.random() * interactionAnimations.length)];

    playAnimation(chosenAnimation);

    // After the interaction, return to idling
    setTimeout(() => {
      setIsInteracting(false);
      playRandomIdleAnimation();
    }, 5000);
  };

  useFrame(() => {
    const delta = clock.current.getDelta();
    mixer.current?.update(delta);
  });

  return (
    <primitive
      object={characterScene}
      onClick={handleClick}
      scale={[2, 2, 2]}
      position={[0, -1, 0]}
    />
  );
}
