import styled from "@emotion/styled";
import tw from "tailwind.macro";

const HeaderPart = styled.div `
    ${tw `flex flex-col items-center`}
    background:${props=>props.selectedTheme.background}
    color:${props=>props.selectedTheme.color}`;

const TopLevel = styled.p `
    ${tw `text-xl mb-12`}`;
const Level = styled.span `
    ${tw `text-xl`}`;
const ThemeBtn = styled.button `
    ${tw `text-xl  px-2 py-1 border`}`;
const LevelAndTheme = styled.div `
    ${tw `flex items-center justify-between mb-4 px-1`}
    width:300px`;


export { HeaderPart, Level, ThemeBtn, TopLevel, LevelAndTheme };
