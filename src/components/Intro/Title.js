import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

export default function Title({ hideText }) {
  const [showTitle, setShowTitle] = useState(false);
  
  setTimeout(() => setShowTitle(true), 1000);
  
  if (hideText) { return null }

  return (
    <>
      <TitleText show={showTitle} large>Alice</TitleText>
      <TitleText show={showTitle}>in animation land</TitleText>
    </>
  );
};

const titleAnimation = keyframes`
  0% { bottom: 40%; opacity: 0; } 
  50% { bottom: 40%; opacity: 1; }
  100% { bottom: 20%; }
`;

const TitleText = styled.h1`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  z-index: 60;
  left: 50%;
  transform: translate(-50%, 0%);
  color: white;
  font-family: TitleFont;
  bottom: 20%;
  font-size: ${(props) => (props.large ? "3.5rem" : "1.5rem")};
  user-select: none;
  animation: ${(props) =>
    props.show &&
    css`
      ${titleAnimation} 3500ms ease-in-out;
    `};
`;
