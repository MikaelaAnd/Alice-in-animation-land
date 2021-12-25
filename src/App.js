import React from "react";
import GlobalFonts from './fonts/fonts';
import Intro from "./components/Intro/Intro";
import AliceFalling from "./components/AliceFalling/AliceFalling";

export default function App() {
  return (
    <>
      <GlobalFonts />
      <Intro />
      <AliceFalling />
    </>
  );
}
