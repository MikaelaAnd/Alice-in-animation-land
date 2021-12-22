import React from "react";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import Background from "./background.jpeg";
import GlasTable from "./glasTable.png";
import Bottle from "./bottle.png";

function MagicFood() {
  const [isClicked, setIsClicked] = useState();

  console.log(isClicked);

  return (
    <Room>
      <div>
        <Foods>
          <Drink onClick={() => setIsClicked(!isClicked)}>
            <img src={Bottle} alt="Bottle that Alice drinks" width="20%" />
          </Drink>
          <Cookie onClick={() => setIsClicked(!isClicked)}></Cookie>
        </Foods>
        <SpinningTable>
          <img src={GlasTable} alt="Glas table" width="90%" />
        </SpinningTable>
      </div>
    </Room>
  );
}
export default MagicFood;

const Room = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 100vh;

  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
`;

const Foods = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Drink = styled.div``;
const Cookie = styled.div`
  width: 2rem;
  height: 2rem;
  background: brown;
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

