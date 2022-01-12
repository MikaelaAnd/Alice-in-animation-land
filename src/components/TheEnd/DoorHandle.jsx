import React, { useState } from "react";
import styled from "styled-components";
import doorHandle from "./images/doorHandle.png";

export default function DoorHandle() {
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
    if (distanceY > 0 && distanceY < 30) {
      setYvalue(distanceY);
    }
  };

  return (
    <Container>
      <Face src={doorHandle} />
      <Mouth y={yValue}>
        <Circle />
        <Cone
          mouseDown={mouseDown}
          y={yValue}
          onMouseDown={HandleMouseDown}
          onMouseUp={() => setMouseDown(false)}
          onMouseOut={() => setMouseDown(false)}
          onMouseMove={HandleMouseMove}
        />
      </Mouth>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 14rem;
  background: #ffa325;
  user-drag: none;
  user-select: none;
`;

const Face = styled.img`
  height: 18rem;
  margin: -2rem auto 0 auto;
  user-select: none;
  user-drag: none;
`;

const Mouth = styled.div`
  position: absolute;
  top: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(5rem + ${(props) => props.y + 'rem'});
  border-radius: 0 0 0.5rem 0.5rem;
  background: #ffa325;
`;

const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: black;
  margin-bottom: -1.5rem;
`;

const Cone = styled.div`
  border-bottom: calc(3rem + ${(props) => props.y + 'rem'}) solid black;
  /* border-bottom: 3rem solid black; */
  border-left: 1rem solid transparent;
  border-right: 1rem solid transparent;
  width: 0.5rem;
  height: 0;

  :hover {
    cursor: ${(props) => (props.mouseDown ? "grabbing" : "grab")};
  }
`;
