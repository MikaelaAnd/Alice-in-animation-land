import React from "react";
import styled from "styled-components";
import transition from "./images/transition.png";

export default function LeavesTransition() {
  return (
    <Transition>
      <BlackBox>
        <LeavesImage src={transition} />
      </BlackBox>
    </Transition>
  );
}

const Transition = styled.div`
  display: flex;
  align-items: flex-end;
  height: 28rem;
  background: #0d4a22;
  z-index: 50;
  pointer-events: none;
  overflow: hidden;
`;

const BlackBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 10rem;
  width: 100%;
  background: black;
`;

const LeavesImage = styled.img`
  position: absolute;
  width: 100%;
  max-width: 100rem;
  min-width: 80rem;
  top: 100%;
  transform: translateY(-50%);
`;
