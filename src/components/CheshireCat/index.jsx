import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import catStripes from "./images/cat-stripes.png";
import cat from "./images/cat.png";
import useOnScreen from "../../useOnScreen.jsx";

export default function CheshireCat() {
  const a = useRef();
  const isVisible = useOnScreen(a);

  return (
    <Container ref={a}>
      {isVisible  &&
        <>
          <CatStriped src={catStripes} />
          <Cat src={cat} />
        </>
      }
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(200deg, #043a59, #010d18);
`;

const showCatStripes = keyframes`
  0% { clip-path: polygon(80% 95%, 80% 93%, 80% 93%, 80% 100%, 80% 100%); }
  15% { clip-path: polygon(80% 95%, 80% 93%, 80% 93%, 80% 100%, 80% 100%); }
  20% { clip-path: polygon(70% 95%, 80% 93%, 80% 93%, 80% 100%, 70% 100%); }
  25% { clip-path: polygon(77% 93%, 79% 90%, 80% 90%, 80% 100%, 65% 100%); }
  30% { clip-path: polygon(65% 90%, 79% 90%, 80% 90%, 80% 100%, 65% 100%); }
  35% { clip-path: polygon(65% 90%, 79% 90%, 81% 90%, 80% 100%, 65% 100%); }
  40% { clip-path: polygon(58% 90%, 60% 80%, 81% 85%, 80% 100%, 65% 100%); }
  45% { clip-path: polygon(55% 75%, 83% 88%, 87% 85%, 80% 100%, 65% 100%); }
  50% { clip-path: polygon(55% 75%, 70% 68%, 90% 82%, 80% 100%, 65% 100%); }
  55% { clip-path: polygon(70% 66%, 92% 81%, 100% 70%, 80% 100%, 40% 100%); }
  60% { clip-path: polygon(70% 66%, 73% 62%, 100% 65%, 90% 100%, 40% 100%); }
  65% { clip-path: polygon(73% 62%, 95% 64%, 100% 53%, 90% 100%, 40% 100%); }
  70% { clip-path: polygon(72% 63%, 72% 59%, 92% 45%, 100% 100%, 40% 100%); }
  75% { clip-path: polygon(71% 63%, 74% 48%, 92% 45%, 100% 100%, 43% 100%); }
  100% { clip-path: polygon(0% 0%, 74% 0%, 92% 45%, 100% 100%, 0% 100%); }
`

const CatStriped = styled.img`
  position: absolute;
  width: 50%;
  max-width: 60rem;
  animation: ${showCatStripes} 5s ease-in-out;
`;

const showCat = keyframes`
  0% { opacity: 0}
  90% { opacity: 0}
  100% { opacity: 1}
`

const Cat = styled.img`
  position: absolute;
  width: 50%;
  max-width: 60rem;
  animation: ${showCat} 6s linear;
`;
