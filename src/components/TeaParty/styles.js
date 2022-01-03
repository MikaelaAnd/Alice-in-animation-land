import styled from "styled-components";
import { bounce } from "../Animations";

export const Background = styled.div`
  background-color: lavenderblush;
  height: 100vh;
  width: 100%;
  display: flex;
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
  position: absolute;
  z-index: 200;
`;

export const ArmRight = styled.img`
  height: auto;
  width: 10rem;
  left: -9rem;
  top: 4rem;
  position: relative;
`;
export const ArmLeft = styled.img`
  height: auto;
  width: 10rem;
  right: -8rem;
  top: 4rem;
  z-index: 0;
  position: relative;
`;

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
