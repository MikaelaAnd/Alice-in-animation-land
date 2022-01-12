import { CanvasContainer } from "./CanvasContainer";
import BackgroundFrame from "./images/Frame.png";
import { Characters } from "./Characters";
import { TableContent } from "./TableContent";
import styled from "styled-components";

export function TeaParty() {
  return (
    <Wrapper>
      <WoodFrame src={BackgroundFrame} alt="Frame made of wood" />
      <CanvasContainer />
      <Container>
        <Characters />
        <TableContent />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  position: relative;
`;

const WoodFrame = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 80;
  object-fit: fill;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
