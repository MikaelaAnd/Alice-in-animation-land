import styled, { keyframes } from "styled-components";
import TriplePot from "./images/PouringPot.png";
import BlueCup from "./images/BlueCup.png";
import YellowCup from "./images/YellowCup.png";
import PinkCup from "./images/PinkCup.png";
import { TeaDrops } from "./TeaDrops";

export function TriplePotAndCups() {
  return (
    <Container>
      <TeaPot alt="Pot with three pour canals" src={TriplePot} />
      <TeaDropContainer>
        {[...new Array(3)].map((index) => (
          <TeaDrops key={index} />
        ))}
      </TeaDropContainer>
      <CupContainer>
        <CupWrap>
          <Cup src={BlueCup} alt={"Blue cup"} />
        </CupWrap>
        <CupWrap>
          <Cup src={YellowCup} alt={"Yellow cup"} />
        </CupWrap>
        <CupWrap>
          <Cup src={PinkCup} alt={"Pink cup"} />
        </CupWrap>
      </CupContainer>
    </Container>
  );
}

export const bounce = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const TeaPot = styled.img`
  animation: ${bounce} 2s linear infinite;
  width: 100%;
  z-index: 1;
`;

const TeaDropContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 2rem;
`;

const CupContainer = styled.div`
  display: flex;
  width: 100%;
`;

const CupWrap = styled.div`
  flex: 1;
`;

const Cup = styled.img`
  width: 100%;
`;
