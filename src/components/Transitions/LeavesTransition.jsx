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
  display: flex;
  justify-content: center;
  height: 11rem;
  background: black;
  z-index: 50;
  pointer-events: none;
`;

const LeavesImage = styled.img`
  position: absolute;
  width: 100%;
  max-width: 100rem;
  top: 50%;
  transform: translateY(-50%);
`;
