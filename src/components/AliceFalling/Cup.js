import { PositionItem } from "./styles";
import { BounceComponent, PulseComponent } from "../Animations/Animations";
import darkRight from "./images/cupDarkRight.png";
import darkLeft from "./images/cupDarkLeft.png";
import lightLeft from "./images/cupLightLeft.png";
import lightRight from "./images/cupLightRight.png";

export function CupDarkRight() {
    return(
        <PositionItem position="flex-end">
            <BounceComponent image={darkRight} alt="" width="3rem"/>
        </PositionItem>
    )
}
export function CupDarkLeft() {
    return(
        <PositionItem>
            <PulseComponent image={darkLeft} alt="" height="4rem" />
        </PositionItem>
    )
}
export function CupLightRight() {
    return(
        <PositionItem position="flex-end">
            <BounceComponent image={lightRight} alt="" width="5rem"/>
        </PositionItem>
    )
}
export function CupLightLeft() {
    return(
        <PositionItem>
            <BounceComponent image={lightLeft} alt="" height="2rem" />
        </PositionItem>
    )
}