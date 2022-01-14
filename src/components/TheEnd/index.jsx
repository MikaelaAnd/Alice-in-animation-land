import React, { useState } from "react";
import styled from "styled-components";
import DoorScene from "./DoorScene";
import TeleportationScene from "./TeleportationScene";

export default function TheEnd() {
  const [zoom, setZoom] = useState(false);
  const [startTeleportation, setStartTeleportation] = useState(false);
  const [endTeleportation, setEndTeleportation] = useState(false);

  // Starts teleportation when keyhole zoom is done
  if (zoom) {
    setTimeout(() => setStartTeleportation(true), 2000);
  };

  // Ends teleportation 
  if (startTeleportation) {
    setTimeout(() => setEndTeleportation(true), 3000);
  };

  return (
    <Root>
      <DoorScene 
        startTeleportation ={startTeleportation}
        endTeleportation={endTeleportation}
        zoom={zoom}
        setZoom={() => setZoom(true)}
      />
      <TeleportationScene 
        startTeleportation={startTeleportation} 
        endTeleportation={endTeleportation}
      />
    </Root>
  );
}

const Root = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;
