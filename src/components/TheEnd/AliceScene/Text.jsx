import React from "react";
import styled, { css, keyframes } from "styled-components";

export default function Text({ removeText }) {
 
  return (
    <InstructionText removeText={removeText}>
      Use mouse to zoom and rotate
    </InstructionText>
  );
}

const showText = keyframes`
  0% { opacity: 0; bottom: 22%; } 
  20% { opacity: 0; } 
  100% { opacity: 1; }
`;

const hideText = keyframes`
  0% { opacity: 1; } 
  20% { opacity: 1; } 
  100% { opacity: 0; }
`;

const InstructionText = styled.p`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, 0%);
  color: orange;
  font-family: arial;
  bottom: 18%;
  opacity: ${(props) => props.removeText ? 1 : 0};
  font-size: 1.5rem;
  user-select: none;
  animation: ${(props) =>
    props.removeText
      ? css`
          ${hideText} 2s linear forwards;
        `
      : css`
          ${showText} 2s linear forwards;
        `};
  animation-delay: ${(props) => props.removeText ? '0s' : '2s'};
`;
