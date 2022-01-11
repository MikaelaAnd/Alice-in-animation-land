import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
// import Stem from "./Stem";
import { Cloud } from "@react-three/drei";
import {
  Center,
  //   OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import Loading from "../../Loading";

function CanvasBackground() {
  // const TotalStems = () => {
  const oneStem = 32;
  let windowSize = window.innerWidth;
  const numberOfStems = windowSize / oneStem;
  let allStems = [];

  for (let i = 0; i < numberOfStems; i++) {
    allStems.push(i);
  }
  // }

  // mouse
  // let mouseX = 0;
  // let mouseY = 0;
  //     document.addEventListener("mousemove", (e) => {
  //     mouseX = e.clientX;
  //     mouseY = e.clientY;
  //     });

  return (
    <CanvasContainer>
      <Canvas>
        {/* <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={70} /> */}
        <PerspectiveCamera makeDefault position={[3, 0, 10]} />
        <Suspense fallback={<Loading />}>
          <Center>
            <Cloud position={[-4, -2, 0]} args={[3, 1]} />
          </Center>
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}
export default CanvasBackground;

const CanvasContainer = styled.div`
  background: #5a3552;
  position: absolute;
  height: 100vh;
  width: 100%;
  // {hovered ? aktuell stem = z-index: +1}
`;
