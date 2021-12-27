import greenLamp from "./images/greenLamp.png";
import yellowLamp from "./images/yellowLamp.png";
import flowerLamp from "./images/flowerLamp.png";
import { PositionItem } from "./styles";
import { BounceComponent } from "../Animations/Animations";

export function GreenLampLarge() {
  return (
    <PositionItem>
      <BounceComponent image={greenLamp} width="7rem" height="8rem" />
    </PositionItem>
  );
}
export function GreenLampSmall() {
  return (
    <PositionItem position="flex-end">
      <BounceComponent image={greenLamp} width="4rem" height="5rem" />
    </PositionItem>
  );
}
export function FlowerLampLarge() {
  return (
    <PositionItem position="flex-end">
      <BounceComponent image={flowerLamp} width="6rem" height="7rem" />
    </PositionItem>
  );
}
export function FlowerLampSmall() {
  return (
    <PositionItem>
      <BounceComponent image={flowerLamp} width="4rem" height="5rem" />
    </PositionItem>
  );
}
export function YellowLampLarge() {
  return (
    <PositionItem>
      <BounceComponent image={yellowLamp} width="4rem" height="6rem" />
    </PositionItem>
  );
}
export function YellowLampSmall() {
  return (
    <PositionItem position="flex-end">
      <BounceComponent image={yellowLamp} width="3rem" height="4rem" />
    </PositionItem>
  );
}
