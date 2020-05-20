import styled from "@emotion/styled";
import tw from "tailwind.macro";



const CollapseExpandPart = styled.div `
    ${tw `py-4 flex flex-col items-center bg-gray-400 w-full`}`;

const Title = styled.h2 `
    ${tw `text-xl font-bold`}`;

const Label = styled.label `
    ${tw `flex justify-between`}`;

const Button = styled.button `
    ${tw `px-2 py-1 bg-blue-500 rounded text-white`}`;

const ListOfItems = styled.div `
    ${tw `flex flex-col`}`;

const Item = styled.p `
    ${tw }`;

const ButtonAndList = styled.div `
    ${tw }`;

export {
    CollapseExpandPart,
    Title,
    Label,
    Button,
    ListOfItems,
    Item,
    ButtonAndList
};
