import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react'
import styled from 'styled-components';
import Ground from '../../Intro/Ground';

export default function SleepingAlice() {
    return (
        <CanvasContainer>
          <Canvas camera={{ position: [0, 30, 100]}}>
              <OrbitControls />
              <ambientLight intensity={3}/>
              <Ground />
          </Canvas>
        </CanvasContainer>
    )
};

const CanvasContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: black;
`;
