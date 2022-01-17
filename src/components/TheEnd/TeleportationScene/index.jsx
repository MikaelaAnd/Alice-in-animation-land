import React from "react";
import styled, { keyframes } from "styled-components";

export default function Teleportation({ startTeleportation }) {
  if (!startTeleportation) return null;

  return (
    <Teleport>
      <TeleportCircle />
    </Teleport>
  );
};

const Teleport = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: black;
`;

const teleportCircle = keyframes`
  0% { clip-path: circle(0rem); background: #9F59BC; }
  20% { background: #C974EE; }
  30% { background: #9F59BC; }
  40% { background: #3B0123; }
  50% { background: #9F59BC; }
  70% { background: #C974EE; }
  80% { background: #9F59BC; }
  100% { clip-path: circle(80%); background: #3B0123; }
`;

const TeleportCircle = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(#3f87a6, #ebf8e1, #f69d3c);
  animation: ${teleportCircle} 4s linear forwards;
`;
