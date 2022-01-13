import React, { useState } from "react";
import styled, { css, keyframes} from "styled-components";
import doorHandle from "./images/doorHandle.png";
import Keyhole from "./Keyhole";

export default function DoorHandle() {
  
  const [zoom, setZoom] = useState(false);

  return (
    <Container zoom={zoom}>
      <Face src={doorHandle} />
      <Keyhole zoom={zoom} setZoom={() => setZoom(true)} />
    </Container>
  );
};

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
  justify-content: center;
  width: 14rem;
  background: #ffa325;
  user-drag: none;
  user-select: none;
  transform: scale(1);
  top: 40%;
  animation: ${(props) =>
    props.zoom &&
    css`
      ${zoomIn} 4s ease forwards;
    `};
`;

const Face = styled.img`
  height: 18rem;
  margin-top: -2rem;
  user-select: none;
  user-drag: none;
`;
