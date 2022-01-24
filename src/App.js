import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import GlobalFonts from "./fonts/fonts";
import Intro from "./components/Intro/Intro";
import AliceFalling from "./components/AliceFalling";
import MultipleScenes from "./components/MultipleScenes/MultipleScenes";
import LeavesTransition from "./components/Transitions/LeavesTransition";
import CheshireCat from "./components/CheshireCat";
import { TeaParty } from "./components/TeaParty";
import TheEnd from "./components/TheEnd";
import BlackFade from "./components/Transitions/BlackFade";

export default function App() {
  const [showFade, setShowFade] = useState(true);
  const [restart, setRestart] = useState(false);
  const [isOceanSinking, setOceanSinking] = useState(false);

  if (restart) {
    setTimeout(() => {
      window.location.pathname = "/";
      // For Safari
      document.body.scrollTop = 0;
      // For Chrome, Firefox, IE, and Opera
      document.documentElement.scrollTop = 0;
    }, 3000);
  };


  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <GlobalFonts />
          <Intro />
          <BlackFade />
          <AliceFalling />
          <BlackFade />
          <MultipleScenes
            isOceanSinking={isOceanSinking}
            setOceanSinking={setOceanSinking}
          />
          {isOceanSinking && (
            <>
              <LeavesTransition />
              <CheshireCat />
              <BlackFade />
              <TeaParty />
              {showFade && <BlackFade />}
              <TheEnd 
                removeFade={() => setShowFade(false)} 
                restart={() => setRestart(true)} 
                fadeOut={restart}
              />
            </>
          )}
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}
