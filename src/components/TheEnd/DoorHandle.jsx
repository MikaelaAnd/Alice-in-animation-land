import React from "react";
import styled from "styled-components";
import doorHandle from "./images/doorHandle.png";

export default function DoorHandle() {
  return (
    <Container>
      <FaceTop>
        <Face src={doorHandle} />
      </FaceTop>
      <FaceBottom>
        <Circle />
        <Cone />
      </FaceBottom>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: 15rem;
  border-radius: .5rem;
  background-image: linear-gradient(to bottom right, #FFA325, #D77D04);
`;

const FaceTop = styled.div`
  display: flex;
  justify-content: center;
  height: 18rem;
`;

const Face = styled.img`
  margin-top: -2rem;
  user-drag: none;
`;

const FaceBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 5rem;
  margin: 1rem 0;  
`;

const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: black;
  margin-bottom: -0.5rem;
`;

const Cone = styled.div`
  border-bottom: 2rem solid black;
  border-left: 1rem solid transparent;
  border-right: 1rem solid transparent;
  width: 1rem;
  height: 0;
`;
