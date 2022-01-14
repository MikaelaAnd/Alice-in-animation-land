import React from "react";
import styled, { keyframes } from "styled-components";

export default function End() {
  return (
    <Transition>
      <TransitionCircle />
    </Transition>
  );
};

const Transition = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const transitionCircle = keyframes`
  from { transform: scale(0) }
  to { transform: scale(15) }
`;

const TransitionCircle = styled.div`
  position: absolute;
  top: calc(50% - 10rem);
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  background: black;
  animation: ${transitionCircle} 5s ease-in forwards;
`;
