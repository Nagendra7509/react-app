import styled from "@emotion/styled";
import tw from "tailwind.macro";

const DeviceType = styled.div `
    ${tw `py-4 flex flex-col items-center bg-gray-300 w-full`}`;

const Title = styled.h2 `
    ${tw `text-xl font-bold`}`;

const Label = styled.label `
    ${tw ``}`;



export {
    DeviceType,
    Title,
    Label
};
