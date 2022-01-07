import React from "react";
import styled, { keyframes } from "styled-components";

// import Rose from "./assets/rose.png";
import Rose from "./assets/rose-after-fill.png";
import Alice from "./assets/alice.png";
import Trumpet1 from "./assets/trumpet1.png";
import Trumpet2 from "./assets/trumpet2.png";
import Flower1 from "./assets/flower1.png";
import Flower2 from "./assets/flower2.png";
// import Flower3 from "./assets/flower3.png";

function Flowers() {
  return (
    <FlowerContent>
      <img src={Alice} alt="" height="50%" />
      <Miniflowers>
        <img src={Trumpet1} alt="" height="100%" />
        <img src={Trumpet2} alt="" height="100%" />
        <img src={Flower1} alt="" height="100%" />
        <img src={Flower2} alt="" height="100%" />
        {/* <img src={Flower3} alt="" height="100%" /> */}
      </Miniflowers>
      <RoseDiv>
        <img src={Rose} alt="" height="100%" />
      </RoseDiv>
    </FlowerContent>
  );
}
export default Flowers;

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
