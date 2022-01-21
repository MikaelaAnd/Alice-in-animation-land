import React from "react";
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
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <GlobalFonts />
          <Intro />
          <BlackFade />
          <AliceFalling />
          <BlackFade />
          <MultipleScenes />
          <LeavesTransition />
          <CheshireCat />
          <BlackFade />
          <TeaParty />
          <BlackFade />
          <TheEnd />
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}
