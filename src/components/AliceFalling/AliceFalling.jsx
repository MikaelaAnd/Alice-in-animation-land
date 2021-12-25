import React from "react";
import styled, { keyframes } from "styled-components";
import image from "./images/fallingBackground.jpeg";
import greenLamp from "./images/greenLamp.png";
import yellowLamp from "./images/yellowLamp.png";
import flowerLamp from "./images/flowerLamp.png";

export default function AliceFalling() {
  return (
    <Container>
      <BackgroundImage>
        <Animations>
          <Rotate>
            <LargeLamp src={greenLamp} alt="" />
          </Rotate>
          <Two>
            <Bounce>
              <SmallLamp src={flowerLamp} alt="" />
            </Bounce>
          </Two>
          <Three>
            <Bounce>
              <LargeLamp src={yellowLamp} alt="" />
            </Bounce>
          </Three>
          <Fourth>
            <Rotate>
              <LargeLamp src={flowerLamp} alt="" />
            </Rotate>
          </Fourth>
          <Fifth>
            <Bounce>
              <SmallLamp src={greenLamp} alt="" />an
            </Bounce>
          </Fifth>
        </Animations>
      </BackgroundImage>
    </Container>
  );
}

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg) }
`;

const bounce = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
`;

const Bounce = styled.div`
  display: flex;
  animation: ${bounce} 2s linear infinite;
`;

const Container = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const BackgroundImage = styled.div`
  background-image: url(${image});
  width: 33%;
  height: 150vh;
`;

const Animations = styled.div`
  margin-left: 20px;
`;

const Two = styled.div`
  margin-left: 20rem;
  margin-top: 10rem;
`;

const Three = styled.div`
  margin-left: 5rem;
  margin-top: 5rem;
`;

const Fourth = styled.div`
  margin-left: 5rem;
  margin-top: 5rem;
`;

const Fifth = styled.div`
  margin-left: 25rem;
`;

const LargeLamp = styled.img`
  width: 3rem;
  height: 5rem;
  position: relative;
`;

const SmallLamp = styled.img`
  width: 2rem;
  height: 3rem;
  position: relative;
`;
