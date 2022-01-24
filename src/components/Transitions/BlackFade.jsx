import React from "react";
import styled from "styled-components";

export default function BlackFade() {
  return (
    <Root>
      <Container>
        <FadeTop />
        <Black />
        <FadeBottom />
      </Container>
    </Root>
  );
}

const Root = styled.div`
  position: relative;
  pointer-events: none;
  height: 100%;
  width: 100%;
  margin: 10rem 0;
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  top: -30rem;
  z-index: 50;
`;

const FadeTop = styled.div`
  height: 15rem;
  width: 100%;
  background: linear-gradient(transparent, black);
`;

const Black = styled.div`
  height: 15rem;
  width: 100%;
  background: black;
`;

const FadeBottom = styled.div`
  height: 15rem;
  width: 100%;
  background: linear-gradient(black, transparent);
`;
