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
  height: 34%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  padding-bottom: 2rem;
`;
