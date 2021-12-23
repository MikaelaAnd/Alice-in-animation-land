import React from "react";
import GlobalFonts from './fonts/fonts';
import Intro from "./components/Intro/Intro";
import MagicFood from "./components/MagicFood/MagicFood";

export default function App() {
  return (
    <>
      <GlobalFonts />
      <Intro />
      <MagicFood />
    </>
  );
}
