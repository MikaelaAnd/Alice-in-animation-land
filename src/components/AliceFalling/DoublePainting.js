import styled from "styled-components";
import { BounceComponent, PulseComponent } from "./Animations";
import largeDoublePainting from "./images/doublePaintingLeft.png";
import smallDoublePainting from "./images/doublePaintingRight.png";


export function LargeDoublePainting() {
  return (
    <Container>
      <BounceComponent image={largeDoublePainting} width="13rem" />
    </Container>
  );
}
export function SmallDoublePainting() {
  return (
    <Container>
      <PulseComponent image={smallDoublePainting} width="5rem" />
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    width: 80%;
`;