import styled from "styled-components";
import { Bounce } from "./TeaAnimations";
import TriplePot from "./images/PouringPot.png";
import BlueCup from "./images/BlueCup.png";
import YellowCup from "./images/YellowCup.png";
import PinkCup from "./images/PinkCup.png";

export function TriplePotAndCups() {
  return (
    <>
      <Bounce>
        <Thing
          src={TriplePot}
          alt="Pot with three pour canals"
          width={"11rem"}
          height={"auto"}
        />
      </Bounce>
      <PositionThing justify={"center"}>
        <Thing
          src={BlueCup}
          alt={"Blue cup"}
          width={"5rem"}
          height={"auto"}
          index={90}
        />
        <Thing
          src={YellowCup}
          alt={"Yellow cup"}
          left={"-2rem"}
          width={"5rem"}
          height={"auto"}
          index={80}
        />
        <Thing
          src={PinkCup}
          alt={"Pink cup"}
          left={"-2rem"}
          width={"5rem"}
          height={"auto"}
        />
      </PositionThing>
    </>
  );
}

const Thing = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  z-index: ${(props) => props.index};
  margin-left: ${(props) => props.left};
  margin-right: ${(props) => props.right};
`;

const PositionThing = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  flex-direction: row;
  align-items: ${(props) => props.align};
`;
