import styled from "@emotion/styled";
import tw from "tailwind.macro";

const ItemsCount = styled.span `
${tw `text-red-700`}
font-size:20px`;

const Footer = styled.div `
${tw `flex justify-around m-5`}`;

export { ItemsCount, Footer };
