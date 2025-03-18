import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

// Star Component
const Star = () => {
  const starRef = useRef();

  useFrame(() => {
    if (starRef.current) {
      starRef.current.position.y -= 0.02; // Move down
      if (starRef.current.position.y < -5) {
        starRef.current.position.y = 5; // Reset position
      }
    }
  });

  return (
    <mesh ref={starRef} position={[Math.random() * 6 - 3, Math.random() * 5, Math.random() * 6 - 3]}>
      <sphereGeometry args={[0.05, 10, 10]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};

// Stars Background Component
const ShootingStars = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Generate multiple stars */}
      {Array.from({ length: 50 }).map((_, i) => (
        <Star key={i} />
      ))}
    </Canvas>
  );
};

export default ShootingStars;
