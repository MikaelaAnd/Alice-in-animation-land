import { Bounce, Rotate, Item } from "../AliceFalling/styles";

export function BounceComponent({ image, width, height }) {
  return (
    <Bounce>
      <Item src={image} width={width} height={height} />
    </Bounce>
  );
}

export function RotateComponent({ image, width, height }) {
  return (
    <Rotate>
      <Item src={image} width={width} height={height} />
    </Rotate>
  );
}
