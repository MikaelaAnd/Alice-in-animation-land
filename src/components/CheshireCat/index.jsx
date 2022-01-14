import React, { useRef } from "react";
import styled from "styled-components";
import useOnScreen from "../../useOnScreen.jsx";
import Cat from "./Cat.jsx";
import branch from "./images/branch.png";
import stem from "./images/stem.png";
import forest from "./images/forest.png";

export default function CheshireCat() {
  const CheshireScene = useRef();
  const isVisible = useOnScreen(CheshireScene);

  return (
    <Container ref={CheshireScene}>
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
  width: 100%;
  height: 100vh;
  background-image: url(${forest});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
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
