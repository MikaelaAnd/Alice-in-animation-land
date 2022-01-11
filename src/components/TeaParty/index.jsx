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
  DrunkMouseContainer,
  Bounce,
  Frame,  
} from "./styles";
import { useState } from "react";
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
import TripleCups from "./images/TripleCups.png";
import BackgroundFrame from "./images/Frame.png";

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
      <Frame src={BackgroundFrame} alt="" />
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

        <PositionThing justify={"flex-end"}>
          <Thing
            alt="Pocket watch"
            height={"auto"}
            hover
            onClick={BreakClock}
            width={"9rem"}
            src={PocketWatch}
            margin={"0 23rem 1rem 0"}
          />
        </PositionThing>
        <PositionThing justify={"flex-center"} margin="0 0 1rem 0rem">
          {isClicked ? (
            <PositionThing justify={"flex-start"}>
              <DrunkMouseContainer src={DrunkMouse} alt="Drunk Teapot Mouse" />
            </PositionThing>
          ) : null}
          <Thing
            alt="Teacup"
            height={"auto"}
            hover
            onClick={handleClick}
            src={TeaPotWithLid}
            width={"7rem"}
            margin={"0 0 2rem 25rem"}
          />
        </PositionThing>

        <PositionThing
          align={"center"}
          justify="center"
          margin="0 0 1rem 0"
          direction={"column"}
        >
          <Bounce>
            <Thing
              src={TriplePot}
              alt="Pot with three pour canals"
              width={"10rem"}
              height={"auto"}
         
              />
          </Bounce>
          <Thing
            src={TripleCups}
            alt="Three cups in different colors"
            width={"9rem"}
            height={"auto"}
          />
        </PositionThing>
      </Container>
    </Background>
  );
}
