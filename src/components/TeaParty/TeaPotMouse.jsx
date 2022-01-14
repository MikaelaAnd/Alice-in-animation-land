import DrunkMouse from "./images/DrunkMouse.png";
import TeaPotWithLid from "./images/TeaPotWithLid.png";
import { useState } from "react";
import TeaPotLidless from "./images/TeaPotLidLess.png";
import styled, { css } from "styled-components";
import { arise } from "./TeaAnimations";

export function TeaPotMouse() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.target.setAttribute("src", `${TeaPotLidless}`);
    setIsClicked(!isClicked);
  };

  return (
    <>
      {isClicked ? (
        <DrunkMouseContainer src={DrunkMouse} alt="Drunk Teapot Mouse" />
      ) : null}
      <Thing
        alt="Teacup"
        height={"auto"}
        hover
        onClick={handleClick}
        src={TeaPotWithLid}
        width={"7rem"}
        margin={"0 0 2rem 25rem"}
      />
    </>
  );
}

const DrunkMouseContainer = styled.img`
  animation: ${arise} 5s linear 1;
  display: flex;
  width: 3rem;
  position: absolute;
  z-index: 80;
  left: 27rem;
  bottom: -2rem;
  top: 0.5rem;
`;

const Thing = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  z-index: 80;
  bottom: 0;
  margin: ${(props) => props.margin};
`;
