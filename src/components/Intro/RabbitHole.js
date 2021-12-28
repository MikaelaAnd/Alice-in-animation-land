import { GradientTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from 'three';

export default function RabbitHole({ zoom }) {
  const circleRef = useRef();

  
  useFrame((state) => {
    const step = 0.1;
    state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, zoom ? 1 : 50, step);
    state.camera.updateProjectionMatrix();    
  });

  const circleSize = () => {
    if (zoom) {
      console.log('zoom');
      return [26, 30]
    } else {
      return [5, 30]
    }
  };
  
  
  return (
    <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry ref={circleRef} args={circleSize()} />
      <meshBasicMaterial>
        <GradientTexture
          stops={[0, 0.4, 0.6, 1]}
          colors={["#EEF20A", "#F2420A", "#F20A34", "#EE0AF2"]}
        />
      </meshBasicMaterial>
    </mesh>
    
  );
}

/* <mesh
        ref={ref}
        onClick={(e) => console.log('click')}
        onPointerOver={(e) => console.log('hover')}
        onPointerOut={(e) => console.log('unhover')}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshNormalMaterial attach="material" />
    </mesh> */

    // function Circle() {
    //   const ref = useRef()
      
    //   useFrame((state) => {
    //     const step = 0.01
    //     state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, zoom ? 50 : 100, step)
    //     state.camera.updateProjectionMatrix()
    //   })
    
    //   return (
    //     <mesh ref={ref} position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
    //     <circleGeometry args={[5, 30]} />
    //     <meshBasicMaterial>
    //       <GradientTexture
    //         stops={[0, 0.4, 0.6, 1]}
    //         colors={["#EEF20A", "#F2420A", "#F20A34", "#EE0AF2"]}
    //       />
    //     </meshBasicMaterial>
    //   </mesh>