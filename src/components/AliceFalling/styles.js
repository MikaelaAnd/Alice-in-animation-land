import styled from "styled-components";
import { bounce, pulse } from "./FallingAnimations";
import background from "./images/background.png";

export const Bounce = styled.div`
  animation: ${bounce} 2s linear infinite;
`;

export const Pulse = styled.div`
  animation: ${pulse} 2s infinite;
`;

export function BounceComponent({ image, width, height }) {
  return (
    <Bounce>
      <Item src={image} width={width} height={height} />
    </Bounce>
  );
}

export function PulseComponent({ image, width, height }) {
  return (
    <Pulse>
      <Item src={image} width={width} height={height} />
    </Pulse>
  );
}

export const Container = styled.div`
  background-color: black;
  display: flex;
  height: 170rem;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const BackgroundImage = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  height: 170rem;
  position: absolute;
  width: 100%;
`;

export const AliceImg = styled.img`
  height: 10rem;
  width: auto;
  position: sticky;
  top: 20rem;
  z-index: 10;
  left: 45%;

  @media (min-width: 1180px) {
    left: 50%;
  }
  /* Något som centrerar Alice */
`;

export const FurnitureContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (min-width: 1190px) {
    width: 30%;
  }
`;

export const FurnitureRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
`;

export const Item = styled.img((props) => ({
  height: props.height,
  width: props.width,
}));

export const PositionItem = styled.div((props) => ({
  display: "flex",
  justifyContent: props.position,
  width: "80%",
}));
