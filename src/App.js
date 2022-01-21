import React from "react";
import GlobalFonts from "./fonts/fonts";
import Intro from "./components/Intro/Intro";
import AliceFalling from "./components/AliceFalling";
import { TeaParty } from "./components/TeaParty";
import CheshireCat from "./components/CheshireCat";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import LeavesTransition from "./components/Transitions/LeavesTransition";
import TheEnd from "./components/TheEnd";
import BlackFade from "./components/Transitions/BlackFade";
import MultipleScenes from "./components/MultipleScenes/MultipleScenes";
import { TeaParty } from "./components/TeaParty";

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
