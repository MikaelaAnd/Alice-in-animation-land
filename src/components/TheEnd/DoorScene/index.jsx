import React from "react";
import styled from "styled-components";
import Door from "./Door";
import DoorHandle from "./DoorHandle";

export default function DoorScene({ startTeleportation, endTeleportation, zoom, setZoom }) {
  if (startTeleportation || endTeleportation) return null;

  return (
    <DoorContainer>
      <Door />
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
