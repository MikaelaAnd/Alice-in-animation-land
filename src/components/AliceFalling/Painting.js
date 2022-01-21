import styled from "styled-components";
import { BounceComponent } from "./Animations";
import PaintingLeft from "./images/paintingLeft.png";
import PaintingRight from "./images/paintingRight.png";

export function LargePainting() {
  return (
    <Container>
      <BounceComponent image={PaintingLeft} height="15rem" />
    </Container>
  );
}

export function SmallPainting() {
  return (
    <Container>
      <BounceComponent image={PaintingRight} height="5rem" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 80%;
`;
