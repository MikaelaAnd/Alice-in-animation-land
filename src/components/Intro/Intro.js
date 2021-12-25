import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import CeilingLamp from "./CeilingLamp";
import Rabbit from "./Rabbit";
import RabbitHole from "./RabbitHole";
import Ground from "./Ground";

export default function Intro() {
  
  return (
    <CanvasContainer>
      <Canvas camera={{ position: [0, 30, 70] }}>
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <Ground />
        <Rabbit />
        <RabbitHole />
        <CeilingLamp />
      </Canvas>
    </CanvasContainer>
  );
}

const CanvasContainer = styled.div`
  width: 100vw;
  height: 90vh;
  background: black;
`;
