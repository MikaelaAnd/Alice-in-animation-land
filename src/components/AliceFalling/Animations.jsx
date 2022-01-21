import styled, { keyframes } from "styled-components";


export const bounce = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-30px); }
  100% { transform: translateY(0); }
`;

export const pulse = keyframes`
0% { transform: scale(1); } 
50% { transform: scale(1.1); }
100% { transform: scale(1); }
`;

export const Bounce = styled.div`
  animation: ${bounce} 2s linear infinite;
`;

export const Pulse = styled.div`
  animation: ${pulse} 2s infinite;
`;

export function BounceComponent({ image, width, height }) {
  return (
    <Bounce>
      <Item src={image} width={width} height={height} />
    </Bounce>
  );
}

export function PulseComponent({ image, width, height }) {
  return (
    <Pulse>
      <Item src={image} width={width} height={height} />
    </Pulse>
  );
}

export const Item = styled.img((props) => ({
  height: props.height,
  width: props.width,
}));