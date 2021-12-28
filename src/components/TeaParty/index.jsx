import { Background } from "./styles";
import { Canvas } from "@react-three/fiber";

import { Sky, Stars } from "@react-three/drei";

// PLANE SOM BORD FÖR ATT SKY SER UT SOM HIMMEL

export function TeaParty() {
  return (
    <Background>
      <Canvas camera={{ position: [0, 0, 0], fov: 80 }}>
        <Sky />
        <Stars />
      </Canvas>
    </Background>
  );
}

export const Box1 = () => {
  return (
    <mesh position={[0, -13, 0]}>
      <cylinderGeometry args={[30, 30, 3, 30]} />
      <meshLambertMaterial color={"blue"} />
    </mesh>
  );
};
