import React from "react";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import Background from "./background.jpeg";
import GlasTable from "./glasTable.png";
import Bottle from "./bottle.png";
import Alice from "./alice.png";

function MagicFood() {
  const [totalHeight, setTotalHeight] = useState(50);

  const aliceMoving = (height) => {
    console.log("heighten", totalHeight);

    if (
      (height && totalHeight > 10 && totalHeight < 210) ||
      (totalHeight === 210 && height < 0) ||
      (totalHeight === 10 && height > 0)
    ) {
      setTotalHeight(totalHeight + height);
      return totalHeight;
    }
    return totalHeight;
  };

  return (
    <Room>
      <div>
        <Foods>
          <Drink
            onClick={() => {
              aliceMoving(-20);
            }}
          >
            <img src={Bottle} alt="Bottle that Alice drinks" width="20%" />
          </Drink>
          <Cookie
            onClick={() => {
              aliceMoving(+20);
            }}
          ></Cookie>
        </Foods>
        <SpinningTable>
          <img src={GlasTable} alt="Glas table" width="90%" />
        </SpinningTable>
      </div>
      <GrowingAlice>
        <img src={Alice} alt="" height={aliceMoving()} />
      </GrowingAlice>
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

  position: relative;
`;

const Foods = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Drink = styled.div``;

const Cookie = styled.div`
  width: 2rem;
  height: 3rem;
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
  animation-duration: 5s;
`;

const GrowingAlice = styled.div((props) => ({
  height: props.height,
  width: "auto",
  position: "absolute",
  bottom: "1rem",
  right: "20%",
  transform: "translate(50%, 0%)",
}));

