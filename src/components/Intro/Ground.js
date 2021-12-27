import React from "react";

export default function Ground() {
  
  return (
    <mesh position={[0, -8.01, 0]}>
        <cylinderGeometry args={[21, 21, 15, 40]} />
        <meshLambertMaterial color={"#1D1F1D"} />
    </mesh>
  );
}
