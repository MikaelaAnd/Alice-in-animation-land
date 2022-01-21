import greenLamp from "./images/greenLamp.png";
import yellowLamp from "./images/yellowLamp.png";
import flowerLamp from "./images/flowerLamp.png";
import { BounceComponent, PulseComponent } from "./Animations";
import styled from "styled-components";

export function GreenLamp() {
  return (
    <Container>
      <PulseComponent image={greenLamp} width="4rem" height="5rem" />
    </Container>
  );
}

export function FlowerLamp() {
  return (
    <Container>
      <BounceComponent image={flowerLamp} width="4rem" height="5rem" />
    </Container>
  );
}

export function YellowLamp() {
  return (
    <Container>
      <PulseComponent image={yellowLamp} width="3rem" height="4rem" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 80%;
`;
