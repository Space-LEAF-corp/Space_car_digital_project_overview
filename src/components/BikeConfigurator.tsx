import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { ThreeScene } from './ThreeScene';

export const BikeConfigurator = () => {
  return (
    <Canvas
      camera={{ position: [4, 2, 6], fov: 45 }}
      style={{ width: '100%', height: '100%' }}
    >
      <color attach="background" args={['#050509']} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} />
      <Environment preset="city" />
      <ThreeScene />
      <OrbitControls enablePan enableZoom enableRotate />
    </Canvas>
  );
};
