import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Sandwish1 from "./images/sandwich1.png";
import Sandwish2 from "./images/sandwich2.png";
import Sandwish3 from "./images/sandwich3.png";

const float = keyframes`
  0% {bottom: 55%; opacity: 0}
  100% {bottom: 50%; opacity: 1}
`;

const ScrollDownText = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  z-index: 50;
  font-family: "TitleFont";
  font-size: x-large;
  color: orange;
  animation: ${float} 3s infinite;
`;

const flying = (p) => keyframes`
  0%, 100% {
    left: ${p.x1}% ; 
    top: ${p.y1}% ;
  }
  50% {
    left: ${p.x2}% ; 
    top: ${p.y2}% ;
  }
`;

const flipStartingLeft = keyframes`
  0%, 49%, 100% {
    transform: rotateY(180deg);
  }
  50%, 99%{
    transform: rotateY(0deg);
  }
`;

const flipStartingRight = keyframes`
  0%, 49%, 100% {
    transform: rotateY(0deg);
  }
  50%, 99%{
    transform: rotateY(180deg);
  }
`;

const Bird = styled.img`
  position: absolute;
  animation: ${flying} 26s infinite linear, ${(p) => p.flip} 26s infinite;
  z-index: ${(props) => props.zIndex};
`;

let birds = [
  {
    x1: 90,
    x2: 10,
    y1: 5,
    y2: 40,
    flip: flipStartingRight,
    src: Sandwish3,
    height: "5%",
    zIndex: 10,
  },
  {
    x1: 10,
    x2: 90,
    y1: 20,
    y2: 30,
    flip: flipStartingLeft,
    src: Sandwish3,
    height: "9%",
    zIndex: 0,
  },
  {
    x1: 45,
    x2: 85,
    y1: 30,
    y2: 60,
    flip: flipStartingLeft,
    src: Sandwish2,
    height: "15%",
    zIndex: 0,
  },
  {
    x1: 85,
    x2: 30,
    y1: 40,
    y2: 20,
    flip: flipStartingRight,
    src: Sandwish1,
    height: "15%",
    zIndex: 10,
  },
];

function SandwichBird() {
  const [isCaptured, setCaptured] = useState(false);
  const [isText, setIsText] = useState(false);

  const captured = (index) => {
    setCaptured(!isCaptured);
    birds.splice(index, 1);

    if (!birds.length) {
      setIsText(true);
      return isText;
    }
  };

  return (
    <>
      {birds.map((bird, index) => (
        <Bird
          key={index}
          onPointerOver={() => captured(index)}
          onClick={() => captured(index)}
          x1={bird.x1}
          x2={bird.x2}
          y1={bird.y1}
          y2={bird.y2}
          flip={bird.flip}
          src={bird.src}
          alt="Flying sandwich in the background"
          height={bird.height}
          zIndex={bird.zIndex}
        />
      ))}
      <ScrollDownText show={isText}>Scroll down</ScrollDownText>
    </>
  );
}
export default SandwichBird;
