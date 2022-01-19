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
import {
  LargeClockRight,
  SmallClockLeft,
  SmallClockRight,
} from "./Clock";
import { CupDarkLeft, CupDarkRight, CupLightRight } from "./Cup";
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

          <LargeClockRight />
          <LargePaintingRight />

          <FurnitureRow>
            <CupDarkLeft />
          </FurnitureRow>
          <FurnitureRow>
            <TeaPotLightEnd />
            <SmallClockRight />
            <CupLightRight />
          </FurnitureRow>
          <TeaPotDarkEnd />
          <LargeDoublePaintingLeft />
          <CupDarkRight />
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
