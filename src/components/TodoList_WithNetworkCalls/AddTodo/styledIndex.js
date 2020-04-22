import styled from "@emotion/styled";
import tw from "tailwind.macro";

const InputTag = styled.input `
${tw `w-4/5 h-10`}
border:2px solid red`;

const InputTagDiv = styled.div `
    ${tw `text-center`}`;

export { InputTag, InputTagDiv };
