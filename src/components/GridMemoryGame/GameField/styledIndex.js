import styled from "@emotion/styled";
import tw from "tailwind.macro";

const GridCells = styled.div `
    ${tw `flex flex-row flex-wrap justify-center border border-white`}
    width:${props=>props.width}px`;

export { GridCells };
