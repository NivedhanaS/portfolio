import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import { motion } from "framer-motion";

const AnimatedSphere = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={4.5}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

export const Scene3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} color="#B026FF" intensity={2} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};
