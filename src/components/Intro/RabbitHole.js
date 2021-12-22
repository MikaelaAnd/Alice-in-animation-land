import React from "react";

export default function RabbitHole() {
  function Circle() {
    return (
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[5, 30]} />
        <meshBasicMaterial color="#141514" />
      </mesh>
    );
  }
  return <Circle />;
}
