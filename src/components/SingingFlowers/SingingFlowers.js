import styled, { keyframes } from "styled-components";
import React from "react";
import Flowers from "./Flowers";
import CanvasBackground from "./CanvasBackground";

import FlowersBackground from "./assets/background-flowers.png";
import BigFLowers from "./assets/big-flowers.png";

function SingingFlowers() {
  return (
    <Root>
      <CanvasBackground />

      <BigBackgroundImage
        src={FlowersBackground}
        alt="Many green stems"
        height="100%"
      />
      <BigBackgroundImage
        src={BigFLowers}
        alt="Big red flowers"
        height="100%"
      />

      <Flowers />
    </Root>
  );
}
export default SingingFlowers;

const Root = styled.div`
  /* background: url();
  background-size: cover;
  background-repeat: no-repeat; */
  background: gray;
  height: calc(100vh + 5.5rem);
  /* height: 100vh; */
  display: flex;
  /* flex-direction: column; */
  align-items: flex-end;
  position: relative;
`;

const BigBackgroundImage = styled.img`
  position: absolute;
  pointer-events: none;
  width: 100%;
`;

const FlowerContent = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 50%;
  z-index: 1;
  /* background: blue; */
`;

const RoseDiv = styled.div`
  height: 100%;
  /* background: red; */
`;

const move = keyframes`
    0%{
        transform: rotateZ(-3deg);
        transform-origin: bottom;
    }
    50%{
        transform: rotateZ(3deg);
        transform-origin: bottom;
    }
    100%{
        transform: rotateZ(-3deg);
        transform-origin: bottom;
    }
`;

const Miniflowers = styled.div`
  display: flex;
  height: 50%;
  /* background: pink; */

  > img {
    animation: ${move} 2s infinite;
  }
`;
