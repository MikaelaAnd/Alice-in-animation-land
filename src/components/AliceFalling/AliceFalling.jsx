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
import { LargePaintingEnd, LargePaintingStart, SmallPaintingEnd } from "./Painting";
import { LargeDoublePaintingLeft, SmallDoublePaintingRight } from "./DoublePainting";

export default function AliceFalling() {
  return (
    <Container>
      <BackgroundImage>
        <AliceImg src={Alice} alt="" />
        <FurnitureContainer>
          <SmallPaintingEnd />
          <TeaPotLightStart />
          <LargeDoublePaintingLeft />
          <FlowerLampLarge />
          <TeaPotDarkStart />
          <YellowLampLarge />
          <TeaPotLightEnd />
          <GreenLampSmall />
          <TeaPotDarkEnd />
          <FlowerLampSmall />
          <LargePaintingStart />
          <SmallPaintingEnd />
          <TeaPotLightStart />
          <FlowerLampLarge />
          <TeaPotDarkStart />
          <YellowLampLarge />
          <LargePaintingEnd />
          <TeaPotLightEnd />
          <TeaPotDarkStart />
          <SmallDoublePaintingRight />
          <TeaPotDarkEnd />
          <FlowerLampSmall />
          <LargePaintingStart />
        </FurnitureContainer>
      </BackgroundImage>
    </Container>
  );
}
