/* Auto-generated by: https://github.com/pmndrs/gltfjsx */

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function CardAce({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("../../../3D-models/cardAce.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[15, 0.4, -15]}
        rotation={[1, 0, 1]}
        scale={[2.28, 0.03, 2.87]}
      >
        <mesh geometry={nodes.Cube_1.geometry} material={materials.White} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials.Red} />
      </group>
    </group>
  );
}

useGLTF.preload("../../../3D-models/cardAce.glb");