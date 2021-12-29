import React, { useState } from 'react';
import styled, { css, keyframes } from "styled-components";

export default function Button({ hideButton, onClick}) {
    const [showButton, setShowButton] = useState(false);

    setTimeout(() => setShowButton(true), 8000);

    if (hideButton) { return null };

    return (
        <TextButton show={showButton} onClick={onClick}>
          Click to follow Rabbit
        </TextButton>
    );
};

const opacity = keyframes`
  from { opacity: 0; } 
  to { opacity: 1; }
`;

const colorAndSize = keyframes`
  0% { color: #00A1FF;  bottom: 10%; } 
  40% { color: #00DCB9; bottom: 10%; } 
  45% { color: #00FF8F; bottom: 10.5%; } 
  50% { color: #00DCB9; bottom: 10%; }
  100% { color: #00A1FF; }
`;

const TextButton = styled.button`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 50%);
  background: none;
  font-size: 1.5rem;
  font-family: TitleFont;
  border: none;
  user-select: none; 
  cursor: pointer;
  animation: ${(props) =>
    props.show &&
    css`
      ${opacity} 3s ease-in
    `}, ${(props) =>
    props.show &&
    css`
      ${colorAndSize} 2s linear infinite
    `};
`;