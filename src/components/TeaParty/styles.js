import styled from "styled-components";
import { arise, bounce } from "../Animations";

export const Background = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
`;

export const CharacterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: -1.5rem;
`;

export const Table = styled.div`
  background-color: #ca9088;
  bottom: 0;
  width: 100%;
  height: 8rem;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  z-index: 80;
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
  height: 24rem;
  width: auto;
  position: relative;
  z-index: 70;
  margin: 0;
`;

export const ArmRight = styled.img`
  height: auto;
  width: 10rem;
  left: -6rem;
  top: 5rem;
  position: absolute;
`;

export const ArmLeft = styled.img`
  height: auto;
  width: 12rem;
  right: -9rem;
  top: 5rem;
  position: absolute;
  z-index: 10;
`;

export const TeaCup = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 12rem;
`;

export const DrunkMouseContainer = styled.img`
  animation: ${arise} 10s linear 1;
  display: flex;
  left: 3.5rem;
  width: 4rem;
  position: absolute;
  z-index: 80;
  top: 2rem;
`;

export const Thing = styled.img((props) => ({
  height: props.height,
  width: props.width,
  zIndex: 80,
  bottom: 0
}));

export const PositionThing = styled.div((props) => ({
  display: "flex",
  justifyContent: props.position,
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

// export function ShowMouse({ image }) {
//   return (
//     <Arise>
//       <DrunkMouseContainer src={image} alt="" />
//     </Arise>
//   );
// }
