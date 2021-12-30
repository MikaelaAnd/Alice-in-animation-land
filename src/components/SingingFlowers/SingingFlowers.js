import styled, { keyframes } from "styled-components";
import Rose from "./assets/rose.png";
import Alice from "./assets/alice.png";
import Background from "./assets/background.png";
import Trumpet1 from "./assets/trumpet1.png";
import Trumpet2 from "./assets/trumpet2.png";
import Flower1 from "./assets/flower1.png";
import Flower2 from "./assets/flower2.png";

function SingingFlowers() {
  return (
    <Root>
      <AliceDiv>
        <img src={Alice} alt="" width="100%" />
      </AliceDiv>
      <Test>
        <img src={Trumpet1} alt="" width="100%" />
      </Test>
      <Test>
        <img src={Trumpet2} alt="" width="100%" />
      </Test>
      <Test>
        <img src={Flower1} alt="" width="100%" />
      </Test>
      <Test>
        <img src={Flower2} alt="" width="100%" />
      </Test>
      <Test>
        <img src={Rose} alt="" width="100%" />
      </Test>
    </Root>
  );
}
export default SingingFlowers;

const Root = styled.div`
  background: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: flex-end;
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

const Test = styled.div`
  display: flex;
  animation: ${move} 2s infinite;
`;

const AliceDiv = styled.div``;
