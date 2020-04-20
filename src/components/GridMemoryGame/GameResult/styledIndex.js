import styled from "@emotion/styled";
import tw from "tailwind.macro";

const GameResultPage = styled.div `
    ${tw `flex flex-col justify-center items-center mt-48`}`;
const Congratulation = styled.span `
    ${tw `text-green-600`}
    font-weight:bold;
    font-size:30px;`;
const PlayAgainBtn = styled.button `
    ${tw `bg-blue-800 p-2 rounded`}
    font-size:24px;
    `;

export { GameResultPage, Congratulation, PlayAgainBtn };
