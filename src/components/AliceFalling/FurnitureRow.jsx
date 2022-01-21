import styled from "styled-components";
import { LargeClock, SmallClock } from "./Clock";
import { CupDark, CupLight } from "./Cup";
import { LargeDoublePainting, SmallDoublePainting } from "./DoublePainting";
import { FlowerLamp, YellowLamp } from "./Lamp";
import { LargePainting, SmallPainting } from "./Painting";
import { DarkTeaPot, LightTeaPot } from "./TeaPot";

export function FurnitureRowFirst() {
  return (
    <Container>
      <SmallClock />
      <LightTeaPot />
      <LargeDoublePainting />
    </Container>
  );
}

export function FurnitureRowSecond() {
  return (
    <Container>
      <CupLight />
      <DarkTeaPot />
      <FlowerLamp />
      <CupDark />
    </Container>
  );
}

export function FurnitureRowThird() {
  return(
    <Container>
      <YellowLamp />
      <SmallPainting />
      <LargeClock />
    </Container>
  )
}

export function FurnitureRowFourth() {
  return(
    <Container>
      <LargePainting />
      <CupDark />
      <SmallDoublePainting />
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
`;
