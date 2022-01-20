import styled from "styled-components";
import { TableContent } from "./TableContent";

export function Table() {
  return (
    <Container>
      <TableDiv>
        <TableContent />
      </TableDiv>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;

const TableDiv = styled.div`
  background-color: #ca9088;
  width: 100%;
  height: 17rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  padding-bottom: 2rem;
  
  @media (min-height: 1024px) {
    height: 23rem;
  }
  @media (min-height: 1080px) {
    height: 25rem;
  }
  @media (min-height: 1180px) {
    height: 28rem;
  }
  @media (min-height: 1600px) {
    height: 42rem;
  }
`;
