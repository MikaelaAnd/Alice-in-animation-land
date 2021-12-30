import styled from "styled-components";
import Alice from "./assets/alice.png";
import Background from "./assets/background.png";
function SingingFlowers() {
  return (
    <Root>
      <AliceDiv>
        <img src={Alice} alt="" width="40%" />
      </AliceDiv>
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

const AliceDiv = styled.div``;
