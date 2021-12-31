import styled from "styled-components";
import { bounceX } from "../Animations";

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
  background-color: lavender;
`;

export const Hatter = styled.img`
  height: 20rem;
  width: auto;
  position: absolute;
`;

export const Arm = styled.img`
  height: auto;
  width: 10rem;
  left: -9rem;
  top: 4rem;
  position: relative;
`;

export const Bounce = styled.div`
  animation: ${bounceX} 2s linear infinite;
`;

export function BouncingArm({ image }) {
  return (
    <Bounce>
      <Arm src={image} alt="" />
    </Bounce>
  );
}
