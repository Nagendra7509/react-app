import styled from "@emotion/styled";
import tw from "tailwind.macro";

const EditToggle = styled.div `
    ${tw `py-4 flex flex-col items-center bg-gray-300 w-full px-2`}`;
const Title = styled.h2 `
    ${tw `text-xl font-bold`}`;
const InputTag = styled.input `
    ${tw `border-2`}`;
const Button = styled.button `
    ${tw `ml-2 px-2 py-1 bg-blue-500 rounded text-white `}
    width:${props=>!props.outlines?100:500}px`;
const ButtonAndInputTag = styled.div `
    ${tw `flex`}`;

export {
    EditToggle,
    Title,
    InputTag,
    Button,
    ButtonAndInputTag
};
