import React from "react";
import styled from "styled-components";
import CanvasBackground from "./CanvasBackground";
import SandwichBird from "./SandwichBird";
import Flowers from "./Flowers";
import FlowersBackground from "./assets/background-flowers.png";
import BigFLowers from "./assets/big-flowers.png";

function SingingFlowers() {
  return (
    <Root>
      <CanvasBackground />
      <SandwichBird />
      <BigBackgroundImage
        src={FlowersBackground}
        alt="Many green stems"
        height="100%"
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
