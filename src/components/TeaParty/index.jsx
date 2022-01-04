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
  Thing,
  PositionThing,
} from "./styles";
import { Canvas } from "@react-three/fiber";
import { Sky, Stars } from "@react-three/drei";
import HatterImg from "./images/MadHatter.png";
import ArmImg from "./images/Arm.png";
import BunnyImg from "./images/Bunny.png";
import BunnyArm from "./images/BunnyArm.png";
import PocketWatch from "./images/PocketWatch.png";
import BrokenPocketWatch from "./images/BrokenPocketWatch.png";

export function TeaParty() {
  const BreakClock = (e) => {
    e.target.setAttribute("src", `${BrokenPocketWatch}`);
    e.target.setAttribute("alt", "Broken pocket watch");
  };

  return (
    <Background>
      <Canvas>
        <Sky />
        <Stars />
      </Canvas>
      <Container>
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
        <Table />
        <PositionThing position={"flex-end"}>
          <Thing
            alt="Pocket watch"
            height={"auto"}
            onClick={BreakClock}
            width={"12rem"}
            src={PocketWatch}
          />
        </PositionThing>
      </Container>
    </Background>
  );
}
