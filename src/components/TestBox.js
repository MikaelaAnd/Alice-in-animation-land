import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attatch="geometry" />
      <meshLambertMaterial attatch="material" color="hotpink" />
    </mesh>
  );
}

function TestBox() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Box />
    </Canvas>
  );
}

export default TestBox;
