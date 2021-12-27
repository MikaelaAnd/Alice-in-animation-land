import greenLamp from "./images/greenLamp.png";
import yellowLamp from "./images/yellowLamp.png";
import flowerLamp from "./images/flowerLamp.png";
import { PositionItem } from "./styles";
import { BounceComponent, RotateComponent } from "../Animations/Animations";

export function Lamp() {
  return (
    <>
      <PositionItem>
        <RotateComponent image={greenLamp} width="5rem" height="6rem" />
      </PositionItem>
      <PositionItem position="flex-end">
        <BounceComponent image={greenLamp} width="5rem" height="6rem" />
      </PositionItem>
      <PositionItem position="flex-start">
        <BounceComponent image={flowerLamp} width="5rem" height="6rem" />
      </PositionItem>
      <PositionItem position="flex-end">
        <RotateComponent image={flowerLamp} width="7rem" height="9rem" />
      </PositionItem>
      <PositionItem>
        <BounceComponent image={yellowLamp} width="5rem" height="6rem" />
      </PositionItem>
    </>
  );
}
