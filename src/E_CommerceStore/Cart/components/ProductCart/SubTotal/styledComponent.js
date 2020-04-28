import styled from "@emotion/styled";
import tw from "tailwind.macro";

const SubTotalDiv = styled.div `
    ${tw `flex justify-between mt-4`}`;
const SubTotalText = styled.h3 `
    ${tw `text-gray-500`}`;
const TotalAmount = styled.p `
    ${tw `text-yellow-600`}`;

export { SubTotalDiv, SubTotalText, TotalAmount };
