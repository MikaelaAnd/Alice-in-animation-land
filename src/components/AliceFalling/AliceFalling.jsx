import React from "react";
import Alice from "./images/Alice.png";
import {
  FlowerLampLarge,
  FlowerLampSmall,
  GreenLampSmall,
  YellowLampLarge,
} from "./Lamp";
import {
  TeaPotDarkStart,
  TeaPotDarkEnd,
  TeaPotLightStart,
  TeaPotLightEnd,
} from "./TeaPot";
import {
  AliceImg,
  BackgroundImage,
  Container,
  FurnitureContainer,
  FurnitureRow,
} from "./styles";
import {
  LargePaintingRight,
  LargePaintingLeft,
  SmallPaintingRight,
} from "./Painting";
import {
  LargeDoublePaintingLeft,
  SmallDoublePaintingRight,
} from "./DoublePainting";

export default function AliceFalling() {
  return (
    <Container>
      <BackgroundImage>
        <AliceImg src={Alice} alt="" />
        <FurnitureContainer>
          <FurnitureRow>
            <SmallPaintingRight />
            <TeaPotLightStart />
            <LargeDoublePaintingLeft />
          </FurnitureRow>
          <FlowerLampLarge />
          <TeaPotDarkStart />
          <YellowLampLarge />
          <TeaPotLightEnd />
          <FurnitureRow>
            <GreenLampSmall />
            <TeaPotDarkEnd />
            <FlowerLampSmall />
            <LargePaintingLeft />
          </FurnitureRow>
          <SmallPaintingRight />
          <TeaPotLightStart />
          <FlowerLampLarge />
          <TeaPotDarkStart />
          <YellowLampLarge />
          <LargePaintingRight />
          <TeaPotLightEnd />
          <TeaPotDarkStart />
          <SmallDoublePaintingRight />
          <TeaPotDarkEnd />
          <FlowerLampSmall />
          <LargePaintingLeft />
        </FurnitureContainer>
      </BackgroundImage>
    </Container>
  );
}
