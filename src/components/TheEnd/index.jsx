import React from "react";
import styled from "styled-components";
import Door from "./Door";
import DoorHandle from "./DoorHandle";


export default function TheEnd() {
  return (
    <Container>
      <Door />
      <DoorHandle />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;


