import { keyframes } from "styled-components";

export const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg) }
`;

export const bounce = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-30px); }
  100% { transform: translateY(0); }
`;
export const arise = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-50px); }
  100% { transform: translateY(-50px), zIndex: "80" }
`;
export const bounceX = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(30px); }
  100% { transform: translateX(0); }
`;

export const pulse = keyframes`
0% { transform: scale(1); } 
50% { transform: scale(1.1); }
100% { transform: scale(1); }
`;
