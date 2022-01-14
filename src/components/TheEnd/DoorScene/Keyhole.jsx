import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

export default function Keyhole({ zoom, setZoom}) {
  const [mouseDown, setMouseDown] = useState(false);
  const [startY, setStartY] = useState();
  const [yValue, setYvalue] = useState(0);
  const [keyholeOpen, setKeyholeOpen] = useState(false);
  
  const HandleMouseDown = (e) => {
    setMouseDown(true);
    setStartY(e.pageY);
  };

  const HandleMouseMove = (e) => {
    if (!mouseDown) return;
    const mouseY = e.pageY;
    const totalYDistance = (mouseY - startY) * 0.1;
    const maxY = window.innerHeight * 0.01;

    if (totalYDistance > 0 && totalYDistance < maxY && !keyholeOpen) {
      setYvalue(totalYDistance);
    } else {
      setKeyholeOpen(true);
    };
  };

  const handleResetMouseDown = () => {
    setMouseDown(false);
    if (!keyholeOpen) setTimeout(() => setYvalue(0), 500);
  };

  return (
    <Chin 
      y={yValue} 
      mouseDown={mouseDown} 
      open={keyholeOpen}
    >
      <Circle 
        y={yValue} 
        mouseDown={mouseDown} 
        open={keyholeOpen} 
      />
      <Cone
        y={yValue}
        mouseDown={mouseDown}
        open={keyholeOpen}
        onMouseDown={HandleMouseDown}
        onMouseUp={handleResetMouseDown}
        onMouseOut={handleResetMouseDown}
        onMouseMove={HandleMouseMove}
      >
        {keyholeOpen && 
          <Text hide={zoom} onClick={() => setZoom()}>
            Click to peek
          </Text>}
      </Cone>
    </Chin>
  );
};


// CHIN
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
    !props.mouseDown && !props.open && 
    css`
      ${shrinkChin} .5s ease-in forwards;
    `};
`;

// CIRCLE
const shrinkCircle = keyframes`
  0% { 
    width: calc(2rem + ${(props) => props.y * 0.3 + "rem"}); 
    height: calc(2rem + ${(props) => props.y * 0.3 + "rem"}) 
  }
  40% { width: 2rem; height: 2rem; }
  70% { width: 2.5rem; height: 2.5rem; }
  100% { width: 2rem; height: 2rem; }
`;

const Circle = styled.div`
  position: absolute;
  width: calc(2rem + ${(props) => props.y * 0.3 + "rem"});
  height: calc(2rem + ${(props) => props.y * 0.3 + "rem"});
  border-radius: 50%;
  background: black;
  animation: ${(props) =>
    !props.mouseDown && !props.open &&
    css`
      ${shrinkCircle} .4s ease forwards;
    `};
`;

// CONE
const shrinkCone = keyframes`
  0% { 
    border-bottom: calc(3rem + ${(props) => props.y + "rem"}) solid black;
    border-left: calc(1rem + ${(props) => props.y * 0.1 + "rem"}) solid transparent;
    border-right: calc(1rem + ${(props) => props.y * 0.1 + "rem"}) solid transparent;
    width: calc(0.5rem + ${(props) => props.y * 0.05 + "rem"}); 
  }
  40% { 
    border-bottom: 3rem solid black; 
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    width: 0.5rem;
  }
  70% {
    border-bottom: 4rem solid black; 
    border-left: 1.5rem solid transparent;
    border-right: 1.5rem solid transparent;
    width: 1rem;
  }
  100% { 
    border-bottom: 3rem solid black; 
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    width: 0.5rem;
  }
`;

const Cone = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  border-bottom: calc(3rem + ${(props) => props.y + "rem"}) solid black;
  border-left: calc(1rem + ${(props) => props.y * 0.1 + "rem"}) solid transparent;
  border-right: calc(1rem + ${(props) => props.y * 0.1 + "rem"}) solid transparent;
  width: calc(0.5rem + ${(props) => props.y * 0.2 + "rem"});
  height: 0;
  margin-top: 1rem;
  animation: ${(props) =>
    !props.mouseDown && !props.open &&
    css`
      ${shrinkCone} .4s ease forwards;
    `};

  :hover {
    cursor: ${(props) => (props.open ? 'auto' : props.mouseDown ? "grabbing" : "grab")};
  }
`;


// TEXT
const showText = (props) => keyframes`
  from { 
    opacity: ${props.hide ? 1 : 0 }; 
    transform: ${props.hide ? 'scale(1)' : 'scale(0)'}; 
  }
  to { 
    opacity: ${props.hide ? 0 : 1 }; 
    transform: ${props.hide ? 'scale(0)' : 'scale(1)'}; 
  }
`;

const Text = styled.p`
  position: absolute;
  text-align: center;
  font-size: 1.4rem;
  font-family: TitleFont; 
  color: white;  
  cursor: pointer;
  animation: ${(props) => showText(props)} 2s ease forwards;
`;
