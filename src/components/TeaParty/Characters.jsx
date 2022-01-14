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
      <SmokeContainer>
        <Smoke />
        <Smoke />
      </SmokeContainer>
      <CharacterContainer>
        <Bunny>
          <Character src={BunnyImg} alt="Bunnys moving arm" />
          <LeftArm image={BunnyArm} alt="Bunny friend character" />
        </Bunny>
        <MadHatter>
          <RightArm image={ArmImg} alt="Mad Hatters moving arm" />
          <Character src={HatterImg} alt="Mad Hatter character" />
        </MadHatter>
      </CharacterContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
`;

const CharacterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: -1.7rem;
  z-index: 0;
`;

const SmokeContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  z-index: 100;
`;

const MadHatter = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 130px;
`;

const Bunny = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 120px;
`;

const Character = styled.img`
  width: 7.8rem;
  position: relative;
  z-index: 70;
  margin: 0;
  object-fit: contain;
`;

const ArmRight = styled.img`
  width: 5rem;
  left: -3.5rem;
  top: 5rem;
  position: absolute;
`;

const ArmLeft = styled.img`
  width: 8rem;
  right: -6rem;
  top: 4rem;
  position: absolute;
  z-index: 10;
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
