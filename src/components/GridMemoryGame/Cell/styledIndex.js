import styled from "@emotion/styled";
import tw from "tailwind.macro";

const Grid = styled.button `
    ${tw ` bg-blue-900 m-1 flex justify-center items-center pointer-events-auto`}
    background:${props => props.background};
    width:${props=>props.eachGridWith}px;
    height:${props=>props.eachGridWith}px;
    transition: background 1s;
    transition-timing-function: linear;
    ;
`;

export { Grid };
