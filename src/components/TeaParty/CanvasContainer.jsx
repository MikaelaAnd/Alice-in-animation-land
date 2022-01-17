import { Canvas } from "@react-three/fiber";
import { Sky, Stars } from "@react-three/drei";
import styled from "styled-components";

export function CanvasContainer() {
  return (
    <Container>
      <Canvas>
        <Sky />
        <Stars />
      </Canvas>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
`;
