import React from "react";
import GlobalFonts from "./fonts/fonts";
import Intro from "./components/Intro/Intro";
import AliceFalling from "./components/AliceFalling";
import MagicFood from "./components/MagicFood/MagicFood";
import SingingFlowers from "./components/SingingFlowers/SingingFlowers";
import { TeaParty } from "./components/TeaParty";
import CheshireCat from "./components/CheshireCat";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import LeavesTransition from "./components/Transitions/LeavesTransition";
import TheEnd from "./components/TheEnd";
import BlackFade from "./components/Transitions/BlackFade";
import CanvasOcean from "./components/Ocean/CanvasOcean";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <GlobalFonts />
          <section>
            <Intro />
          </section>
          <BlackFade />
          <section>
            <AliceFalling />
          </section>
          <BlackFade />
          <section>
            <MagicFood />
          <CanvasOcean />
          </section>
          <LeavesTransition />
          <section>
            <CheshireCat />
          </section>
          <section>
            <TeaParty />
          </section>
          <section>
            <TheEnd />
          </section>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}
