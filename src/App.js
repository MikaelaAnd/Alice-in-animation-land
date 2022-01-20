import React from "react";
import GlobalFonts from "./fonts/fonts";
import Intro from "./components/Intro/Intro";
import AliceFalling from "./components/AliceFalling";
import MagicFood from "./components/MagicFood/MagicFood";
import SingingFlowers from "./components/SingingFlowers/SingingFlowers";
import CheshireCat from "./components/CheshireCat";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import LeavesTransition from "./components/Transitions/LeavesTransition";
import TheEnd from "./components/TheEnd";
import BlackFade from "./components/Transitions/BlackFade";
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
            <MagicFood />
            <SingingFlowers />
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
