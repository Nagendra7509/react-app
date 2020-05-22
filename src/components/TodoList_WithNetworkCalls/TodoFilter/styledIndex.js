import styled from "@emotion/styled";
import tw from "tailwind.macro";

const AllBtn = styled.button `
${tw `text-blue-600 mr-2 px-4 py-1 rounded`}
border:1px solid red`;

const ActiveBtn = styled.button `
${tw `text-blue-600 mr-2 px-4 py-1 rounded`}
border:1px solid red`;

const CompletedBtn = styled.button `
${tw `text-blue-600 mr-2 px-4 py-1 rounded`}
border:1px solid red`;

const ClearCompleted = styled.button `
${tw `text-blue-600 mr-2 px-4 py-1 rounded`}
border:1px solid red`;

const Filters = styled.div `
${tw `flex justify-around`}`;

const Button = styled.button `
    ${tw ``}`;

export { AllBtn, ActiveBtn, CompletedBtn, ClearCompleted, Filters, Button };
