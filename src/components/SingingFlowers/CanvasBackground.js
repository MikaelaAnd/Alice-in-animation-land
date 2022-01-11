import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import React from "react";
// import Stem from "./Stem";
import { Cloud } from "@react-three/drei";
import {
  Center,
  //   OrthographicCamera,
  //   PerspectiveCamera,
} from "@react-three/drei";

function CanvasBackground() {
  return (
    <CanvasContainer>
      <Canvas>
        {/* <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={70} /> */}
        {/* <PerspectiveCamera makeDefault position={[3, 0, 10]} /> */}
        <Center>
          <Cloud position={[-4, -2, 0]} args={[3, 2]} />
        </Center>
      </Canvas>
    </CanvasContainer>
  );
}
export default CanvasBackground;

const CanvasContainer = styled.div`
  background: #5a3552;
  position: absolute;
  height: 100vh;
  width: 100%;
  // {hovered ? aktuell stem = z-index: +1}
`;
