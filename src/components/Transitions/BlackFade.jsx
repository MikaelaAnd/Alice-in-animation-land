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
  height: 100%;
  width: 100%;
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 25rem;
  top: -30rem;
  z-index: 50;
`;

const FadeTop = styled.div`
  height: 20rem;
  width: 100%;
  background: linear-gradient(transparent, black);
`;

const Black = styled.div`
  height: 15rem;
  width: 100%;
  background: black;
`;

const FadeBottom = styled.div`
  height: 20rem;
  width: 100%;
  background: linear-gradient(black, transparent);
`;
