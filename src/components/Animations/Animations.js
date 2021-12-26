import { Bounce, Rotate, ItemSize } from "../AliceFalling/styles";

export function BounceComponent({ image, width, height }) {
  return (
    <Bounce>
      <ItemSize src={image} width={width} height={height} />
    </Bounce>
  );
}

export function RotateComponent({ image, width, height }) {
  return (
    <Rotate>
      <ItemSize src={image} width={width} height={height} />
    </Rotate>
  );
}
