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
  TeaCup,
  DrunkMouseContainer,
} from "./styles";
import { Canvas } from "@react-three/fiber";
import { Sky, Stars } from "@react-three/drei";
import HatterImg from "./images/MadHatter.png";
import ArmImg from "./images/Arm.png";
import BunnyImg from "./images/Bunny.png";
import BunnyArm from "./images/BunnyArm.png";
import PocketWatch from "./images/PocketWatch.png";
import BrokenPocketWatch from "./images/BrokenPocketWatch.png";
import DrunkMouse from "./images/DrunkMouse.png";
import TeaPotLidless from "./images/TeaPotLidLess.png";
import TeaPotWithLid from "./images/TeaPotWithLid.png";
import TriplePot from "./images/PouringPot.png";
import { useState } from "react";

export function TeaParty() {
  const [isClicked, setIsClicked] = useState(false);
  const BreakClock = (e) => {
    e.target.setAttribute("src", `${BrokenPocketWatch}`);
    e.target.setAttribute("alt", "Broken pocket watch");
  };

  const handleClick = (e) => {
    e.target.setAttribute("src", `${TeaPotLidless}`);
    setIsClicked(!isClicked);
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
        <TeaCup>
          {isClicked ? (
            <PositionThing position={"flex-start"}>
              <DrunkMouseContainer src={DrunkMouse} alt="Drunk Teapot Mouse" />
            </PositionThing>
          ) : null}
          <PositionThing position={"flex-start"}>
            <Thing
              alt="Teacup"
              height={"9.5rem"}
              onClick={handleClick}
              src={TeaPotWithLid}
              width={"12rem"}
            />
          </PositionThing>
        </TeaCup>
        <PositionThing position="center" margin="0 0 1rem 0">
          <Thing
            src={TriplePot}
            alt="Triple teapot and cups"
            width={"12rem"}
            height={"13rem"}
          />
        </PositionThing>
      </Container>
    </Background>
  );
}
