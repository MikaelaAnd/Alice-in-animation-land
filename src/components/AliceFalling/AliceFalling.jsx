import React from "react";
import Alice from "./images/Alice.png";
import {
  FlowerLampLarge,
  FlowerLampSmall,
  GreenLampSmall,
  YellowLampLarge,
} from "./Lamp";
import { TeaPotDarkStart, TeaPotDarkEnd, TeaPotLightStart, TeaPotLightEnd } from "./TeaPot";
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
          <TeaPotLightStart />
          <FlowerLampLarge />
          <TeaPotDarkStart />
          <YellowLampLarge />
          <TeaPotLightEnd />
          <GreenLampSmall />
          <TeaPotDarkEnd />
          <FlowerLampSmall />
        </FurnitureContainer>
      </BackgroundImage>
    </Container>
  );
}
