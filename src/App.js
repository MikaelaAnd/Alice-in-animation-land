import React, { Suspense } from "react";
import GlobalFonts from "./fonts/fonts";
import Intro from "./components/Intro/Intro";
import AliceFalling from "./components/AliceFalling";
import MagicFood from "./components/MagicFood/MagicFood";
import SingingFlowers from "./components/SingingFlowers/SingingFlowers";
import Loading from "./Loading";
import { TeaParty } from "./components/TeaParty";
import CheshireCat from "./components/CheshireCat";
import LeavesTransition from "./components/Transitions/LeavesTransition";

export default function App() {
  return (
    <>
      <GlobalFonts />
      <Intro />
      <AliceFalling />
      <MagicFood />
      <Suspense fallback={<Loading />}>
        <SingingFlowers />
      </Suspense>
      <LeavesTransition />
      <CheshireCat />
      <TeaParty />
    </>
  );
}