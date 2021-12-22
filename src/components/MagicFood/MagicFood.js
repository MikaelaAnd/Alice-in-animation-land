import React from "react";
import styled, { keyframes } from "styled-components";
import Background from "./background.jpeg";
import GlasTable from "./glasTable.png";

function MagicFood() {

  return (
    <MagicArea>
      <SpinningTable>
        <img src={GlasTable} alt="Glas table" width="90%" />
      </SpinningTable>
      {/* <GrowingAlice onClick={() => setIsClicked(isClicked)}>alice</GrowingAlice> */}
    </MagicArea>
  );
}
export default MagicFood;

const MagicArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 100vh;

  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
`;

const table = keyframes`
  0% {
    transform: rotate(0deg) scale(0);
  }
  50% {
    transform: rotate(3600deg) scale(1); // 10 varv
  }
  100% {
    transform: rotate(3600deg) scale(1); // 10 varv
  }
`;

const SpinningTable = styled.div`
  animation-name: ${table};
  animation-duration: 7s;
`;

