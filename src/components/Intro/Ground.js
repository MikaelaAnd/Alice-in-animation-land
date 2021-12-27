import React from "react";

export default function Ground() {
  
  return (
    <mesh position={[0, -1.55, 0]}>
        <cylinderGeometry args={[21, 21, 2, 40]} />
        <meshLambertMaterial color={"#1D1F1D"} />
    </mesh>
  );
}
