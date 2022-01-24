import { useState } from "react";
import styled from "styled-components";
import SingingFlowers from "./SingingFlowers";
import MagicFood from "./MagicFood/MagicFood";
import CanvasOcean from "./Ocean/CanvasOcean";
import TransitionOcean from "./Ocean/TransitionOcean";

function MultipleScenes({ isOceanSinking, setOceanSinking }) {
  const [isWaterContentSwitched, setWaterContentSwiched] = useState(false);
  const [isOceanRising, setOceanRising] = useState(false);

  if (isOceanRising) {
    setTimeout(() => setWaterContentSwiched(true), 4000);
  }

  return (
    <Root>
      {!isWaterContentSwitched ? (
        <MagicFood setOceanRising={() => setOceanRising(true)} />
      ) : (
        <SingingFlowers />
      )}
      {isOceanRising && (
        <WaterContent pointer={isOceanSinking}>
          <TransitionOcean
            isOceanRising={isOceanRising}
            isOceanSinking={isOceanSinking}
            isWaterContentSwitched={isWaterContentSwitched}
          />
          <CanvasOcean
            isWaterContentSwitched={isWaterContentSwitched}
            setOceanSinking={() => setOceanSinking(true)}
            isOceanSinking={isOceanSinking}
          />
        </WaterContent>
      )}
    </Root>
  );
}
export default MultipleScenes;

const Root = styled.div`
  position: relative;
`;
const WaterContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  pointer-events: ${(props) => (props.pointer ? "none" : "unset")};
`;
