import PocketWatch from "./images/PocketWatch.png";
import BrokenPocketWatch from "./images/BrokenPocketWatch.png";
import styled from "styled-components";

export function Watch() {
  const BreakClock = (e) => {
    e.target.setAttribute("src", `${BrokenPocketWatch}`);
    e.target.setAttribute("alt", "Broken pocket watch");
  };
  return (
    <Container>
        <Item
          alt="Pocket watch"
          onClick={BreakClock}
          src={PocketWatch}
        />
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  :hover {
    cursor: pointer;
    background: radial-gradient(white, transparent);
    border-radius: 50%;
  }
`;

const Item = styled.img`
  width: 100%;
  z-index: 80;
  cursor: pointer;
`;
