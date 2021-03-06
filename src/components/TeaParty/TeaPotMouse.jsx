import DrunkMouse from "./images/DrunkMouse.png";
import TeaPotWithLid from "./images/TeaPotWithLid.png";
import { useState } from "react";
import TeaPotLidless from "./images/TeaPotLidLess.png";
import styled, { keyframes } from "styled-components";

export function TeaPotMouse() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.target.setAttribute("src", `${TeaPotLidless}`);
    setIsClicked(!isClicked);
  };

  return (
    <Container>
      {isClicked ? (
        <DrunkMouseContainer src={DrunkMouse} alt="Drunk Teapot Mouse" />
      ) : null}
      <TeaPot alt="Teapot" onClick={handleClick} src={TeaPotWithLid} />
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  :hover {
    cursor: pointer;
    background: radial-gradient(white, transparent);
    border-radius: 50%;
  }
`;

const ariseHigh = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-70px); }
  100% { transform: translateY(0) }
`;

const ariseLow = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-45px); }
  100% { transform: translateY(0) }
`;

const DrunkMouseContainer = styled.img`
  animation: ${ariseLow} 5s linear 1;
  display: flex;
  width: 3%;
  position: absolute;
  z-index: 2;
  margin-top: 1rem;

  @media (max-width: 820px) {
    animation: ${ariseHigh} 5s linear 1;
    width: 10%;
    margin-top: 1rem;
  }
`;

const TeaPot = styled.img`
  width: 100%;
  z-index: 80;
  cursor: pointer;
`;
