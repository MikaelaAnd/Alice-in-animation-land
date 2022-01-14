import styled, { keyframes } from "styled-components";

export function TeaDrops() {
  return (
    <Rain>
      <Drop />
    </Rain>
  );
}

const Rain = styled.div`
  display: flex;
  width: 2.5rem;
  justify-content: space-around;
  --duration: 0.5s;
  --delay: 1s;
  transform: translate() (10%, 10%) scale() (0.9);
`;

const fall = keyframes`
    0% {
      transform: translateY(-70px);
    }
    45% {
      transform: translateY(0%);
      opacity: 0;
    }
    46% {
      opacity: 0%;
    }
    100% {
      opacity: 0;
    }
  `;

const Drop = styled.div`
  background-color: #7f3402;
  width: 4px;
  height: 33px;
  border-radius: 100%;
  animation-name: ${fall};
  animation-duration: var(--duration);
  animation-delay: var(--delay);
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
`;
