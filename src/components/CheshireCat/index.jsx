import React from "react";
import styled, { keyframes } from "styled-components";

export default function CheshireCat() {
  return (
    <Container>
      <Frame>
        <Box></Box>
      </Frame>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(200deg, #043a59, #010d18);
`;

const Frame = styled.div`
  position: relative;
  overflow: hidden;
  height: 10rem;
  width: 15rem;
  border: 0.3rem dashed white;
`;

const move = keyframes`
    0% { left: 20rem; opacity: 0; }
    100% { left: 0rem; opacity: 1;}
`;

const Box = styled.div`
  position: absolute;
  height: 8rem;
  width: 10rem;
  background-color: pink;
  animation: ${move} 3s linear;
`;
