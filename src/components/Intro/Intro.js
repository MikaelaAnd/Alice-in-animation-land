import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import CeilingLamp from "./CeilingLamp";
import Rabbit from "./Rabbit";
import RabbitHole from "./RabbitHole";
import Ground from "./Ground";

export default function Intro() {
  const [lightOn, setLightOn] = useState(false);

  setTimeout(() => setLightOn(true), 2000);

  const renderOnLight = () => {
    return (
      <>
        <Ground />
        <RabbitHole />
      </>
    );
  };

  return (
    <CanvasContainer>
      <Canvas camera={{ position: [0, 30, 70] }}>
        <OrbitControls />
        <ambientLight intensity={lightOn ? 0.3 : 0} />
        <Rabbit />
        <CeilingLamp lightOn={lightOn} />
        {lightOn && renderOnLight()}
      </Canvas>
    </CanvasContainer>
  );
}

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
`;
