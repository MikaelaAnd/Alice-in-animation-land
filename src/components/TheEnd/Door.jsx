import React from "react";
import styled from "styled-components";

export default function Door() {
  return (
    <Background>
      <Line />
      <Line />
      <Line />
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to bottom, #2f392c, #0f120e);
`;

const Line = styled.div`
  height: 100%;
  width: 1rem;
  background: #0f120e;
`;
