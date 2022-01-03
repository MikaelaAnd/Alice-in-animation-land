import {
  Background,
  Bunny,
  MadHatter,
  Character,
  RightArm,
  LeftArm,
  Container,
  Table,
  CharacterContainer,
} from "./styles";
import { Canvas } from "@react-three/fiber";
import HatterImg from "./images/MadHatter.png";
import ArmImg from "./images/Arm.png";
import BunnyImg from "./images/Bunny.png";
import BunnyArm from "./images/BunnyArm.png";
import { Sky, Stars } from "@react-three/drei";

export function TeaParty() {
  return (
    <Background>
      <Canvas>
        <Sky />
        <Stars />
      </Canvas>
      <Container>
        <CharacterContainer>
          <Bunny>
            <Character src={BunnyImg} alt="" />
            <LeftArm image={BunnyArm} alt="" />
          </Bunny>
          <MadHatter>
            <RightArm image={ArmImg} />
            <Character src={HatterImg} alt="" />
          </MadHatter>
        </CharacterContainer>
        <Table />
      </Container>
    </Background>
  );
}
