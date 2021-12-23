import { GradientTexture } from "@react-three/drei";
import React from "react";

export default function RabbitHole() {
  return (
    <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[5, 30]} />
      <meshBasicMaterial>
        <GradientTexture
          stops={[0, 0.4, 0.6, 1]}
          colors={["#EEF20A", "#F2420A", "#F20A34", "#EE0AF2"]}
        />
      </meshBasicMaterial>
    </mesh>
  );
}
