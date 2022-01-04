// import * as THREE from "three";
// import { useLoader } from "@react-three/fiber";
import React, { useState } from "react";
import { useCursor } from "@react-three/drei";
// import { FlowerHTMLContent } from "drei";
// import { useCursor } from "@react-three/drei";
// import create from "zustand";

// const useStore = create((set) => ({
//   target: null,
//   setTarget: (target) => set({ target }),
// }));

function Stem({ x }) {
  // HowManyStems();
  //   const setTarget = useStore((state) => state.setTarget);
  const [hovered, setHovered] = useState(false);
  const [stemHeight, setStemHeight] = useState(5);
  const [stemDepth, setStemDepth] = useState(0.5);
  //   const [flowerSize, setFlowerSize] = useState(0.5);

  useCursor(hovered);

  const zoomIn = () => {
    setHovered(true);

    if (stemDepth === 0.5) {
      setStemDepth(stemDepth + 1);
      setStemHeight(stemHeight + 1);
      //   setFlowerSize(flowerSize + 0.9);
      return { stemDepth, stemHeight };
    }
    return { stemDepth, stemHeight };
  };

  const zoomOut = () => {
    setHovered(false);

    if (stemDepth > 0.5) {
      setStemDepth(stemDepth - 1);
      setStemHeight(stemHeight - 1);
      //   setFlowerSize(flowerSize - 0.9);
      return { stemDepth, stemHeight };
    }
    return { stemDepth, stemHeight };
  };

  return (
    <mesh
      //   onClick={(e) => setTarget(e.object)}
      onPointerOver={() => zoomIn()}
      onPointerOut={() => zoomOut()}
      position={[x / 2, 1.1, 0]}
      // .setPixelRatio ( value : number ) : undefined
      // Sets device pixel ratio. This is usually used for HiDPI device to prevent bluring output canvas.
    >
      <boxGeometry args={[0.32, stemHeight, stemDepth]} />
      <meshBasicMaterial color={"darkgreen"} />
    </mesh>
  );
}
export default Stem;

// const texture = useLoader(THREE.TextureLoader, Flower1);

// {/* <mesh position={[props.x, 3.4, 0]}>
// {/* <sphereGeometry args={[flowerSize]} /> */}
// {/* <meshBasicMaterial color={"hotpink"} /> */}

// <planeBufferGeometry attach="geometry" args={[flowerSize]} />
// <meshBasicMaterial
//   attach="material"
//   map={texture}
//   toneMapped={false}
// />
// </mesh> */}
