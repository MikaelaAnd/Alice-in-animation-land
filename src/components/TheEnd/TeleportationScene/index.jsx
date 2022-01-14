import React from "react";
import End from "./End";
import Start from "./Start";

export default function TeleportationScene({ startTeleportation, endTeleportation }) {
  
  const renderStart = () => {
    if (!startTeleportation) return;
    return <Start />
  };

  const renderEnd = () => {
    if (!endTeleportation) return;
    return <End />
  };

  return (
      <>
        {renderStart()}
        {renderEnd()}
      </>
  );
};

