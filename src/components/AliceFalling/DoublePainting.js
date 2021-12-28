import { BounceComponent, PositionItem, PulseComponent } from "./styles";
import PaintingLeft from "./images/doublePaintingLeft.png";
import PaintingRight from "./images/doublePaintingRight.png";

export function LargeDoublePaintingLeft() {
  return (
    <PositionItem>
      <BounceComponent image={PaintingLeft} alt="" width="13rem" />
    </PositionItem>
  );
}
export function SmallDoublePaintingLeft() {
  return (
    <PositionItem>
      <PulseComponent image={PaintingLeft} alt="" width="5rem" />
    </PositionItem>
  );
}
export function LargeDoublePaintingRight() {
  return (
    <PositionItem position="flex-end">
      <BounceComponent image={PaintingRight} alt="" width="13rem" />
    </PositionItem>
  );
}
export function SmallDoublePaintingRight() {
  return (
    <PositionItem position="flex-end">
      <BounceComponent image={PaintingRight} alt="" width="5rem" />
    </PositionItem>
  );
}
