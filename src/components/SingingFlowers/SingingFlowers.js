import styled, { keyframes } from "styled-components";
// import Rose from "./assets/rose.png";
import Rose from "./assets/rose-after-fill.png";
import Alice from "./assets/alice.png";
import Background from "./assets/background.png";
import Trumpet1 from "./assets/trumpet1.png";
import Trumpet2 from "./assets/trumpet2.png";
import Flower1 from "./assets/flower1.png";
import Flower2 from "./assets/flower2.png";
// import Flower3 from "./assets/flower3.png";
import Background from "./assets/background-flowers.png";
import BigFLowers from "./assets/big-flowers.png";

function SingingFlowers() {
  return (
    <Root>
      <img
        src={Background}
        alt=""
        height="100%"
        style={{ position: "absolute", pointerEvents: "none", width: "100%" }}
      />
      <img
        src={BigFLowers}
        alt=""
        height="100%"
        style={{ position: "absolute", pointerEvents: "none", width: "100%" }}
      />

      <FlowerContent>
        <img src={Alice} alt="" height="50%" />
        <Miniflowers>
          <img src={Trumpet1} alt="" height="100%" />
          <img src={Trumpet2} alt="" height="100%" />
          <img src={Flower1} alt="" height="100%" />
          <img src={Flower2} alt="" height="100%" />
          {/* <img src={Flower3} alt="" height="100%" /> */}
        </Miniflowers>
        <RoseDiv>
          <img src={Rose} alt="" height="100%" />
        </RoseDiv>
      </FlowerContent>
    </Root>
  );
}
export default SingingFlowers;

const Root = styled.div`
  /* background: url(${Background});
  background-size: cover;
  background-repeat: no-repeat; */
  background: gray;
  height: calc(100vh + 5.5rem);
  /* height: 100vh; */
  display: flex;
  /* flex-direction: column; */
  align-items: flex-end;
  position: relative;
`;
  height: 100vh;
const FlowerContent = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 50%;
  z-index: 1;
  /* background: blue; */
`;

const RoseDiv = styled.div`
  height: 100%;
  /* background: red; */
`;

const move = keyframes`
    0%{
        transform: rotateZ(-3deg);
        transform-origin: bottom;
    }
    50%{
        transform: rotateZ(3deg);
        transform-origin: bottom;
    }
    100%{
        transform: rotateZ(-3deg);
        transform-origin: bottom;
    }
`;

const Miniflowers = styled.div`
  display: flex;
  height: 50%;
  /* background: pink; */

  > img {
    animation: ${move} 2s infinite;
  }
`;
