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
  LargeDoublePaintingRight,
  SmallDoublePaintingLeft,
} from "./DoublePainting";
import { LargeClockLeft, SmallClockLeft, SmallClockRight } from "./Clock";
import { CupDarkLeft, CupLightRight } from "./Cup";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function AliceFalling() {
  return (
    <Container>
      <Canvas>
        <Stars />
      </Canvas>
      <BackgroundImage>
        <AliceImg src={Alice} alt="" />
        <FurnitureContainer>
          <FurnitureRow>
            <SmallPaintingRight />
            <TeaPotLightStart />
            <LargeDoublePaintingLeft />
          </FurnitureRow>

          <FurnitureRow>
            <FlowerLampLarge />
            <TeaPotDarkStart />
            <YellowLampLarge />
          </FurnitureRow>

          <FurnitureRow>
            <LargeClockLeft />
            <LargePaintingRight />
          </FurnitureRow>
          <FurnitureRow>
            <CupDarkLeft />
          </FurnitureRow>
          <FurnitureRow>
          <TeaPotLightEnd />
          <SmallClockRight />
          <CupLightRight />
          </FurnitureRow>
          <LargeDoublePaintingLeft />
          <FurnitureRow>
            <GreenLampSmall />
            <TeaPotDarkEnd />
            <FlowerLampSmall />
            <LargePaintingLeft />
          </FurnitureRow>

          <SmallPaintingRight />
          <TeaPotLightStart />
          <FlowerLampLarge />
          <FurnitureRow>
            <TeaPotDarkStart />
            <YellowLampLarge />
            <LargePaintingRight />
            <TeaPotLightEnd />
          </FurnitureRow>
          <FurnitureRow>
          <LargeDoublePaintingRight />
            <SmallDoublePaintingLeft />
            <CupDarkLeft />
          </FurnitureRow>
          <FurnitureRow>
            <TeaPotLightStart />
            <TeaPotDarkEnd />
            <LargePaintingLeft />
          </FurnitureRow>
          <FurnitureRow>
            <SmallClockLeft />
            <CupLightRight />
          </FurnitureRow>
        </FurnitureContainer>
      </BackgroundImage>
    </Container>
  );
}
