import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Cloud } from "@react-three/drei";
import { Center, PerspectiveCamera } from "@react-three/drei";

function CanvasBackground() {
  return (
    <CanvasContainer>
      <Canvas>
        <PerspectiveCamera makeDefault position={[3, 0, 10]} />
        <Center>
          <Cloud position={[-4, -2, 0]} args={[3, 2]} color={"white"} />
        </Center>
      </Canvas>
    </CanvasContainer>
  );
}
export default CanvasBackground;

const CanvasContainer = styled.div`
  background: #154f19;
  /* background: #808bed; */
  position: absolute;
  height: 100vh;
  width: 100%;
`;
