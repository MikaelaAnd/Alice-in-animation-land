import React from "react";
import styled, { keyframes } from "styled-components";
import GardenPlatform from "./GardenPlatform";

export default function AliceScene({ showAlice }) {
  if (!showAlice) return null;

  return (
    <Container>
      <Circle>
          <GardenPlatform />
      </Circle>
    </Container>
  );
};

const switchColors = keyframes`
    0% { background: #3B0123; }
    50% { background: #9F59BC; }
    100% { background: #C974EE; }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  animation: ${switchColors} 3s linear;
`;

const expandCircle = keyframes`
    from { clip-path: circle(0% at 50% 50%); }
    to { clip-path: circle(75% at 50% 50%); }
`;

const Circle = styled.div`
  width: 100%;
  height: 100%;
  clip-path: circle(0% at 50% 50%);
  animation: ${expandCircle} 2s ease-in forwards;
`;