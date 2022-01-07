import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Stem from "./Stem";
import { OrbitControls } from "@react-three/drei";
import {
  Center,
  OrthographicCamera,
  // PerspectiveCamera,
} from "@react-three/drei";

function CanvasBackground() {
  // const TotalStems = () => {
  const oneStem = 32;
  let windowSize = window.innerWidth;
  const numberOfStems = windowSize / oneStem;
  let allStems = [];

  for (let i = 0; i < numberOfStems; i++) {
    allStems.push(i);
  }
  // }

  return (
    <CanvasContainer>
      <Canvas>
        <OrbitControls />
        <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={70} />
        {/* <PerspectiveCamera makeDefault position={[0, 0, 10]} /> */}
        <Center alignBottom>
          <mesh>
            {allStems.map((positionX, index) => (
              <Stem x={positionX} key={index} />
            ))}
          </mesh>
        </Center>
      </Canvas>
    </CanvasContainer>
  );
}
export default CanvasBackground;

const CanvasContainer = styled.div`
  background: black;
  position: absolute;
  width: 100%;
  z-index: 0;
  height: 100vh;
  // {hovered ? aktuell stem = z-index: +1}
`;
