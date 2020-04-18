import styled from "@emotion/styled";
import tw from "tailwind.macro";

const Level = styled.span `${tw ``}font-size:24px`;
const ThemeBtn = styled.button `${tw ``} font-size:24px; ${props=>({border:props.border=="Light"?"2px solid black":"2px solid white"})}`;
const HeaderPart = styled.div `${tw `w-1/3 text-center`}font-size:24px`;
const EachCell = styled.div `${tw `w-20 h-20 bg-gray-900 m-1`}`;
const Cells = styled.div `${tw `flex flex-wrap`}width:300px`;

export { Level, ThemeBtn, HeaderPart, EachCell, Cells };
