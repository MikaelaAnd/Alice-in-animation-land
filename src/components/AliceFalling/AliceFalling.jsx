import React from "react";
import Alice from "./images/Alice.png";
import { Lamp } from "./Lamp";
import {
  AliceImg,
  BackgroundImage,
  Container,
  FurnitureContainer,
} from "./styles";

export default function AliceFalling() {
  return (
    <Container>
      <BackgroundImage>
        <AliceImg src={Alice} alt="" />
        <FurnitureContainer>
          <Lamp />
        </FurnitureContainer>
      </BackgroundImage>
    </Container>
  );
}
