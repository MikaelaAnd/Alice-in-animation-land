import React from "react";
import GlobalFonts from "./fonts/fonts";
import Intro from "./components/Intro/Intro";
import AliceFalling from "./components/AliceFalling/AliceFalling";
import MagicFood from "./components/MagicFood/MagicFood";
import SingingFlowers from "./components/SingingFlowers/SingingFlowers";
import { TeaParty } from "./components/TeaParty";

export default function App() {
  return (
    <>
      <GlobalFonts />
      <Intro />
      <AliceFalling />
      <MagicFood />
      <SingingFlowers />
      <TeaParty />
    </>
  );
}
