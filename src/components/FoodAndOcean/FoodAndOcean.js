import { useState } from "react";
import styled from "styled-components";
import MagicFood from "./MagicFood/MagicFood";
import CanvasOcean from "./Ocean/CanvasOcean";
import TransitionOcean from "./Ocean/TransitionOcean";

function FoodAndOCean() {
  const [isOceanRising, setOceanRising] = useState(false);
  const [isContentSwitched, setContentSwiched] = useState(false);
  const [isOceanSinking, setOceanSinking] = useState(false);

  console.log("rising?", isOceanRising);
  console.log("sinking?", isOceanSinking);
  console.log("content?", isContentSwitched);

  if (isOceanRising) {
    setTimeout(() => setContentSwiched(true), 7000);
  }

  return (
    <Root>
      <MagicFood setOceanRising={() => setOceanRising(true)} />
      {isOceanRising && (
        <WaterContent>
          {!isContentSwitched ? (
            <TransitionOcean
              isOceanRising={isOceanRising}
              isContentSwitched={isContentSwitched}
              isOceanSinking={isOceanSinking}
            />
          ) : (
            <CanvasOcean
              isContentSwitched={isContentSwitched}
              setOceanSinking={() => setOceanSinking(true)}
            />
          )}
        </WaterContent>
      )}
    </Root>
  );
}
export default FoodAndOCean;

const Root = styled.div`
  position: relative;
`;
const WaterContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
