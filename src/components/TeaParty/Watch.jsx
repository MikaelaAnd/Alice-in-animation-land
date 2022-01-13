import PocketWatch from "./images/PocketWatch.png";
import BrokenPocketWatch from "./images/BrokenPocketWatch.png";
import styled from "styled-components";

export function Watch() {
  const BreakClock = (e) => {
    e.target.setAttribute("src", `${BrokenPocketWatch}`);
    e.target.setAttribute("alt", "Broken pocket watch");
  };
  return (
    <Thing
      alt="Pocket watch"
      height={"auto"}
      onClick={BreakClock}
      width={"9rem"}
      src={PocketWatch}
      margin={"0 23rem 1rem 0"}
    />
  );
}

const Thing = styled.img`

  height: ${(props) => props.height};
  width: ${(props) => props.width};
  z-index: 80;
  bottom: 0;
  margin: ${(props) => props.margin};
  cursor: pointer;
`;
