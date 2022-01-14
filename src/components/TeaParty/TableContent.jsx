import styled from "styled-components";
import { TeaDrops } from "./TeaDrops";
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
        index={80}
        justify={"center"}
        direction={"column"}
      >
        <TriplePotAndCups />
      </PositionThing>
      <PositionThing
        align={"center"}
        index={70}
        justify={"center"}
      >
        {[...new Array(3)].map((index) => (
          <TeaDrops key={index} />
        ))}
      </PositionThing>
      <PositionThing justify={"flex-start"}>
        <TeaPotMouse />
      </PositionThing>
    </>
  );
}

const TableDiv = styled.div`
  background-color: #ca9088;
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
  z-index: ${(props) => props.index};
  margin-left: ${(props) => props.left};
  margin-right: ${(props) => props.right};
`;
