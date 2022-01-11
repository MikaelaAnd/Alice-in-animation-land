import React from "react";
import styled, { keyframes } from "styled-components";

import Rose from "./images/rose.png";
import Alice from "./images/alice.png";
import Trumpet1 from "./images/trumpet1.png";
import Trumpet2 from "./images/trumpet2.png";
import Flower1 from "./images/flower1.png";
import Flower2 from "./images/flower2.png";
import Flower3 from "./images/flower3.png";
import Flower4 from "./images/flower4.png";
import Dogflower from "./images/dogflower.png";

function Flowers() {
  return (
    <FlowerContent>
      <img src={Alice} alt="Alice sitting on a leaf" height="50%" />
      <Miniflowers>
        <JammingFlower
          src={Trumpet1}
          alt="Jamming trumpet flower"
          height="65%"
          bottom={15}
          left={25}
        />
        <JammingFlower
          src={Trumpet2}
          alt="Jamming trumpet flower"
          height="65%"
          bottom={15}
          left={30}
        />
        <JammingFlower
          src={Dogflower}
          alt="Three dog flowers jamming"
          height="65%"
          bottom={15}
          left={40}
        />
        <JammingFlower src={Flower1} alt="" height="30%" bottom={7} left={30} />
        <JammingFlower src={Flower2} alt="" height="30%" bottom={7} left={35} />
        <JammingFlower src={Flower3} alt="" height="30%" bottom={7} left={43} />
        <JammingFlower src={Flower4} alt="" height="30%" bottom={7} left={48} />
      </Miniflowers>
      <RoseDiv>
        <img src={Rose} alt="A big rose singing" height="100%" />
      </RoseDiv>
    </FlowerContent>
  );
}
export default Flowers;

const FlowerContent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 50%;
  z-index: 1;
  position: relative;
`;

const RoseDiv = styled.div`
  height: 100%;
`;

const moveRight = keyframes`
  0%, 100% {
    transform: rotateZ(-3deg);
    transform-origin: bottom;
  }
  50%{
    transform: rotateZ(3deg);
  }
`;

const moveLeft = keyframes`
  0%, 100% {
    transform: rotateZ(3deg);
    transform-origin: bottom;
  }
  50%{
    transform: rotateZ(-3deg);
  }
`;

const Miniflowers = styled.div`
  display: flex;
  height: 50%;

  > img:nth-child(1),
  > img:nth-child(3),
  > img:nth-child(4) {
    animation: ${moveRight} 2s infinite;
  }
  > img:nth-child(2),
  > img:nth-child(5),
  > img:nth-child(6),
  > img:nth-child(7) {
    animation: ${moveLeft} 2s infinite;
  }
`;

const JammingFlower = styled.img`
  position: absolute;
  bottom: ${(props) => props.bottom}%;
  left: ${(props) => props.left}%;
`;
