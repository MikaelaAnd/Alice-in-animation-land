import React from "react";
import styled, { keyframes } from "styled-components";

export default function RestartButton({ restart }) {

  return <Button onClick={() => restart()}>Go back to the beginning</Button>;
}

const color = keyframes`
  0%, 100% { color: #00A1FF; } 
  50% { color: #10CEAC; } 
`;

const opacity = keyframes`
  from { opacity: 0; } 
  to { opacity: 1; }
`;

const Button = styled.button`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-40%, 50%);
  background: none;
  font-size: 2rem;
  font-family: TitleFont;
  opacity: 0;
  border: none;
  cursor: pointer;
  animation: ${opacity} 3s ease-in forwards, ${color} 3s linear infinite;
  animation-delay: 6s;
`;
