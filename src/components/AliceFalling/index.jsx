import { Children } from "react";
import Alice from "./images/Alice.png";
import background from "./images/background.png";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import {
  FurnitureRowFirst,
  FurnitureRowFourth,
  FurnitureRowSecond,
  FurnitureRowThird,
} from "./FurnitureRow";
import styled from "styled-components";

export default function AliceFalling() {
  const amount = [1, 2, 3];
  return (
    <Container>
      <Canvas>
        <Stars />
      </Canvas>
      <BackgroundImage>
      <AliceImg src={Alice} />
        <FurnitureContainer>
          {Children.toArray(
            amount.map((id) => (
              <>
                <FurnitureRowFirst key={id} />
                <FurnitureRowSecond key={id} />
                <FurnitureRowThird key={id} />
                <FurnitureRowFourth key={id} />
              </>
            ))
          )}
        </FurnitureContainer>
      </BackgroundImage>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  display: flex;
  height: 170rem;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const BackgroundImage = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  height: 170rem;
  position: absolute;
  width: 100%;
`;

const AliceImg = styled.img`
  height: 10rem;
  width: auto;
  position: sticky;
  top: 20rem;
  z-index: 10;
  left: 45%;

  @media (min-width: 1180px) {
    left: 50%;
  }
`;
const FurnitureContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;

  @media (max-width: 768px) {
    width: 70%;
  }
  @media (min-width: 1190px) {
    width: 30%;
  }
`;
