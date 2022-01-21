import styled from "styled-components";
import { BounceComponent } from "./Animations";
import darkTeaPot from "./images/teaPotDark.png";
import lightTeaPot from "./images/teaPotLight.png";

export function DarkTeaPot() {
  return (
    <Container>
      <BounceComponent image={darkTeaPot} width="5rem" />
    </Container>
  );
}

export function LightTeaPot() {
  return (
    <Container>
      <BounceComponent image={lightTeaPot} width="7rem" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 80%;
`;