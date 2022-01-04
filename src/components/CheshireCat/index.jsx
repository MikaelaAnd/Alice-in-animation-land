import React, { useRef, useState } from "react";
import styled from "styled-components";
import catStripes from "./images/cat-stripes.png";
import cat from "./images/cat.png";
import useOnScreen from "../../useOnScreen.jsx";

export default function CheshireCat() {
  const CatRef = useRef();
  // const CursorRef = useRef();
  const [pos, setPos] = useState({ left: 0, top: 0})

  const handleMouseMove = (e) => {
    // const x = '50';
    // const y = '50';
    setPos({ left: e.clientX, top: e.clientY})

    CatRef.current.style.clipPath = `circle(10rem at ${pos.left + "px"} ${pos.top + "px"} )`;
    // CursorRef.current.style.left = x - 80 + "px";
    // CursorRef.current.style.top = y - 80 + "px";
  };

  return (
    <Container onMouseMove={handleMouseMove}>
      <CatStriped src={catStripes} />
      <Cat ref={CatRef} src={cat} />
      {/* <Cursor ref={CursorRef} /> */}
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

const CatStriped = styled.img`
  width: 40rem;
`;

const Cat = styled.img`
  position: absolute;
  width: 40rem;

`;

// const Cursor = styled.div`
//   position: absolute;
//   width: 10rem;
//   height: 10rem;
//   border-radius: 50%;
//   border: 0.5rem solid white;
// `;

// --- ANDRA ---

// export default function CheshireCat() {
//   const catImage = useRef();
//   const cursorRef = useRef();

//   const handleMouseMove = (e) => {
//     let x = e.clientX;
//     let y = e.clientY;

//     console.log('y', y)

//     catImage.current.style.clipPath = `circle(10rem at ${x}px ${y}px)`;
//     cursorRef.current.style.left = x - 80 + "px";
//     cursorRef.current.style.top = y - 80 + "px";
//   };

//   return (
//     <Body onMouseMove={handleMouseMove}>
//       <CatStripe>
//         <CatImage src={catStripes} alt="" />
//       </CatStripe>
//       <Cat ref={catImage}>
//         <CatImage src={cat} alt="" />
//       </Cat>
//       <CustomCursor ref={cursorRef} />
//     </Body>
//   );
// }

// const Body = styled.div`
// position: absolute;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100vw;
//   height: 100vh;
//   background-image: linear-gradient(200deg, #043a59, #010d18);
//   overflow: hidden;
// `;

// const CatStripe = styled.div`
//   width: 40rem;
// `;

// const Cat = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 40rem;
//   clip-path: circle(0px at 0 0);
// `;

// const CatImage = styled.img`
//   width: 100%;
//   max-width: 60rem;
// `;

// const CustomCursor = styled.div`
//   position: fixed;
//   width: 10rem;
//   height: 10rem;
//   border-radius: 50%;
//   border: 0.5rem solid white;
//   left: 0;
//   top: 0;
// `;

// --- FÖRSTA ---

// export default function CheshireCat() {
//   const CheshireCatRef = useRef();
//   const CursorRef = useRef();
//   const isVisible = useOnScreen(CheshireCatRef);
//   const [customCursor, setCustomCursor] = useState(false);

//   useEffect(() => {
//     if (isVisible) {
//       setCustomCursor(true);
//       document.addEventListener("mousemove", updateCursorPosition);
//     } else {
//       setCustomCursor(false);
//     }
//   }, [isVisible]);

//   const updateCursorPosition = (e) => {
//     const { clientX, clientY } = e;

//       // Eventuellt antal tidigare scener * VH
//       CursorRef.current.style.left = clientX - 80 + "px";
//       CursorRef.current.style.top = clientY - 80 + "px";

//   };

//   const renderCat = () => {
//     return (
//       <CatContainer>
//         <CatImage src={catStripes} />

//         <CatImage src={cat} />

//       </CatContainer>
//     );
//   };

//   const renderCursor = () => {
//     return (
//       <>
//         {isVisible
//         ?
//           <CircleCursor ref={CursorRef}>
//             <CatContainer>

//             </CatContainer>
//           </CircleCursor>

//         : <NULL ref={CursorRef} />
//         }
//       </>
//     )
//   };

//   return (
//     <Container ref={CheshireCatRef}>
//       {isVisible && renderCat()}
//       {renderCursor()}
//     </Container>
//   );
// }

// const Container = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   width: 100%;
//   background-image: linear-gradient(200deg, #043a59, #010d18);
// `;

// const opacity = keyframes`
//   from { opacity: 0 }
//   to { opacity: 1 }
// `;

// const CircleCursor = styled.div`
//   position: fixed;
//   z-index: 10;
//   height: 10rem;
//   width: 10rem;
//   border-radius: 50%;
//   border: 0.5rem solid white;
//   overflow: hidden;
// `;

// const NULL = styled.div``;

// const CatContainer = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 50%;
//   animation: ${opacity} 3s linear;
// `;

// const CatImage = styled.img`
//   position: absolute;
//   width: 100%;
//   max-width: 60rem;
// `;
