import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import CeilingLamp from "./CeilingLamp";
import Rabbit from "./Rabbit";
import Ground from "./Ground";
import RabbitHole from "./RabbitHole";
import Title from "./Title";
import Text from "./Text";
import Button from "./Button";

export default function Intro() {
  const [lightOn, setLightOn] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [showRabbit, setShowRabbit] = useState(true);

  if (!clicked) {
    setTimeout(() => setLightOn(true), 5000);
  };

  const handleClick = () => {
    setShowRabbit(false);
    setClicked(true);
    setTimeout(() => setLightOn(false), 800);
  };

  const renderOnLight = () => {
    return (
      <>
        <Ground />
        <RabbitHole zoom={clicked} />
        <Rabbit show={showRabbit} />
      </>
    );
  };

  return (
    <>
      <CanvasContainer>
        <Canvas camera={{ position: [0, 30, 100], fov: 100 }}>
          {!clicked && <OrbitControls />}
          <ambientLight intensity={lightOn ? 0.3 : 0} />
          <CeilingLamp lightOn={lightOn} />
          {lightOn && renderOnLight()}
        </Canvas>
      </CanvasContainer>
      <Title hideText={clicked} />
      <Text toggleText={clicked} />
      <Button hideButton={clicked} onClick={() => handleClick()} />
    </>
  );
}

const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
`;
