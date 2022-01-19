import React, { Suspense } from "react";
import styled from "styled-components";
import CanvasBackground from "./CanvasBackground";
import SandwichBird from "./SandwichBird";
import Flowers from "./Flowers";
import FrontStems from "./images/front-stems.png";
import BigFLowers from "./images/big-flowers.png";
import BackStems from "./images/back-stems.png";
import Net from "./images/net.png";

function SingingFlowers() {
  return (
    <Root>
      <Suspense fallback={<h2>Loading...</h2>}>
        <CanvasBackground />
      </Suspense>
      <BigBackgroundImage
        src={BackStems}
        alt="Many green stems"
        height="100%"
      />
      <SandwichBird />
      <BigBackgroundImage
        src={FrontStems}
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
  position: relative;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  cursor: url(${Net}) 40 40, auto;

  @media (max-width: 800px) {
    overflow: hidden;
  }
`;

const BigBackgroundImage = styled.img`
  position: absolute;
  pointer-events: none;
  width: 100%;

  @media (max-width: 800px) {
    width: auto;
  }
`;
