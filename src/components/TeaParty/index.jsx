import { Background } from "./styles";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export function TeaParty() {
  return (
      <Background>
          <Canvas>
              <Box1 />
          </Canvas>
    </Background>
  );
}

export const Box1 = (props) => {
  const boxRef = useRef();
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  useFrame(() => {
    if (hover) {
      boxRef.current.position.y += 0.01;
    }
  });

  return (
    <group ref={boxRef} position={props.position}>
      <mesh
        onClick={() => {
          setActive(!active);
        }}
        onPointerOver={() => {
          setHover(true);
        }}
        onPointerOut={() => {
          setHover(false);
        }}
      >
        <boxGeometry attach="geometry" />
        <meshLambertMaterial
          attach="material"
          color={active ? "green" : "red"}
        />
      </mesh>
    </group>
  );
};
