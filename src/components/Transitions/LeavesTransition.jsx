import React from "react";
import styled from "styled-components";
import transition from "./images/transition.png";

export default function LeavesTransition() {
  return (
    <Transition>
      <LeavesImage src={transition} />
    </Transition>
  );
}

const Transition = styled.div`
  position: relative;
  width: 100%;
  height: 12.5rem;
  background: black;
  z-index: 10;
  pointer-events: none;
`;

const LeavesImage = styled.img`
  position: absolute;
  bottom: -45.5rem;
  left: 50%;
  transform: translateX(-50%);
`;
