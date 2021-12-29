import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

export default function Text({ toggleText }) {
  const [showText, setShowText] = useState(false);

  setTimeout(() => setShowText(true), 4500);

  const renderText = () => {
    if (toggleText) {
      return (
        <>
          <ScrollText first>Scroll down</ScrollText>
          <ScrollText second>Scroll down</ScrollText>
          <ScrollText third>Scroll down</ScrollText>
        </>
      );
    } else {
      return (
        <InstructionText show={showText}>
          Use mouse to zoom and rotate
        </InstructionText>
      );
    }
  };

  return <>{renderText()}</>;
}

const instructionText = keyframes`
  0% { opacity: 0; bottom: 22%; } 
  20% { opacity: 0; } 
  100% { opacity: 1; }
`;

const InstructionText = styled.p`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  color: orange;
  font-family: arial;
  bottom: 18%;
  font-size: 1rem;
  user-select: none;
  animation: ${(props) =>
    props.show &&
    css`
      ${instructionText} 2s linear;
    `};
`;

const scrollText = (props) => keyframes`
  0% { color: 'black'; }
  25% { color: ${props.first ? "blue" : "black"}; }
  50% { color: ${props.second ? "blue" : "black"}; }
  75% { color: ${props.third ? "blue" : "black"}; }
  100% { color: 'black'; }
`;

const opacity = keyframes`
    0% { opacity: 0}
    40% { opacity: 0}
    100% { opacity: 1}
`;

const ScrollText = styled.p`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  font-family: TitleFont;
  bottom: ${(props) => (props.first ? "60%" : props.second ? "40%" : "20%")};
  font-size: ${(props) =>
    props.first ? "4rem" : props.second ? "3rem" : "2rem"};
  user-select: none;
  animation: ${(props) => scrollText(props)} 3s linear infinite,
    ${opacity} 3s linear;
`;
