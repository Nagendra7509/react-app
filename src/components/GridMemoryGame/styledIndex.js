import styled from "@emotion/styled";
import tw from "tailwind.macro";


//console.log(props => props.background);
const GridGame = styled.div `
    ${tw `flex flex-col items-center justify-center min-h-screen`}
    background:${props=>props.background};
    color:${props=>props.color}`;

export { GridGame };
