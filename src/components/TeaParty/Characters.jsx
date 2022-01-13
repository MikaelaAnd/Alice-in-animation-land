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
  flex-direction: row;
  justify-content: center;
  margin-bottom: -1.5rem;
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
  height: 20rem;
  width: auto;
  position: relative;
  z-index: 70;
  margin: 0;
  object-fit: contain;
`;

const ArmRight = styled.img`
  height: auto;
  width: 7rem;
  left: -5rem;
  top: 5.2rem;
  position: absolute;
`;

const ArmLeft = styled.img`
  height: auto;
  width: 11rem;
  right: -8rem;
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
