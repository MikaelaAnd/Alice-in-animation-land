import styled from "styled-components";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import circleImg from "./images/ellipse.png";
import { Suspense, useCallback, useMemo, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import PlugImg from "./images/plug.png";
import AliceBottle from "./AliceBottle";

// extend({OrbitControls})

// function CameraControls() {
//     return (
//         <orbitControls />
//     )
// }

function Points() {
  const imgTex = useLoader(THREE.TextureLoader, circleImg);
  const bufferRef = useRef();

  let t = 0;
  let f = 0.002;
  let a = 5;
  //   let a = 3;
  const graph = useCallback(
    (x, z) => {
      return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
    },
    [t, f, a]
  );

  const count = 500;
  const sep = 0.5;
  //   const count = 100;
  //   const sep = 3;
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
    t += 40;
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
        size={0.5}
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
      <Plug onClick={() => setOceanSinking()}>
        <img src={PlugImg} alt="Plug" height="100%" />
      </Plug>
    </Container>
  );
}
export default CanvasOcean;

const Container = styled.div`
  background: #060938;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
`;

const Plug = styled.div`
  position: absolute;
  height: 35%;
  z-index: 100;
  bottom: 0;
  right: 5%;
  cursor: pointer;

  :hover {
    bottom: 4%;
  }
`;
