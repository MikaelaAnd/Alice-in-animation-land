import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import Models3D from "./3D-models";
import Grass from "./Grass";
import RestartButton from "./RestartButton";

export default function GardenPlatform({ restart }) {

  return (
    <>
      <CanvasContainer>
        <Canvas camera={{ position: [0, 10, 100] }}>
          <OrbitControls />
          <Sky />
          <ambientLight intensity={1} />
          <pointLight position={[0, 50, 0]} intensity={1} color={"white"} />
          <Grass />
          <Models3D />
        </Canvas>
      </CanvasContainer>
      <RestartButton restart={restart} />
    </>
  );
};

const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
`;