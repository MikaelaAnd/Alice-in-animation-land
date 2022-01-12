import styled from "styled-components";
import { TeaPotMouse } from "./TeaPotMouse";
import { TriplePotAndCups } from "./TriplePot";
import { Watch } from "./Watch";

export function TableContent() {
  return (
    <>
      <TableDiv />
      <PositionThing justify={"flex-end"}>
        <Watch />
      </PositionThing>
      <PositionThing
        align={"center"}
        justify={"center"}
        margin={"0 0 1rem 0"}
        direction={"column"}
      >
        <TriplePotAndCups />
      </PositionThing>
      <PositionThing justify={"flex-start"}>
        <TeaPotMouse />
      </PositionThing>
    </>
  );
}

const TableDiv = styled.div`
  background-color: #ca9088;
  bottom: 0;
  width: 100%;
  height: 8rem;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  z-index: 0;
`;

const PositionThing = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  width: 100%;
  position: absolute;
`;
