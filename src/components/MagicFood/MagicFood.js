import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import Background from "./assets/background.jpeg";
import GlasTable from "./assets/glasTable.png";
import Bottle from "./assets/bottle.png";
import Alice from "./assets/alice.png";
import Cake from "./assets/cake2.png";
import useOnScreen from "../../useOnScreen.jsx";

function MagicFood() {
  const [totalHeight, setTotalHeight] = useState(450);
  const MagicFoodRef = useRef();
  const isVisible = useOnScreen(MagicFoodRef);

  const aliceMoving = (height) => {
    console.log("heighten", totalHeight);

    if (
      (height && totalHeight > 50 && totalHeight < 750) ||
      (totalHeight === 750 && height < 0) ||
      (totalHeight === 50 && height > 0)
    ) {
      setTotalHeight(totalHeight + height);
      return totalHeight;
    }
    return totalHeight;
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
  margin-bottom: -0.9rem;

  :hover {
    background: rgba(255, 255, 255, 0.351);
    cursor: pointer;
    box-shadow: 0px 0px 5px #fff;
  }
`;

const Cookie = styled.div`
  animation: ${display} 6s ease-in, ${pulse} 2s infinite;
  width: 3rem;
  margin-bottom: -0.7rem;

  :hover {
    background: rgba(255, 255, 255, 0.351);
    cursor: pointer;
    box-shadow: 0px 0px 5px #fff;
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
  animation-name: ${table};
  animation-duration: 6s;
  width: 15rem;
`;

// const GrowingAlice = styled.div((props) => ({
//   height: props.height,
//   position: "absolute",
//   bottom: "1rem",
//   right: "20%",
//   transform: "translate(50%, 0%)",
//   animationName: `${display}`,
//   animationDuration: "5s",
// }));

const GrowingAlice = styled.div`
  // height: props.height,
  position: absolute;
  bottom: 1rem;
  right: 20%;
  transform: translate(50%, 0%);
  animation: ${display} 6s;
`;
