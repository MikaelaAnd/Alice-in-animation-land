import styled from "styled-components";
import { TeaPotMouse } from "./TeaPotMouse";
import { TriplePotAndCups } from "./TriplePot";
import { Watch } from "./Watch";

export function TableContent() {
  return (
    <Container>
      <TeaPotMouse />
      <TriplePotAndCups />
      <Watch />
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  max-width: 30%;

  @media (max-width: 820px) {
    max-width: 90%;
  }
`;
