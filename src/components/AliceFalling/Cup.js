import { BounceComponent, PulseComponent } from "./Animations";
import darkCup from "./images/cupDarkRight.png";
import lightCup from "./images/cupLightLeft.png";
import styled from "styled-components";

export function CupDark() {
    return(
        <Container>
            <PulseComponent image={darkCup} width="3rem"/>
        </Container>
    )
}

export function CupLight() {
    return(
        <Container>
            <BounceComponent image={lightCup} height="2rem" />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 80%;
`;