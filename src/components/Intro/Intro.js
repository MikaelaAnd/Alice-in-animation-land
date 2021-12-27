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
        <Rabbit />
      </>
    );
  };

  return (
    <>
      <CanvasContainer>
        <Canvas camera={{ position: [0, 30, 70] }}>
          <OrbitControls />
          <ambientLight intensity={lightOn ? 0.3 : 0} />
          <CeilingLamp lightOn={lightOn} />
          {lightOn && renderOnLight()}
        </Canvas>
      </CanvasContainer>
      <TitleTextLarge>Alice</TitleTextLarge>
      <TitleTextSmall>in animation land</TitleTextSmall>
    </>
  );
}
 
const CanvasContainer = styled.div`
  width: 100vw;
  height: 90vh;
  background: black;
`;
 
const TitleTextLarge = styled.p`
  position: absolute;
  bottom: 6rem;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  font-family: "TitleFont";
  font-size: 5rem;
  user-select: none;
`;
 
const TitleTextSmall = styled.p`
  position: absolute;
  bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  font-family: "TitleFont";
  font-size: 4rem;
  user-select: none;
`;
