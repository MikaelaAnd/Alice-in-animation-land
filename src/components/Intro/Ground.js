import { useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from 'three';

export default function Ground() {
  const zoom = true;

  useFrame((state) => {
    const step = 0.01;
    state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, zoom ? 50 : 100, step);
    state.camera.updateProjectionMatrix();
  });
  
  return (
    <mesh position={[0, -8.05, 0]}>
        <cylinderGeometry args={[21, 21, 15, 40]} />
        <meshLambertMaterial color={"#1D1F1D"} />
    </mesh>
  );
}
