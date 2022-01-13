import { keyframes } from "styled-components";

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