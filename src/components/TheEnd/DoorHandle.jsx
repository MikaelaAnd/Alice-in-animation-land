import React from "react";
import styled from "styled-components";
import doorHandle from "./images/doorHandle.png";
import Keyhole from "./Keyhole";

export default function DoorHandle() {
  return (
    <Container>
      <Face src={doorHandle} />
      <Keyhole />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 14rem;
  background: #ffa325;
  user-drag: none;
  user-select: none;
`;

const Face = styled.img`
  height: 18rem;
  margin-top: -2rem;
  user-select: none;
  user-drag: none;
`;
