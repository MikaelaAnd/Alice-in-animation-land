import React from "react";
import AliceTree from "./AliceTree";
import CardAce from "./CardAce";
import Cards from "./Cards";
import Flowers3 from "./Flowers3";
import Flowers9 from "./Flowers9";

export default function Models3D() {
  const renderFlowers = () => {
    return (
      <>
        <Flowers3 position={[28, -1.6, 15]} rotation={-1.27} />
        <Flowers3 position={[-10, -1.6, 30]} rotation={1} />
        <Flowers3 position={[-30, -1.6, -2]} rotation={5.2} />
        <Flowers3 position={[25, -1.6, -15]} rotation={3} />
        <Flowers9 position={[5, -1.6, 10]} rotation={4.3} />
        <Flowers9 position={[-25, -1.6, 10]} rotation={2} />
        <Flowers9 position={[-10, -1.6, -30]} rotation={4.3} />
        <Flowers9 position={[12, -1.6, -25]} rotation={-2} />
      </>
    );
  };

  return (
    <>
      <AliceTree />
      <CardAce />
      <Cards />
      {renderFlowers()}
    </>
  );
}
