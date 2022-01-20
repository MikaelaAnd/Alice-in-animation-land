import { OrbitControls, Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react'
import styled from 'styled-components';
import AliceModel from './AliceModel';
import CardAce from './CardAce';
import Grass from './Grass';

export default function SleepingAlice() {
    return (
        <CanvasContainer>
          <Canvas camera={{ position: [0, 10, 100]}}>
              <OrbitControls />
              <Sky />
              <ambientLight intensity={1}/>
              <pointLight position={[0, 50, 0]} intensity={1} color={"white"}></pointLight>
              <Grass />
              <AliceModel />
              <CardAce />
          </Canvas>
        </CanvasContainer>
    )
};

const CanvasContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: black;
`;
