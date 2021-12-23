import React from "react";

export default function Ground() {
  const Circle = () => {
    return (
      <mesh position={[0, -0.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[25, 30]} />
        <meshLambertMaterial color={"#1D1F1D"} />
      </mesh>
    );
  };
  return <Circle />;
}
