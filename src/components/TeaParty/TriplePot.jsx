import styled, { css } from "styled-components";
import { Bounce } from "./TeaAnimations";
import TriplePot from "./images/PouringPot.png";
import TripleCups from "./images/TripleCups.png";
import { Smoke } from "./Smoke";

export function TriplePotAndCups() {
  return (
    <>
      <Bounce>
        <Thing
          src={TriplePot}
          alt="Pot with three pour canals"
          width={"10rem"}
          height={"auto"}
        />
      </Bounce>
      <SmokeContainer>
        <Smoke />
        <Smoke />
        <Smoke />
      </SmokeContainer>
      <Thing
        src={TripleCups}
        alt="Three cups in different colors"
        width={"9rem"}
        height={"auto"}
      />
    </>
  );
}

const SmokeContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  z-index: 100;
  width: 7rem;
`;

const Thing = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  z-index: 80;
  margin: ${(props) => props.margin};
  :hover {
    ${(props) =>
      props.hover
        ? css`
            background-color: rgba(255, 255, 255, 0.351);
            box-shadow: 0px 0px 5px #fff;
            border-radius: 70rem;
          `
        : ""}
  }
`;
