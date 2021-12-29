import React from "react";

export default function CeilingLamp({ lightOn }) {
  const Lamp = () => {
    return (
      <>
        {/* Wire */}
        <mesh position={[0, 45, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 20]} />
          <meshBasicMaterial color={"#202220"} />
        </mesh>
        {/* LampBox */}
        <mesh position={[0, 34, 0]}>
          <cylinderGeometry args={[1.3, 1.3, 2, 15]} />
          <meshBasicMaterial color={"#282928"} />
        </mesh>
        {/* LampShade */}
        <mesh position={[0, 32, 0]}>
          <cylinderGeometry args={[2, 4, 2, 15]} />
          <meshBasicMaterial color={"#2D2F2D"} />
        </mesh>
        {/* Bulb */}
        <mesh position={[0, 31, 0]}>
          <sphereGeometry args={[1]} />
          <meshBasicMaterial color={"white"} />
        </mesh>
      </>
    );
  };
  return (
    <>
      <Lamp />
      <pointLight intensity={lightOn ? 5 : 0} color={"white"}>
        {lightOn && (
          <mesh position={[0, 15, 0]}>
            <coneGeometry args={[20, 34, 30]} />
            <meshPhongMaterial
              color={'white'}
              opacity={0.1}
              transparent
            />
          </mesh>
        )}
      </pointLight>
    </>
  );
}
