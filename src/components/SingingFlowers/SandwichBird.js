import styled, { keyframes } from "styled-components";
import Sandwish1 from "./assets/sandwich1.png";
import Sandwish2 from "./assets/sandwich2.png";
import Sandwish3 from "./assets/sandwich3.png";

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
    zIndex: 0,
  },
  {
    x1: 10,
    x2: 90,
    y1: 20,
    y2: 30,
    flip: flipStartingLeft,
    src: Sandwish3,
    height: "9%",
    zIndex: 1,
  },
  {
    x1: 45,
    x2: 90,
    y1: 30,
    y2: 60,
    flip: flipStartingLeft,
    src: Sandwish2,
    height: "",
    zIndex: 1,
  },
  {
    x1: 90,
    x2: 30,
    y1: 40,
    y2: 20,
    flip: flipStartingRight,
    src: Sandwish1,
    height: "",
    zIndex: 1,
  },
];

function SandwichBird() {
  return (
    <>
      {birds.map((bird, index) => (
        <Bird
          key={index}
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
    </>
  );
}
export default SandwichBird;
