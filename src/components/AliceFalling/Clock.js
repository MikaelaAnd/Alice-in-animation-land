import { PositionItem } from "./styles";
import { BounceComponent } from "../Animations/Animations";
import clock from "./images/clock.png";

export function LargeClockLeft() {
    return(
        <PositionItem>
            <BounceComponent image={clock} alt="" />
        </PositionItem>
    );
}

export function SmallClockLeft() {
    return(
        <PositionItem>
            <BounceComponent image={clock} alt="" height="10rem" />
        </PositionItem>
    );
}
export function LargeClockRight() {
    return(
        <PositionItem position="flex-end">
            <BounceComponent image={clock} alt="" />
        </PositionItem>
    );
}
export function SmallClockRight() {
    return(
        <PositionItem position="flex-end">
            <BounceComponent image={clock} alt="" height="10rem" />
        </PositionItem>
    );
}