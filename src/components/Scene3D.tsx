import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import { motion } from "framer-motion";

const AnimatedSphere = () => {
  return (
    <Float speed={1.0} rotationIntensity={0.3} floatIntensity={0.4}>
      <Sphere args={[1, 100, 200]} scale={2.0} position={[-0, -1.7, 0.5]}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort= {0.35}
          speed={1}
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
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} color="#B026FF" intensity={2} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.2} />
      </Canvas>
    </div>
  );
};
