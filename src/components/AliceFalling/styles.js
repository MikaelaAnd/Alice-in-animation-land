import styled, { keyframes } from "styled-components"; 
import background from "./images/background.png";
 
 
 export const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg) }
`;

export const bounce = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
`;

export const Bounce = styled.div`
  display: flex;
  animation: ${bounce} 2s linear infinite;
`;

export const Container = styled.div`
  background-color: black;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const BackgroundImage = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat; 
  background-position: center;
  background-size: cover;
  display: flex;
  height: 400vh;
  width: 50%;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 50%;
`;

export const AliceImg = styled.img`
  height: 15rem;
  width: auto;
`;

export const ItemSize = styled.img((props) => ({
    height: props.height,  
    position: "relative", 
    width: props.width  
    }));