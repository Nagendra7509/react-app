import styled from "@emotion/styled";
import tw from "tailwind.macro";


const Sortlabel = styled.label `
    ${tw `text-center`}`;
const Select = styled.select `
    ${tw `rounded-md bg-white border border-gray-400 hover:border-gray-700`}`;
const Option = styled.option `
    ${tw ``}`;


export { Sortlabel, Select, Option };
