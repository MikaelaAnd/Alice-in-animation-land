import { useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from 'three';

export default function Grass() {
    const zoom = true;

  useFrame((state) => {
    const step = 0.01;
    state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, zoom ? 25 : 300, step);
    state.camera.updateProjectionMatrix();
  });

  return (
    <mesh position={[0, -14.2, 0]}>
      <cylinderGeometry args={[40, 40, 25, 40]} />
      <meshLambertMaterial color={"#1B512A"} />
    </mesh>
  );
}
