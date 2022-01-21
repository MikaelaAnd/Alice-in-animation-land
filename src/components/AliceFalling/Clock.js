import styled from "styled-components";
import { BounceComponent } from "./Animations";
import clock from "./images/clock.png";

export function LargeClock() {
    return(
        <Container>
            <BounceComponent image={clock} />
        </Container>
    );
}

export function SmallClock() {
    return(
        <Container>
            <BounceComponent image={clock} height="10rem" />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    width: 80%;
`;