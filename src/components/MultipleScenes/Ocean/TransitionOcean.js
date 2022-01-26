import styled, { css, keyframes } from "styled-components";

function TransitionOcean({
  isOceanRising,
  isOceanSinking,
  isWaterContentSwitched,
}) {
  if (isWaterContentSwitched && !isOceanSinking) {
    return null;
  }

  return (
    <Root>
      <Water rise={isOceanRising} sink={isOceanSinking} />
      <Waves
        opacity={1}
        leftStart={0}
        leftMiddle={0}
        rise={isOceanRising}
        sink={isOceanSinking}
      />
      <Waves
        opacity={0.5}
        leftStart={10}
        leftMiddle={0}
        rise={isOceanRising}
        sink={isOceanSinking}
      />
      <Waves
        opacity={0.3}
        leftStart={-6}
        leftMiddle={2}
        rise={isOceanRising}
        sink={isOceanSinking}
      />
      <Waves
        opacity={0.6}
        leftStart={1}
        leftMiddle={10}
        rise={isOceanRising}
        sink={isOceanSinking}
      />
    </Root>
  );
}
export default TransitionOcean;

const Root = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: end;
  overflow: hidden;
  pointer-events: none;
`;

const risingWater = keyframes`
  0% { height: calc(0% - 6rem); }
  100% { height: calc(130% - 6rem); }
`;
const risingWaves = keyframes`
  0% { bottom: 0; }
  100% { bottom: 130%; }
`;
const sinkingWater = keyframes`
  0% { height: calc(130% - 6rem); }
  100% { height: calc(0% - 6rem); }
`;
const singkingWaves = keyframes`
  0% { bottom: 130%; }
  100% { bottom: 0; }
`;
const movingWaves = (props) => keyframes`
  0%, 100% { 
    left: ${props.leftStart}%; 
  }
  50% {  
    left: ${props.leftMiddle}%; 
  };
`;

const Water = styled.div`
  position: relative;
  width: 100%;
  background: #060938;

  animation: ${(props) =>
    props.rise &&
    css`
      ${risingWater} 4s forwards linear;
    `};

  animation: ${(props) =>
    props.sink &&
    css`
      ${sinkingWater} 4s forwards linear;
    `};
`;

const Waves = styled.div`
  position: absolute;
  background: #060938;
  transform: scale(-1);
  height: 6rem;
  width: 100%;
  transform-origin: bottom;
  opacity: ${(props) => props.opacity};

  animation: ${(props) =>
    props.rise &&
    css`
      ${movingWaves} 3s ease-in-out infinite, ${risingWaves} 4s forwards linear;
    `};

  animation: ${(props) =>
    props.sink &&
    css`
      ${movingWaves} 3s ease-in-out infinite, ${singkingWaves} 4s forwards linear;
    `};

  clip-path: polygon(
    100% 0%,
    0% 0%,
    0% 82.61%,
    1% 82.35%,
    2% 81.59%,
    3% 80.33%,
    4% 78.61%,
    5% 76.47%,
    6% 73.95%,
    7% 71.12%,
    8% 68.03%,
    9% 64.76%,
    10% 61.38%,
    11% 57.97%,
    12% 54.61%,
    13% 51.37%,
    14% 48.32%,
    15% 45.54%,
    16% 43.09%,
    17% 41.03%,
    18% 39.4%,
    19% 38.23%,
    20% 37.56%,
    21% 37.4%,
    22% 37.76%,
    23% 38.62%,
    24% 39.96%,
    25% 41.77%,
    26% 43.98%,
    27% 46.57%,
    28% 49.45%,
    29% 52.58%,
    30% 55.88%,
    31% 59.27%,
    32% 62.67%,
    33% 66.02%,
    34% 69.23%,
    35% 72.23%,
    36% 74.95%,
    37% 77.33%,
    38% 79.32%,
    39% 80.86%,
    40% 81.94%,
    41% 82.51%,
    42% 82.57%,
    43% 82.12%,
    44% 81.16%,
    45% 79.73%,
    46% 77.84%,
    47% 75.55%,
    48% 72.91%,
    49% 69.97%,
    50% 66.8%,
    51% 63.48%,
    52% 60.08%,
    53% 56.68%,
    54% 53.36%,
    55% 50.18%,
    56% 47.23%,
    57% 44.57%,
    58% 42.26%,
    59% 40.35%,
    60% 38.9%,
    61% 37.92%,
    62% 37.44%,
    63% 37.48%,
    64% 38.02%,
    65% 39.07%,
    66% 40.6%,
    67% 42.56%,
    68% 44.93%,
    69% 47.63%,
    70% 50.62%,
    71% 53.82%,
    72% 57.16%,
    73% 60.56%,
    74% 63.96%,
    75% 67.26%,
    76% 70.4%,
    77% 73.3%,
    78% 75.9%,
    79% 78.13%,
    80% 79.96%,
    81% 81.33%,
    82% 82.21%,
    83% 82.59%,
    84% 82.46%,
    85% 81.82%,
    86% 80.67%,
    87% 79.06%,
    88% 77.02%,
    89% 74.59%,
    90% 71.82%,
    91% 68.79%,
    92% 65.56%,
    93% 62.2%,
    94% 58.79%,
    95% 55.41%,
    96% 52.13%,
    97% 49.03%,
    98% 46.18%,
    99% 43.65%,
    100% 41.49%
  );
`;
