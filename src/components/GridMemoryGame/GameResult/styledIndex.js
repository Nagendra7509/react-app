import styled from "@emotion/styled";
import tw from "tailwind.macro";

const GameResultPage = styled.div `
    ${tw `flex flex-col justify-center items-center mt-48`}`;
const Congratulation = styled.span `
    ${tw `text-green-600`}
    font-weight:bold;
    font-size:30px;`;
const PlayAgainBtn = styled.button `
    ${tw ` p-2 rounded`}
    font-size:24px;
    background:#5f7ee6;
    `;

export { GameResultPage, Congratulation, PlayAgainBtn };
