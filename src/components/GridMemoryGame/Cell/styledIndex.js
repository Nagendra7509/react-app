import styled from "@emotion/styled";
import tw from "tailwind.macro";

const Grid = styled.button `
    ${tw ` bg-gray-700 m-1 flex justify-center items-center pointer-events-auto`}
    background:${props => props.background};
    width:${props=>props.eachGridWith}px;
    height:${props=>props.eachGridWith}px;
    ;
`;

export { Grid };
//m-1 flex justify-center items-center bg-blue-900 pointer-events-auto
