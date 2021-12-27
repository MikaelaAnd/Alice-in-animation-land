import { PositionItem } from "./styles";
import { BounceComponent } from "../Animations/Animations";
import PaintingLeft from "./images/paintingLeft.png";
import PaintingRight from "./images/paintingRight.png";

export function LargePaintingLeft() {
    return(
        <>
        <PositionItem>
            <BounceComponent image={PaintingRight} height="15rem" />
        </PositionItem>
        </>
    )
}
export function LargePaintingRight() {
    return(
        <>
        <PositionItem position="flex-end">
            <BounceComponent image={PaintingLeft} height="15rem" />
        </PositionItem>
        </>
    )
}

export function SmallPaintingLeft() {
    return(
        <>
        <PositionItem>
            <BounceComponent image={PaintingRight} height="5rem" />
        </PositionItem>
        </>
    ) 
}
export function SmallPaintingRight() {
    return(
        <>
        <PositionItem position="flex-end">
            <BounceComponent image={PaintingLeft} height="5rem" />
        </PositionItem>
        </>
    ) 
}