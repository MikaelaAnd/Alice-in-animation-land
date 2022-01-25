import React from "react";
import styled from "styled-components";
import Door from "./Door";
import DoorHandle from "./DoorHandle";
import Text from "./Text";

export default function DoorScene({ showDoor, zoom, setZoom }) {
  if (!showDoor) return null;

  return (
    <DoorContainer>
      <Door />
      <Text />
      <DoorHandle zoom={zoom} setZoom={setZoom} />
    </DoorContainer>
  );
};

const DoorContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;
