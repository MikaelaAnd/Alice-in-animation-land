import React from "react";

export default function Rabbit() {
    const RabbitImage = () => {
        return (
          <mesh position={[0, 2, 0]}>
            <planeBufferGeometry args={[6, 6]}/>
            <meshLambertMaterial color="red" />
          </mesh>
        );
      }
  return <RabbitImage />;
}
