import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import styled from "styled-components";
import Models3D from "./3D-models";
import Grass from "./Grass";
import RestartButton from "./RestartButton";
import Text from "./Text";

export default function GardenPlatform({ restart }) {
  const [removeText, setRemoveText] = useState(false)
  return (
    <>
      <CanvasContainer onMouseDown={() => setRemoveText(true)}>
        <Canvas camera={{ position: [0, 10, 100] }}>
          <OrbitControls />
          <Sky />
          <ambientLight intensity={1} />
          <pointLight position={[0, 50, 0]} intensity={1.5} color={"white"} />
          <Grass />
          <Models3D />
        </Canvas>
      </CanvasContainer>
      <Text removeText={removeText} />
      <RestartButton restart={restart} />
    </>
  );
};

const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
`;