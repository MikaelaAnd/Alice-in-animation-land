import React from "react";
import styled, { keyframes } from "styled-components";

export default function Start() {
  return (
    <Teleport>
      <TeleportCircle />
    </Teleport>
  );
};

const Teleport = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: black;
`;

const teleportCircle = keyframes`
  0% { clip-path: circle(0rem); background: #9F59BC; }
  10% { background: #C974EE; }
  18% { background: #9F59BC; }
  25% { background: #3B0123; }
  35% { background: #9F59BC; }
  42% { background: #C974EE; }
  50% { background: #9F59BC; }
  60% { background: #3B0123; }
  70% { background: #9F59BC; }
  80% { background: #C974EE; }
  90% { background: #9F59BC; }
  100% { clip-path: circle(80%); background: #3B0123; }
`;

const TeleportCircle = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(#3f87a6, #ebf8e1, #f69d3c);
  animation: ${teleportCircle} 5s ease forwards;
`;
