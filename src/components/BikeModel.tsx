import { useMemo } from 'react';
import { useConfiguratorStore } from '../store/useConfiguratorStore';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const BikeModel = () => {
  const { frame, motor, wheels, accessories, color, baseType } = useConfiguratorStore();

  const frameColor = useMemo(() => new THREE.Color(color), [color]);

  useFrame(() => {
    // hook for future subtle animations or physics
  });

  // Placeholder geometry: you’ll swap these with GLTF models later.
  return (
    <group position={[0, 0.5, 0]}>
      {/* Frame */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.2, 0.2, 0.4]} />
        <meshStandardMaterial color={frameColor} metalness={0.4} roughness={0.4} />
      </mesh>

      {/* Seat */}
      <mesh position={[0.1, 0.25, 0]}>
        <boxGeometry args={[0.8, 0.1, 0.4]} />
        <meshStandardMaterial color="#222222" />
      </mesh>

      {/* Front wheel */}
      <mesh position={[0.9, -0.4, 0]} castShadow receiveShadow>
        <torusGeometry args={[0.45, 0.06, 16, 32]} />
        <meshStandardMaterial color={wheels ? '#dddddd' : '#555555'} />
      </mesh>

      {/* Rear wheel */}
      <mesh position={[-0.9, -0.4, 0]} castShadow receiveShadow>
        <torusGeometry args={[0.45, 0.06, 16, 32]} />
        <meshStandardMaterial color={wheels ? '#dddddd' : '#555555'} />
      </mesh>

      {/* Motor block */}
      {motor && (
        <mesh position={[0, -0.1, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.5, 0.3, 0.4]} />
          <meshStandardMaterial color="#8888ff" metalness={0.6} roughness={0.3} />
        </mesh>
      )}

      {/* Simple accessory hints */}
      {accessories.length > 0 && (
        <mesh position={[-0.4, 0.1, -0.3]}>
          <boxGeometry args={[1.0, 0.15, 0.2]} />
          <meshStandardMaterial color="#444444" />
        </mesh>
      )}

      {/* Base type badge */}
      <mesh position={[0, 0.8, 0]}>
        <planeGeometry args={[1.6, 0.4]} />
        <meshBasicMaterial color="#050509" />
      </mesh>
      {/* You can overlay HTML for text instead of 3D text for now */}
    </group>
  );
};
