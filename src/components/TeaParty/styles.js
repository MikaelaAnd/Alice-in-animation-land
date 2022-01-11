import styled, { css } from "styled-components";
import { arise, bounce } from "../Animations";

export const Background = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  position: relative;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
`;

export const Frame = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 80;
  object-fit: fill;
`;

export const CharacterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: -1.5rem;
  z-index: 0;
`;

export const Table = styled.div`
  background-color: #ca9088;
  bottom: 0;
  width: 100%;
  height: 8rem;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  z-index: 0;
`;

export const MadHatter = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 130px;
`;

export const Bunny = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 120px;
`;

export const Character = styled.img`
  height: 20rem;
  width: auto;
  position: relative;
  z-index: 70;
  margin: 0;
  object-fit: contain;
`;

export const ArmRight = styled.img`
  height: auto;
  width: 7rem;
  left: -5rem;
  top: 5.2rem;
  position: absolute;
`;

export const ArmLeft = styled.img`
  height: auto;
  width: 11rem;
  right: -8rem;
  top: 4rem;
  position: absolute;
  z-index: 10;
`;

export const DrunkMouseContainer = styled.img`
  animation: ${arise} 5s linear 1;
  display: flex;
  width: 3rem;
  position: absolute;
  z-index: 80;
  left: 27rem;
  bottom: -2rem;
  top: 0.5rem;
`;

export const Thing = styled.img((props) => ({
  height: props.height,
  width: props.width,
  zIndex: 80,
  bottom: 0,
  margin: props.margin,
  "&:hover": `${
    props.hover
      ? css`
          background-color: rgba(255, 255, 255, 0.351);
          box-shadow: 0px 0px 5px #fff;
        `
      : ""
  }`,
}));

export const PositionThing = styled.div((props) => ({
  display: "flex",
  justifyContent: props.justify,
  flexDirection: props.direction,
  alignItems: props.align,
  position: "absolute",
  width: "100%",
}));

/* ANIMATIONS */
export const Bounce = styled.div`
  animation: ${bounce} 2s linear infinite;
`;

export function RightArm({ image }) {
  return (
    <Bounce>
      <ArmRight src={image} alt="" />
    </Bounce>
  );
}
export function LeftArm({ image }) {
  return (
    <Bounce>
      <ArmLeft src={image} alt="" />
    </Bounce>
  );
}
