import HatterImg from "./images/MadHatter.png";
import BunnyImg from "./images/Bunny.png";
import BunnyArm from "./images/BunnyArm.png";
import ArmImg from "./images/Arm.png";
import styled from "styled-components";
import { Bounce } from "./TeaAnimations";
import { Smoke } from "./Smoke";

export function Characters() {
  return (
    <Wrapper>
      <CharacterContainer>
        <Bunny>
          <Character alt="Bunnys moving arm" src={BunnyImg} />
          <BunnyArmContainer>
            <Smoke />
            <LeftArm image={BunnyArm} alt="Bunny friend character" />
          </BunnyArmContainer>
        </Bunny>
        <MadHatter>
          <HatterArmContainer>
            <Smoke />
            <RightArm image={ArmImg} alt="Mad Hatters moving arm" />
          </HatterArmContainer>
          <Character alt="Mad Hatter character" src={HatterImg}  />
        </MadHatter>
      </CharacterContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  flex-direction: column;
`;

const Character = styled.img`
  max-width: 8rem;
  z-index: 1;

  @media (max-width: 820px) {
    width: 11rem;
  }
`;

const CharacterContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
`;

const Bunny = styled.div`
  display: flex;
  justify-content: center;
`;

const BunnyArmContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-top: -1.8rem;
  margin-left: -1.7rem;

  @media (max-width: 768px) {
    margin-top: -1.5rem;
    margin-left: -2.2rem;
  }
  @media (max-width: 820px) {
    margin-top: -1.4rem;
    margin-left: -2rem;
  }
`;

const MadHatter = styled.div`
  display: flex;
  justify-content: center;
`;

const HatterArmContainer = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
margin-top: -2rem;
margin-right: -1.6rem;

@media (max-width: 768px) {
  margin-top: -2.-2.rem;
}

@media (max-width: 820px) {
  margin-top: -1.9rem;
  margin-right: -1.8rem;
  }
`;

const ArmRight = styled.img`
  max-width: 6rem;

  @media (max-width: 820px) {
    width: 9rem;
  }
`;

const ArmLeft = styled.img`
  max-width: 8rem;

  @media (max-width: 820px) {
    width: 13rem;
  }
`;

function RightArm({ image }) {
  return (
    <Bounce>
      <ArmRight src={image} alt="" />
    </Bounce>
  );
}
function LeftArm({ image }) {
  return (
    <Bounce>
      <ArmLeft src={image} alt="" />
    </Bounce>
  );
}
