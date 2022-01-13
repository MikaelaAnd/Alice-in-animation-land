import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

export default function Keyhole() {
  const [mouseDown, setMouseDown] = useState(false);
  const [startY, setStartY] = useState();
  const [yValue, setYvalue] = useState(0);

  const HandleMouseDown = (e) => {
    setMouseDown(true);
    setStartY(e.pageY);
  };

  const HandleMouseMove = (e) => {
    if (!mouseDown) return;
    const y = e.pageY;
    const distanceY = y - startY;
    if (distanceY > 0 && distanceY < 15) {
      setYvalue(distanceY);
    }
  };

  const handleResetMouseDown = () => {
    setMouseDown(false);
    setTimeout(() => setYvalue(0), 500);
  };

  return (
    <Chin y={yValue} mouseDown={mouseDown}>
      <Circle y={yValue} mouseDown={mouseDown}/>
      <Cone
        mouseDown={mouseDown}
        y={yValue}
        onMouseDown={HandleMouseDown}
        onMouseUp={handleResetMouseDown}
        onMouseOut={handleResetMouseDown}
        onMouseMove={HandleMouseMove}
      />
    </Chin>
  );
}

const shrinkCircle = keyframes`
  0% { width: calc(2rem + ${(props) => props.y * 0.1 + "rem"}); height: calc(2rem + ${(props) => props.y * 0.1 + "rem"}) }
  40% { width: 2rem; height: 2rem; }
  70% { width: 2.5rem; height: 2.5rem; }
  100% { width: 2rem; height: 2rem; }
`;

const Circle = styled.div`
  position: absolute;
  width: calc(2rem + ${(props) => props.y * 0.1 + "rem"});
  height: calc(2rem + ${(props) => props.y * 0.1 + "rem"});
  border-radius: 50%;
  background: black;
  animation: ${(props) =>
    props.mouseDown === false &&
    css`
      ${shrinkCircle} .4s ease forwards;
    `};
`;

const shrinkChin = keyframes`
  0% { height: calc(5rem + ${(props) => props.y + "rem"}); }
  40% { height: 6rem; }
  70% { height: 7rem; }
  100% { height: 5rem; }
`;

const Chin = styled.div`
  position: absolute;
  top: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(5rem + ${(props) => props.y + "rem"});
  border-radius: 0 0 0.5rem 0.5rem;
  background: #ffa325;
  animation: ${(props) =>
    props.mouseDown === false &&
    css`
      ${shrinkChin} .5s ease-in forwards;
    `};
`;

const shrinkCone = keyframes`
  0% { 
      border-bottom: calc(3rem + ${(props) => props.y + "rem"}) solid black;
      width: calc(0.5rem + ${(props) => props.y * 0.05 + "rem"}); 
    }
  40% { 
      border-bottom: 3rem solid black; 
      width: 0.5rem;
    }
    70% {
        border-bottom: 4rem solid black; 
        width: 1rem;
    }
    100% { 
        border-bottom: 3rem solid black; 
        width: 0.5rem;
      }
`;

const Cone = styled.div`
  z-index: 10;
  border-bottom: calc(3rem + ${(props) => props.y + "rem"}) solid black;
  border-left: 1rem solid transparent;
  border-right: 1rem solid transparent;
  width: calc(0.5rem + ${(props) => props.y * 0.1 + "rem"});
  height: 0;
  margin-top: 1rem;
  animation: ${(props) =>
    props.mouseDown === false &&
    css`
      ${shrinkCone} .4s ease forwards;
    `};

  :hover {
    cursor: ${(props) => (props.mouseDown ? "grabbing" : "grab")};
  }
`;
