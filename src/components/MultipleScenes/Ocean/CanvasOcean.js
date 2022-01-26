import styled, { keyframes } from "styled-components";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useCallback, useMemo, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import circleImg from "./images/ellipse2.png";
import PlugImg from "./images/plug.png";
import AliceBottle from "./AliceBottle";

function Points() {
  const imgTex = useLoader(THREE.TextureLoader, circleImg);
  const bufferRef = useRef();

  let speed = 0;
  let f = 0.002;
  let a = 5;
  const graph = useCallback(
    (x, z) => {
      return Math.sin(f * (x ** 2 + z ** 2 + speed)) * a;
    },
    [speed, f, a]
  );

  // const count = 500;
  const sep = 1.5;
  const count = 100;
  // const sep = 3;
  let positions = useMemo(() => {
    let positions = [];

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z);
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep, graph]);

  useFrame(() => {
    speed += 40;
    // t += 15;
    const positions = bufferRef.current.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);

        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attachObject={["attributes", "position"]}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={imgTex}
        color={0x00aaff}
        size={3}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
}

function CanvasOcean({
  isWaterContentSwitched,
  setOceanSinking,
  isOceanSinking,
}) {
  if (!isWaterContentSwitched) {
    return null;
  }
  if (isOceanSinking) {
    return null;
  }

  return (
    <Container>
      <Canvas
        colorManagement={false}
        camera={{ position: [100, 10, 0], fov: 100 }}
      >
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[40, 50, -40]} intensity={0.5} color={"white"} />
        <Suspense fallback={null}>
          <Points />
        </Suspense>
        <AliceBottle />
      </Canvas>
      <InstructionText>Rotate and zoom</InstructionText>
      <Plug onClick={() => setOceanSinking()}>
        <img src={PlugImg} alt="Plug" height="100%" />
      </Plug>
    </Container>
  );
}
export default CanvasOcean;

const Container = styled.div`
  background: #060938;
  /* background: #536eff; */
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
`;

const Plug = styled.div`
  position: absolute;
  height: 35%;
  z-index: 100;
  bottom: 1%;
  right: 5%;
  cursor: pointer;

  :hover {
    bottom: 3%;
  }
`;

const fadeIn = keyframes`
  0% {opacity: 0}
  100% {opacity: 1}
`;

const InstructionText = styled.p`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 0%);
  color: orange;
  font-family: arial;
  /* font-family: "TitleFont"; */
  font-size: medium;
  user-select: none;
  opacity: 0;
  animation: ${fadeIn} 6s linear forwards;
  animation-delay: 5s;
`;
