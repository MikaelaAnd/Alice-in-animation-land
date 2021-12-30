import styled from "styled-components";
import { bounce } from "../Animations";

export const Background = styled.div`
  background-color: lavenderblush;
  height: 100vh;
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
`;

export const MadHatter = styled.div`
  display: flex;
  justify-content: center;
`;

export const Hatter = styled.img`
  margin: 0;
  height: 20rem;
  width: auto;
  position: absolute;
`;

export const Arm = styled.img`
  margin: 0;
  height: auto;
  width: 10rem;
  left: -9rem;
  top: 8rem;
  position: relative;
`;

export const Bounce = styled.div`
  animation: ${bounce} 2s linear infinite;
`;

export function BouncingArm({ image }) {
  return (
    <Bounce>
      <Arm src={image} alt="" />
    </Bounce>
  );
}
