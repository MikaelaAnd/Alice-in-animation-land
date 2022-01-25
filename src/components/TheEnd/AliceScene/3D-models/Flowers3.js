/* Auto-generated by: https://github.com/pmndrs/gltfjsx */

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Flowers3({ position, rotation }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("../../../3D-models/flowers3.glb");
  return (
    <group ref={group} dispose={null}>
      <group
        position={position}
        rotation={[-Math.PI, rotation, -2.91]}
        scale={[1.41, 0.45, 1]}
      >
        <mesh geometry={nodes.Sphere009_1.geometry} material={materials.Blue} />
        <mesh
          geometry={nodes.Sphere009_2.geometry}
          material={materials.Yellow}
        />
        <mesh geometry={nodes.Sphere009_3.geometry} material={materials.Red} />
      </group>
    </group>
  );
}

useGLTF.preload("../../../3D-models/flowers3.glb");