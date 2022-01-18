import LeftWoodFrame from "./images/LeftWoodFrame.png";
import RightWoodFrame from "./images/RightWoodFrame.png";
import styled from "styled-components";

export function FrameContainer() {
  return (
    <Container>
      <WoodFrame alt="Frame made of wood" src={LeftWoodFrame} />
      <WoodFrame alt="Right wood frame" src={RightWoodFrame} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  z-index: 90;
  position: absolute;
  pointer-events: none;
  overflow: hidden;
`;

const WoodFrame = styled.img`
  display: flex;
  max-width: 50%;
  height: 100%;

  @media (max-width: 820px) {
    display: none;
  }
`;
