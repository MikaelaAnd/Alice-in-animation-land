import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from 'three';

export default function RabbitHole({ zoom }) {
  const circleRef = useRef();

  
  useFrame((state) => {
    const step = 0.1;
    state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, zoom ? 1 : 50, step);
    state.camera.updateProjectionMatrix();    
  });

  const circleSize = () => {
    if (zoom) {
      return [26, 30]
    } else {
      return [5, 30]
    }
  };
  
  
  return (
    <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry ref={circleRef} args={circleSize()} />
      <meshBasicMaterial color={'black'}>
        
      </meshBasicMaterial>
    </mesh>
    
  );
}