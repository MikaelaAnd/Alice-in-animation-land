import React from "react";
import styled, { css, keyframes } from "styled-components";
import doorHandle from "../images/doorHandle.png";
import Keyhole from "./Keyhole.jsx";
import Text from "./Text";

export default function DoorHandle({ zoom, setZoom }) {
  return (
    <Container zoom={zoom}>
      <Text />
      <FaceContainer>
        <Face src={doorHandle} />
      </FaceContainer>
      <Keyhole zoom={zoom} setZoom={setZoom} />
    </Container>
  );
}

const zoomIn = keyframes`
 from {
  transform: scale(1);
  top: 40%;
  }
 to {
  transform: scale(60);
  top: -950%;
  }
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 18rem;
  user-drag: none;
  user-select: none;
  transform: scale(1);
  top: 10%;
  animation: ${(props) =>
    props.zoom &&
    css`
      ${zoomIn} 5s ease forwards;
    `};
`;

const FaceContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #ffa325;
  width: 80%;
`;

const Face = styled.img`
  width: 17rem;
  margin-top: -2rem;
  user-select: none;
  user-drag: none;
`;
