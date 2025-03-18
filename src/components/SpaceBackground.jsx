import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// Shooting Star Component
const ShootingStar = () => {
  const meshRef = useRef();
  const speed = useMemo(() => Math.random() * 0.02 + 0.005, []);
  const position = useMemo(() => [Math.random() * 10 - 5, Math.random() * 5 - 2, -5], []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.x += speed;
      if (meshRef.current.position.x > 5) {
        meshRef.current.position.x = -5;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.02, 16, 16]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};

// Space Background Component
const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 -z-50">
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* Deep Space Background */}
        <color attach="background" args={["#000000"]} />
        
        {/* Galaxy Stars */}
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade />

        {/* Shooting Stars */}
        {[...Array(10)].map((_, i) => (
          <ShootingStar key={i} />
        ))}

        {/* Orbit Controls for slight movement */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default SpaceBackground;

