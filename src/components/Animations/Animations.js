import { Bounce, Rotate, Item, Pulse } from "../AliceFalling/styles";

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

export function PulseComponent({ image, width, height }) {
  return(
    <Pulse>
      <Item src={image} width={width} height={height} />
    </Pulse>
  )
}
