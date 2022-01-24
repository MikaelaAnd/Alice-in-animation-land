import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import AliceScene from "./AliceScene";
import DoorScene from "./DoorScene";
import Teleportation from "./TeleportationScene";

export default function TheEnd({ removeFade, restart, fadeOut }) {
  const [zoom, setZoom] = useState(false);
  const [showDoor, setShowDoor] = useState(true);
  const [startTeleportation, setStartTeleportation] = useState(false);
  const [showAlice, setShowAlice] = useState(false);

  // Starts teleportation when keyhole zoom is done
  if (zoom) {
    setTimeout(() => setZoom(false), 2000);
    setTimeout(() => setShowDoor(false), 2000);
    setTimeout(() => setStartTeleportation(true), 2000);
    setTimeout(() => removeFade(), 2000);
  };

  // Shows Alice after teleportation
  if (startTeleportation) {
    setTimeout(() => setShowAlice(true), 4000);
    setTimeout(() => setStartTeleportation(false), 4000);
  };

  return (
    <Root>
      {fadeOut && <FadeOut />}
      <DoorScene 
        showDoor={showDoor}
        zoom={zoom}
        setZoom={() => setZoom(true)}
      />
      <Teleportation startTeleportation={startTeleportation}  />
      <AliceScene showAlice={showAlice} restart={restart} />
    </Root>
  );
}

const Root = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const fade = keyframes`
  0% { opacity: 0;  }
  100% { opacity: 1;  }
`;

const FadeOut = styled.div`
  position: absolute;
  z-index: 10;
  height: 100%;
  width: 100%;
  background: black;
  animation: ${fade} 2s linear forwards;
`;
