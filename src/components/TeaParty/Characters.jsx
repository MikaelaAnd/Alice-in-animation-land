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
          <Character alt="Bunnys moving arm" src={BunnyImg} width={"7rem"} />
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
          <Character alt="Mad Hatter character" src={HatterImg} width={"8rem"}  />
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
  width: ${(props) => props.width};
  z-index: 1;
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
  margin-top: -2rem;
  margin-left: -1.5rem;
`;

const MadHatter = styled.div`
  display: flex;
  justify-content: center;
`;

const HatterArmContainer = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
margin-top: -2.7rem;
margin-right: -1.6rem;
`;

const ArmRight = styled.img`
  width: 6rem;
`;

const ArmLeft = styled.img`
  width: 8rem;
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
