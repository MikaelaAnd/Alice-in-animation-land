import { PositionItem } from "./styles";
import { BounceComponent } from "../Animations/Animations";
import dark from "./images/teaPotDark.png";
import light from "./images/teaPotLight.png";

export function TeaPotDarkStart() {
  return (
    <>
      <PositionItem position="flex-start">
        <BounceComponent image={dark} alt="" width="5rem" />
      </PositionItem>
    </>
  );
}

export function TeaPotDarkEnd() {
  return (
    <>
      <PositionItem position="flex-end">
        <BounceComponent image={dark} alt="" width="7rem" />
      </PositionItem>
    </>
  );
}

export function TeaPotLightStart() {
  return (
    <>
      <PositionItem position="flex-start">
        <BounceComponent image={light} alt="" width="7rem" />
      </PositionItem>
    </>
  );
}
export function TeaPotLightEnd() {
  return (
    <>
      <PositionItem position="flex-end">
        <BounceComponent image={light} alt="" width="7rem" />
      </PositionItem>
    </>
  );
}

