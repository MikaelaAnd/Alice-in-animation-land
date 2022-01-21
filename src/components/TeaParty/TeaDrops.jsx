import styled, { keyframes } from "styled-components";
import TeaDrop from "./images/Drop.png";

export function TeaDrops() {
  return <Drop alt="Teadrop" src={TeaDrop} />;
}

const fall = keyframes`
    0% {
      transform: translateY(-50px);
    }
    45% {
      transform: translateY(0%);
      opacity: 50%;
      filter: blur(1px)

    }
    100% {
      opacity: 0%;
    }
  `;

const Drop = styled.img`
  width: 5%;
  animation-name: ${fall};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
  transform: translate() (10%, 10%) scale() (0.9);
`;
