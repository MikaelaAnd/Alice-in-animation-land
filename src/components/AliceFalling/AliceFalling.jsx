import React from "react";
import greenLamp from "./images/greenLamp.png";
import yellowLamp from "./images/yellowLamp.png";
import flowerLamp from "./images/flowerLamp.png";
import Alice from "./images/Alice.png";
import {
  AliceImg,
  BackgroundImage,
  Center,
  Container,
} from "./styles";
import { BounceComponent, RotateComponent } from "../Animations/Animations";

export default function AliceFalling() {
  return (
    <Container>
      <BackgroundImage>
        <Center>
          <AliceImg src={Alice} alt="" />
        </Center>
        <div>
        <BounceComponent image={greenLamp} width="5rem" height="6rem" />
        <RotateComponent image={flowerLamp} width="7rem" height="9rem" />
        <BounceComponent image={yellowLamp} width="5rem" height="6rem" />
        </div>
      </BackgroundImage>
    </Container>
  );
}
