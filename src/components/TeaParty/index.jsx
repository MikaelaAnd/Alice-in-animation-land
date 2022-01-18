import { CanvasContainer } from "./CanvasContainer";
import { Characters } from "./Characters";
import styled from "styled-components";
import { FrameContainer } from "./FrameContainer";
import { Table } from "./Table";

export function TeaParty() {
  return (
    <Wrapper>
      <CanvasContainer />
      <Characters />
       <Table />
      <FrameContainer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;
