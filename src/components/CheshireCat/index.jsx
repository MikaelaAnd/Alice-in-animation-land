import React, { useRef } from "react";
import styled from "styled-components";
import useOnScreen from "../../useOnScreen.jsx";
import Cat from "./Cat.jsx";
import branch from "./images/branch.png";
import stem from "./images/stem.png";

export default function CheshireCat() {
  const a = useRef();
  const isVisible = useOnScreen(a);

  return (
    <Container ref={a}>
      <Stem>
        <StemImage src={stem} />
      </Stem>
      <Branch>
        <BranchImage src={branch} />
      </Branch>
      {isVisible && <Cat />}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(200deg, #043a59, #010d18);
`;

const Stem = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const StemImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Branch = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 4.5rem;
`;

const BranchImage = styled.img`
  width: 100%;
`;
