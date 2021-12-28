import styled from "styled-components";
import { bounce, pulse, rotate } from "../Animations";
import background from "./images/background.png";

export const Rotate = styled.div`
  animation: ${rotate} 2s linear infinite;
`;

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

export function RotateComponent({ image, width, height }) {
  return (
    <Rotate>
      <Item src={image} width={width} height={height} />
    </Rotate>
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
  height: 330vh;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const BackgroundImage = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  height: 330vh;
  position: absolute;
  width: 50vw;
`;

export const AliceImg = styled.img`
  height: 10rem;
  width: auto;
  position: sticky;
  top: 20rem;
  z-index: 10;
  /* Något som centrerar Alice */
  left: 45%;
  /* transform: translate(-50%, 50%); */
`;

export const FurnitureContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
`;

export const FurnitureRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 85%;
`;

export const Item = styled.img((props) => ({
  height: props.height,
  width: props.width,
}));

export const PositionItem = styled.div((props) => ({
  display: "flex",
  justifyContent: props.position,
  width: "90%",
}));
