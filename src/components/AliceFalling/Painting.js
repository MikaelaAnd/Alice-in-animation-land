import { PositionItem } from "./styles";
import { BounceComponent } from "../Animations/Animations";
import PaintingLeft from "./images/paintingLeft.png";
import PaintingRight from "./images/paintingRight.png";

export function LargePaintingStart() {
    return(
        <>
        <PositionItem>
            <BounceComponent image={PaintingRight} height="15rem" />
        </PositionItem>
        </>
    )
}
export function LargePaintingEnd() {
    return(
        <>
        <PositionItem position="flex-end">
            <BounceComponent image={PaintingLeft} height="15rem" />
        </PositionItem>
        </>
    )
}

export function SmallPaintingStart() {
    return(
        <>
        <PositionItem>
            <BounceComponent image={PaintingRight} height="5rem" />
        </PositionItem>
        </>
    ) 
}
export function SmallPaintingEnd() {
    return(
        <>
        <PositionItem position="flex-end">
            <BounceComponent image={PaintingLeft} height="5rem" />
        </PositionItem>
        </>
    ) 
}