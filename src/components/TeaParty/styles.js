import styled from "styled-components";
import { bounce } from "../Animations";

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
  background-color: #CA9088;
  bottom: 0;
  width: 100%;
  height: 8rem;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  z-index: 100;
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
  z-index: 100;
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
  right: -10rem;
  top: 4rem;
  position: absolute;
  z-index: 10;
`;

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
