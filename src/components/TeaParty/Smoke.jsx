import styled, { keyframes } from "styled-components";

export function Smoke() {
  return (
    <SmokeContainer>
      <Position position={"center"}>
        <Particle color={"#EEEBEB"} height={15} left={10} width={15} />
      </Position>
      <Position position={"flex-start"}>
        <Particle color={"#E6E6E6"} height={15} left={20} width={15} />
      </Position>
      <Position position={"flex-end"}>
        <Particle color={"#E6E6E6"} height={20} right={10} width={20} />
      </Position>
      <Position position={"center"}>
        <Particle color={"#DBDBDB"} height={25} width={25} />
      </Position>
    </SmokeContainer>
  );
}

const smoke = keyframes`
    0%
    {
        opacity: 1;
        filter: blur(0);
        transform: translateY(0) scale(1);
    }
    50%
    {
        opacity: 1;
    }
    100%
    {
        opacity: 0;
        transform: translateY(-20px) scale(2);
        filter: blur(20px);
    }
`;

const SmokeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 4rem;
  z-index: 90;
  transform-origin: bottom;
  animation: ${smoke} 2s linear infinite;
`;

const Position = styled.div((props) => ({
  display: "flex",
  justifyContent: props.position,
}));

const Particle = styled.div((props) => ({
  backgroundColor: props.color,
  borderRadius: "50rem",
  height: props.height,
  width: props.width,
  marginLeft: props.left,
  marginRight: props.right,
  alignItems: props.align,
}));
