import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Background from "./images/background.jpeg";
import GlasTable from "./images/glasTable.png";
import Bottle from "./images/bottle.png";
import Alice from "./images/alice.png";
import Cake from "./images/cake2.png";
import useOnScreen from "../../../useOnScreen.jsx";

function MagicFood({ setOceanRising }) {
  const MagicFoodRef = useRef();
  const isVisible = useOnScreen(MagicFoodRef);
  const [totalHeight, setTotalHeight] = useState(550);

  const aliceMoving = (height) => {
    if (
      (height && totalHeight > 50 && totalHeight < 950) ||
      (totalHeight === 950 && height < 0) ||
      (totalHeight === 50 && height > 0)
    ) {
      setTotalHeight(totalHeight + height);
      return totalHeight;
    }
    return totalHeight;
  };

  const fillScreenWithOcean = () => {
    if (totalHeight === 50) {
      setOceanRising();
    }
  };

  return (
    <Room ref={MagicFoodRef}>
      {isVisible && (
        <>
          <div>
            <Foods>
              <Drink
                onClick={() => {
                  aliceMoving(-100);
                  fillScreenWithOcean();
                }}
              >
                <img src={Bottle} alt="Bottle that Alice drinks" width="100%" />
              </Drink>
              <Cookie
                onClick={() => {
                  aliceMoving(+100);
                }}
              >
                <img src={Cake} alt="Cookie that Alice eats" width="100%" />
              </Cookie>
            </Foods>
            <SpinningTable>
              <img src={GlasTable} alt="Glas table" width="100%" />
            </SpinningTable>
          </div>
          <GrowingAlice>
            <img src={Alice} alt="" height={aliceMoving()} />
          </GrowingAlice>
        </>
      )}
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
  justify-content: space-around;
  align-items: flex-end;
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  } 
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const display = keyframes`
  0% {
    opacity: 0;
  } 
  100% {
    opacity: 1;
  }
`;

const Drink = styled.div`
  animation: ${display} 6s ease-in, ${pulse} 2s infinite;
  width: 3rem;
  margin-bottom: -1.2rem;
  padding: 0.5rem;

  :hover {
    cursor: pointer;
    background: radial-gradient(#9198e5, transparent);
    border-radius: 50%;
  }
`;

const Cookie = styled.div`
  animation: ${display} 6s ease-in, ${pulse} 2s infinite;
  width: 3rem;
  margin-bottom: -1rem;
  padding: 0.5rem;

  :hover {
    cursor: pointer;
    background: radial-gradient(#9198e5, transparent);
    border-radius: 50%;
  }
`;

const table = keyframes`
  0% {
    transform: rotate(0deg) scale(0);
  }
  50% {
    transform: rotate(3600deg) scale(1); 
  }
  100% {
    transform: rotate(3600deg) scale(1);
  }
`;

const SpinningTable = styled.div`
  animation: ${table} 6s;
  width: 15rem;
`;

const GrowingAlice = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 20%;
  transform: translate(50%, 0%);
  animation: ${display} 6s;
`;
