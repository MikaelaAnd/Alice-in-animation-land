import React from "react";
import styled, { keyframes } from "styled-components";
import Flowers from "./Flowers";
import CanvasBackground from "./CanvasBackground";

import FlowersBackground from "./assets/background-flowers.png";
import BigFLowers from "./assets/big-flowers.png";
import Sandwish1 from "./assets/sandwich1.png";
import Sandwish2 from "./assets/sandwich2.png";
import Sandwish3 from "./assets/sandwich3.png";

function SingingFlowers() {
  return (
    <Root>
      <CanvasBackground />

      <Fly
        x1={90}
        x2={10}
        y1={5}
        y2={40}
        flip={flipStartingRight}
        src={Sandwish3}
        alt="Flying sandwich in the background"
        height="5%"
        style={{ background: "blue", zIndex: 0 }}
      />

      <Fly
        x1={10}
        x2={90}
        y1={20}
        y2={30}
        flip={flipStartingLeft}
        src={Sandwish3}
        alt="Flying sandwich in the background"
        height="9%"
        style={{ background: "hotpink", zIndex: 1 }}
      />

      <BigBackgroundImage
        src={FlowersBackground}
        alt="Many green stems"
        height="100%"
      />

      <Fly
        x1={45}
        x2={90}
        y1={30}
        y2={60}
        flip={flipStartingLeft}
        src={Sandwish2}
        alt="Flying sandwich in the background"
        height=""
      />
      <Fly
        x1={90}
        x2={30}
        y1={40}
        y2={20}
        flip={flipStartingRight}
        src={Sandwish1}
        alt="Flying sandwich in the background"
        height=""
      />

      <BigBackgroundImage
        src={BigFLowers}
        alt="Big red flowers"
        height="100%"
        style={{ zIndex: 1 }}
      />

      <Flowers />
    </Root>
  );
}
export default SingingFlowers;

const Root = styled.div`
  background: gray;
  height: calc(100vh + 5.5rem);
  /* height: 100vh; */
  display: flex;
  align-items: flex-end;
  position: relative;
`;

const BigBackgroundImage = styled.img`
  position: absolute;
  pointer-events: none;
  width: 100%;
`;

const flying = (p) => keyframes`
  0%, 100% {
    left: ${p.x1}% ; 
    top: ${p.y1}% ;
  }
  50% {
    left: ${p.x2}% ; 
    top: ${p.y2}% ;
  }
`;

const flipStartingLeft = keyframes`
  0%, 49%, 100% {
    transform: rotateY(180deg);
  }
  50%, 99%{
    transform: rotateY(0deg);
  }
`;

const flipStartingRight = keyframes`
  0%, 49%, 100% {
    transform: rotateY(0deg);
  }
  50%, 99%{
    transform: rotateY(180deg);
  }
`;

const Fly = styled.img`
  position: absolute;
  animation: ${flying} 26s infinite linear, ${(p) => p.flip} 26s infinite;
`;
